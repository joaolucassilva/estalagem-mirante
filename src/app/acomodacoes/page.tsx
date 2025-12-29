import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Coffee } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsappFloat } from "@/components/ui/WhatsappFloat";
import { ChaleCard } from "@/components/chales/ChaleCard";
import { CHALES_DATA } from "@/data/chales";

// SEO Otimizado
export const metadata: Metadata = {
  title: "Chalés e Acomodações",
  description:
    "Conheça nossos chalés Estrela, Lua, Sol, Terra, Marte e Júpiter. Opções para casais e famílias com vista para as montanhas de Aiuruoca.",
};

export default function AcomodacoesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 px-4 bg-stone-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-800 transition mb-6 group"
            >
              <ArrowLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Voltar para o Início
            </Link>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6">
              Nossas Acomodações
            </h1>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 max-w-4xl">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Em nossos chalés{" "}
                <strong>Estrela, Lua, Sol, Terra, Marte e Júpiter</strong> você
                desfrutará de um ambiente acolhedor e cheio de paz. Ao som das
                águas e dos passarinhos, ou no balanço de uma rede, sentirá o
                sossego das terras de Minas adentrar seu coração.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full">
                <Coffee size={16} /> Horário de recepção: 7:00 às 22:00 horas
              </div>
            </div>
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CHALES_DATA.map((chale, index) => (
              <ChaleCard key={chale.id} data={chale} priority={index < 2} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsappFloat />
    </>
  );
}
