import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsappFloat } from "@/components/ui/WhatsappFloat";
import { AtrativoCard } from "@/components/atrativos/AtrativoCard";
import { ATRATIVOS_DATA } from "@/data/atrativos";

export const metadata: Metadata = {
  title: "Atrativos Naturais e Passeios",
  description:
    "Descubra as cachoeiras, trilhas e picos de Aiuruoca. Pico do Papagaio, Vale do Matutu e muito mais perto da Estalagem Mirante.",
};

export default function AtrativosPage() {
  const headerImage = "/images/atrativos/atrativos.jpg";

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 px-4 bg-stone-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Navegação Voltar */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-800 transition group"
            >
              <ArrowLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Voltar para o Início
            </Link>
          </div>

          {/* Header Hero da Página */}
          <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden mb-10 shadow-2xl group animate-in fade-in zoom-in duration-700">
            <div className="absolute inset-0 bg-linear-to-r from-stone-900/80 via-stone-900/40 to-transparent z-10"></div>
            <Image
              src={headerImage}
              alt="Atrativos de Aiuruoca"
              fill
              className="object-cover transition duration-1000 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 text-white">
              <span className="text-emerald-400 font-bold tracking-widest text-sm uppercase mb-2">
                Ecoturismo & Aventura
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight">
                A natureza sagrada <br />
                de Aiuruoca.
              </h1>
              <p className="text-lg md:text-xl max-w-xl font-light text-gray-200">
                Cachoeiras de águas cristalinas, picos que tocam as nuvens e
                vales silenciosos. Aqui, a paisagem convida você a explorar.
              </p>
            </div>
          </div>

          {/* Texto de Apoio (Centralizado) */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-stone-100 max-w-4xl mx-auto text-center relative -mt-16 z-30 mb-16">
            <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-serif italic">
              &ldquo;Aiuruoca é terra de águas que curam e montanhas que
              protegem.&rdquo;
            </p>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Conhecida por sua energia única, nossa região é o cenário perfeito
              tanto para quem busca a adrenalina dos esportes de aventura quanto
              para quem deseja apenas um banho de cachoeira revigorante. <br />
              <span className="text-emerald-700 font-bold">
                Confira as maravilhas que esperam por você a poucos minutos da
                Estalagem:
              </span>
            </p>
          </div>

          {/* Grid de Atrativos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ATRATIVOS_DATA.map((item, index) => (
              <AtrativoCard key={index} data={item} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsappFloat />
    </>
  );
}
