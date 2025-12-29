export const IMAGES = {
    // Imagem principal da Home
    hero: "/images/home/hero.jpg",

    // Imagens usadas nos cards de "Teaser" na Home
    chaleTeaser: "/images/home/chale.jpg",
    naturezaTeaser: "/images/home/natureza.jpg",

    // Imagem do Mapa/Localização
    local: "/images/home/local.jpg",
};

export const CONTACT_INFO = {
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "5535999831400",
    get whatsappDisplay() {
        const raw = this.whatsapp;
        // Remove country code (55) if present at start
        const clean = raw.replace(/^55/, "");
        // Format as (XX) XXXXX-XXXX
        return clean.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    },
    phone: process.env.NEXT_PUBLIC_PHONE || "(35) 3419-0400",
    email: process.env.NEXT_PUBLIC_EMAIL || "estalagemmirante@hotmail.com",
    address: "Estrada Aiuruoca/Alagoa, km 04 - Aiuruoca, MG"
};