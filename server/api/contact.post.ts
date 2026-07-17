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
const rateLimits = new Map<string, RateLimitEntry>();

const cleanText = (value: unknown, maxLength: number) => {
    if (typeof value !== 'string') {
        return '';
    }

    return value.trim().slice(0, maxLength);
};

const checkRateLimit = (ip: string) => {
    const now = Date.now();

    for (const [key, entry] of rateLimits) {
        if (entry.resetAt <= now) {
            rateLimits.delete(key);
        }
    }

    const entry = rateLimits.get(ip);

    if (entry && entry.count >= RATE_LIMIT_MAX) {
        throw createError({
            statusCode: 429,
            statusMessage: 'Demasiados mensajes. Inténtalo de nuevo más tarde.'
        });
    }

    rateLimits.set(ip, {
        count: (entry?.count ?? 0) + 1,
        resetAt: entry?.resetAt ?? now + RATE_LIMIT_WINDOW
    });
};

export default defineEventHandler(async (event) => {
    const body = await readBody<ContactBody>(event);
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
            statusMessage: 'Revisa los datos del formulario.'
        });
    }

    const ip = getRequestIP(event, { xForwardedFor: true }) ?? 'unknown';
    checkRateLimit(ip);

    const config = useRuntimeConfig(event);

    if (!config.smtpHost || !config.smtpUser || !config.smtpPassword) {
        throw createError({
            statusCode: 500,
            statusMessage: 'El servicio de correo no está configurado.'
        });
    }

    const transporter = nodemailer.createTransport({
        host: config.smtpHost,
        port: Number(config.smtpPort),
        secure: true,
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
            statusMessage: 'No se pudo enviar el mensaje.'
        });
    }

    return { success: true };
});
