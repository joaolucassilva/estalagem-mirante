import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://estalagemmirante.com.br';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // Exemplo: se tiver área administrativa no futuro
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}