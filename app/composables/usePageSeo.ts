interface PageSeoOptions {
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
}

export const usePageSeo = ({
    title,
    description,
    image = '/images/hero_banner_desktop.png',
    imageAlt = 'CreaHistoria Studio, diseño e ilustración a medida'
}: PageSeoOptions) => {
    const route = useRoute();
    const config = useRuntimeConfig();
    const siteUrl = config.public.siteUrl.replace(/\/$/, '');
    const canonicalUrl = computed(() => `${siteUrl}${route.path === '/' ? '/' : route.path}`);
    const imageUrl = `${siteUrl}${image}`;

    useSeoMeta({
        title,
        description,
        robots: 'index, follow, max-image-preview:large',
        ogTitle: title,
        ogDescription: description,
        ogType: 'website',
        ogUrl: canonicalUrl,
        ogSiteName: 'CreaHistoria Studio',
        ogLocale: 'es_ES',
        ogImage: imageUrl,
        ogImageAlt: imageAlt,
        twitterCard: 'summary_large_image',
        twitterTitle: title,
        twitterDescription: description,
        twitterImage: imageUrl,
        twitterImageAlt: imageAlt
    });

    useHead({
        link: [
            {
                rel: 'canonical',
                href: canonicalUrl
            }
        ]
    });
};
