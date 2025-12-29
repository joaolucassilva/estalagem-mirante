import { CONTACT_INFO, IMAGES } from '@/constants/images';

export function generateLocalBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'LodgingBusiness',
        name: 'Estalagem Mirante',
        image: [IMAGES.hero],
        '@id': process.env.NEXT_PUBLIC_SITE_URL,
        url: process.env.NEXT_PUBLIC_SITE_URL,
        telephone: CONTACT_INFO.whatsapp,
        email: CONTACT_INFO.email,
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Estrada Aiuruoca/Alagoa, km 04',
            addressLocality: 'Aiuruoca',
            addressRegion: 'MG',
            postalCode: '37450-000',
            addressCountry: 'BR'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: -21.975608, // Coordenadas aproximadas de Aiuruoca
            longitude: -44.697851
        },
        priceRange: '$$',
        checkinTime: '14:00',
        checkoutTime: '12:00',
        amenityFeature: [
            { '@type': 'LocationFeatureSpecification', name: 'Café da Manhã', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Vista Panorâmica', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Estacionamento Gratuito', value: true }
        ]
    };
}