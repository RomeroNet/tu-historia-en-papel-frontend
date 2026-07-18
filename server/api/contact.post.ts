import nodemailer from 'nodemailer';

interface ContactBody {
    name?: unknown;
    email?: unknown;
    message?: unknown;
    website?: unknown;
}

interface RateLimitEntry {
    count: number;
    resetAt: number;
}

const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_MAX_ENTRIES = 10_000;
const rateLimits = new Map<string, RateLimitEntry>();

const cleanText = (value: unknown, maxLength: number) => {
    if (typeof value !== 'string') {
        return '';
    }

    return value.trim().slice(0, maxLength);
};

const checkRateLimit = (ip: string) => {
    const now = Date.now();
    const entry = rateLimits.get(ip);

    if (entry?.resetAt && entry.resetAt <= now) {
        rateLimits.delete(ip);
    }

    const activeEntry = rateLimits.get(ip);

    if (activeEntry && activeEntry.count >= RATE_LIMIT_MAX) {
        throw createError({
            statusCode: 429,
            statusMessage: 'Too Many Requests',
            message: 'Demasiados mensajes. Inténtalo de nuevo más tarde.'
        });
    }

    if (!activeEntry && rateLimits.size >= RATE_LIMIT_MAX_ENTRIES) {
        const oldestIp = rateLimits.keys().next().value;

        if (oldestIp) {
            rateLimits.delete(oldestIp);
        }
    }

    rateLimits.set(ip, {
        count: (activeEntry?.count ?? 0) + 1,
        resetAt: activeEntry?.resetAt ?? now + RATE_LIMIT_WINDOW
    });
};

export default defineEventHandler(async (event) => {
    const rawBody = await readBody<unknown>(event);
    const body = rawBody && typeof rawBody === 'object' && !Array.isArray(rawBody)
        ? rawBody as ContactBody
        : {};
    const website = cleanText(body.website, 200);

    if (website) {
        return { success: true };
    }

    const name = cleanText(body.name, 100);
    const email = cleanText(body.email, 254);
    const message = cleanText(body.message, 5000);

    if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Bad Request',
            message: 'Revisa los datos del formulario.'
        });
    }

    const ip = getRequestIP(event, { xForwardedFor: true });

    if (ip) {
        checkRateLimit(ip);
    }

    const config = useRuntimeConfig(event);

    if (!config.smtpHost || !config.smtpUser || !config.smtpPassword) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
            message: 'El servicio de correo no está configurado.'
        });
    }

    const smtpPort = Number(config.smtpPort);

    if (!Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65_535) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
            message: 'El puerto SMTP no está configurado correctamente.'
        });
    }

    const transporter = nodemailer.createTransport({
        host: config.smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
            user: config.smtpUser,
            pass: config.smtpPassword
        }
    });

    try {
        await transporter.sendMail({
            from: config.smtpUser,
            to: config.smtpTo || config.smtpUser,
            replyTo: email,
            subject: `Nueva consulta de ${name.replace(/[\r\n]/g, ' ')}`,
            text: [
                `Nombre: ${name}`,
                `Email: ${email}`,
                '',
                message
            ].join('\n')
        });
    } catch (error) {
        console.error(
            'Contact email failed:',
            error instanceof Error ? error.message : 'Unknown SMTP error'
        );

        throw createError({
            statusCode: 502,
            statusMessage: 'Bad Gateway',
            message: 'No se pudo enviar el mensaje.'
        });
    }

    return { success: true };
});
