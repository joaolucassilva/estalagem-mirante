import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Estalagem Mirante',
        short_name: 'Estalagem Mirante',
        description: 'Pousada e Chalés em Aiuruoca - MG',
        start_url: '/',
        display: 'standalone',
        background_color: '#fafaf9', // stone-50
        theme_color: '#059669', // emerald-600
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}