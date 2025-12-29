import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  CreditCard,
  Banknote,
  Clock,
  PawPrint,
  Baby,
  AlertCircle,
  Calendar,
  Sun,
  Star,
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsappFloat } from "@/components/ui/WhatsappFloat";
import { CONTACT_INFO } from "@/constants/images";

export const metadata: Metadata = {
  title: "Tarifas e Pacotes",
  description:
    "Confira nossas condições de reserva, check-in, check-out e políticas para crianças. Planeje sua estadia na Estalagem Mirante.",
};

export default function PrecosPage() {
  const whatsappLink = `https://wa.me/${
    CONTACT_INFO.whatsapp
  }?text=${encodeURIComponent(
    "Olá, gostaria de um orçamento para minha estadia."
  )}`;

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 px-4 bg-stone-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Botão Voltar */}
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

          <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4">
              Planeje sua Estadia
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl">
              Transparência e cuidado em cada detalhe para que sua única
              preocupação seja descansar.
            </p>
          </div>

          {/* Banner de Preço Sob Consulta - CTA Principal */}
          <div className="bg-emerald-900 text-white p-8 rounded-2xl shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden animate-in fade-in zoom-in duration-700 delay-100">
            {/* Efeito visual de fundo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 font-serif">
                Valores Personalizados
              </h3>
              <p className="text-emerald-100 max-w-md text-sm md:text-base">
                Trabalhamos com tarifas dinâmicas para oferecer o melhor valor
                de acordo com a data e o chalé escolhido. Fale direto com a
                gente!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 text-sm font-semibold text-emerald-200">
                <span className="flex items-center gap-2">
                  <Phone size={16} /> {CONTACT_INFO.whatsappDisplay}
                </span>
                <span className="flex items-center gap-2">
                  <Phone size={16} /> {CONTACT_INFO.phone}
                </span>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition shadow-lg whitespace-nowrap flex items-center gap-2 transform hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              Solicitar Orçamento
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Formas de Pagamento */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col h-full animate-in slide-in-from-left-4 duration-700 delay-200">
              <h3 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
                <CreditCard className="text-emerald-600" /> Facilidades de
                Pagamento
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Para confirmar sua reserva e garantir seus dias no paraíso:
              </p>
              <div className="space-y-4 mt-auto">
                <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-xl border border-stone-100 transition hover:border-emerald-200">
                  <div className="bg-emerald-100 p-2 rounded-full text-emerald-700">
                    <Banknote size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 text-sm">
                      PIX ou Transferência
                    </h4>
                    <p className="text-xs text-gray-500">
                      Sinal para reserva e restante no check-in.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-xl border border-stone-100 transition hover:border-emerald-200">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-700">
                    <CreditCard size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 text-sm">
                      Cartão de Crédito
                    </h4>
                    <p className="text-xs text-gray-500">
                      Aceitamos as principais bandeiras.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Horários e Regras */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col h-full animate-in slide-in-from-right-4 duration-700 delay-200">
              <h3 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
                <Clock className="text-emerald-600" /> Harmonia da Estadia
              </h3>
              <ul className="space-y-4 mb-6">
                <li className="flex justify-between items-center border-b border-stone-100 pb-3">
                  <span className="text-gray-600 text-sm">
                    Check-in (Entrada)
                  </span>
                  <span className="font-bold text-stone-800 bg-emerald-50 px-3 py-1 rounded-md text-xs">
                    14:00
                  </span>
                </li>
                <li className="flex justify-between items-center border-b border-stone-100 pb-3">
                  <span className="text-gray-600 text-sm">
                    Check-out (Saída)
                  </span>
                  <span className="font-bold text-stone-800 bg-stone-100 px-3 py-1 rounded-md text-xs">
                    12:00
                  </span>
                </li>
                <li className="flex justify-between items-center border-b border-stone-100 pb-3">
                  <span className="text-gray-600 text-sm">
                    Recepção e Apoio
                  </span>
                  <span className="font-bold text-stone-800 text-xs">
                    07:00 às 22:00
                  </span>
                </li>
              </ul>

              {/* Aviso sobre Pets */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-sm text-gray-600 flex items-start gap-3 mt-auto">
                <PawPrint
                  size={18}
                  className="text-stone-400 mt-1 min-w-[18px]"
                />
                <div>
                  <strong className="block text-stone-800 mb-1 text-xs uppercase tracking-wide">
                    Sobre Animais
                  </strong>
                  <p className="text-xs leading-relaxed">
                    Para preservar a fauna silvestre local e o silêncio
                    absoluto, <strong>não aceitamos pets.</strong> Agradecemos a
                    compreensão.
                  </p>
                </div>
              </div>
            </section>

            {/* Política de Crianças */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 md:col-span-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h3 className="text-xl font-bold text-stone-800 flex items-center gap-2">
                  <Baby className="text-emerald-600" /> Família na Serra
                </h3>
                <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-semibold">
                  Valores para camas extras / acompanhantes
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-stone-50 border border-stone-100 p-5 rounded-xl text-center hover:shadow-md transition">
                  <span className="block text-lg font-serif font-bold text-emerald-600 mb-1">
                    Cortesia
                  </span>
                  <p className="text-sm font-bold text-stone-800 uppercase tracking-wide">
                    Crianças até 3 anos
                  </p>
                  <p className="text-xs text-gray-500 mt-2 px-2">
                    Acomodadas na cama dos pais ou berço próprio.
                  </p>
                </div>
                <div className="bg-stone-50 border border-stone-100 p-5 rounded-xl text-center hover:shadow-md transition">
                  <span className="block text-lg font-serif font-bold text-emerald-600 mb-1">
                    50% da Diária
                  </span>
                  <p className="text-sm font-bold text-stone-800 uppercase tracking-wide">
                    De 4 a 11 anos
                  </p>
                  <p className="text-xs text-gray-500 mt-2 px-2">
                    Valor referente a meia diária de adulto (cama extra).
                  </p>
                </div>
                <div className="bg-stone-50 border border-stone-100 p-5 rounded-xl text-center hover:shadow-md transition">
                  <span className="block text-lg font-serif font-bold text-emerald-600 mb-1">
                    Valor Integral
                  </span>
                  <p className="text-sm font-bold text-stone-800 uppercase tracking-wide">
                    A partir de 12 anos
                  </p>
                  <p className="text-xs text-gray-500 mt-2 px-2">
                    Considerado adulto na acomodação.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-2 text-xs text-gray-500 bg-stone-50 p-3 rounded-lg mx-auto max-w-2xl justify-center">
                <AlertCircle size={14} className="mt-0.5" />
                <p>
                  Hóspede Individual (Single): O valor corresponde a 50% da
                  diária de casal + taxa de 30%.
                </p>
              </div>
            </section>

            {/* Cancelamento */}
            <section className="bg-stone-100 p-8 rounded-2xl border border-stone-200 md:col-span-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <h3 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
                <Calendar className="text-stone-600" /> Política de Cancelamento
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Imprevistos acontecem. Para garantir a organização da pousada,
                seguimos as seguintes diretrizes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-700">
                <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                  <h4 className="font-bold text-emerald-800 mb-3 uppercase tracking-wide text-xs flex items-center gap-2">
                    <Sun size={14} /> Datas Normais
                  </h4>
                  <p className="mb-2 text-gray-600">
                    Cancelamento gratuito até <strong>5 dias antes</strong> do
                    check-in.
                  </p>
                  <p className="text-xs text-gray-500">
                    Possibilidade de remarcação (crédito) para utilizar em até 6
                    meses.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                  <h4 className="font-bold text-emerald-800 mb-3 uppercase tracking-wide text-xs flex items-center gap-2">
                    <Star size={14} /> Feriados Prolongados
                  </h4>
                  <p className="mb-2 text-gray-600">
                    Cancelamento gratuito até <strong>10 dias antes</strong> do
                    check-in.
                  </p>
                  <p className="text-xs text-gray-500">
                    Remarcação válida para até 6 meses (exceto outros feriados).
                  </p>
                </div>
              </div>
              <div className="mt-6 text-xs text-gray-500 text-center italic">
                Em caso de não comparecimento sem aviso prévio (No Show), o
                valor depositado será retido como garantia da reserva.
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsappFloat />
    </>
  );
}
