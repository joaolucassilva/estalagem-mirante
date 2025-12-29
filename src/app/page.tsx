import { Metadata } from "next";

// Componentes Globais
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsappFloat } from "@/components/ui/WhatsappFloat";

// Componentes Específicos da Home
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { AccommodationsTeaser } from "@/components/home/AccommodationsTeaser";
import { LocationSection } from "@/components/home/LocationSection";

// SEO Helper
import { generateLocalBusinessSchema } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Estalagem Mirante | Chalés em Aiuruoca - MG",
  description:
    "Hospede-se na Serra da Mantiqueira com vista para o Pico do Papagaio. Chalés aconchegantes, cachoeiras próximas e café da manhã mineiro.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
};

export default function Home() {
  const jsonLd = generateLocalBusinessSchema();

  return (
    <>
      {/* Script JSON-LD para o Google (SEO Técnico) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="min-h-screen bg-stone-50">
        {/* 1. Hero: Imagem grande e Título */}
        <Hero />

        {/* 2. Sobre: Texto Institucional e Citação */}
        <AboutSection />

        {/* 3. Features: Ícones de Café, Wi-Fi, etc */}
        <FeaturesSection />

        {/* 4. Teaser: Atalho visual para a página de Acomodações */}
        <AccommodationsTeaser />

        {/* 5. Localização: Mapa e CTA de Contato */}
        <LocationSection />
      </main>

      <Footer />
      <WhatsappFloat />
    </>
  );
}
