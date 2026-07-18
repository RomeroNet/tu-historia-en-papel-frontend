const routes = [
    '/',
    '/portfolio/birthday',
    '/portfolio/business',
    '/portfolio/restaurant',
    '/portfolio/menu'
];

export default defineEventHandler((event) => {
    const config = useRuntimeConfig(event);
    const siteUrl = config.public.siteUrl.replace(/\/$/, '');
    const urls = routes
        .map((route) => `    <url><loc>${siteUrl}${route}</loc></url>`)
        .join('\n');

    setResponseHeader(event, 'Content-Type', 'application/xml; charset=UTF-8');

    return [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        urls,
        '</urlset>'
    ].join('\n');
});
