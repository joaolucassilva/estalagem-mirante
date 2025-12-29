import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowLeft,
  MessageCircle,
  AlertCircle,
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsappFloat } from "@/components/ui/WhatsappFloat";
import { CONTACT_INFO } from "@/constants/images";

export const metadata: Metadata = {
  title: "Contato e Localização",
  description:
    "Fale com a Estalagem Mirante. Reservas pelo WhatsApp, telefone ou e-mail. Veja como chegar em Aiuruoca.",
};

export default function ContatoPage() {
  const whatsappLink = `https://wa.me/${
    CONTACT_INFO.whatsapp
  }?text=${encodeURIComponent("Olá, estou no site e gostaria de conversar.")}`;

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 px-4 bg-stone-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Botão Voltar */}
          <div className="mb-8">
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

          {/* Cabeçalho */}
          <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4">
              Vamos conversar?
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
              Seja para tirar dúvidas sobre a estrada, pedir dicas de roteiro ou
              confirmar sua reserva. Na Estalagem Mirante, o atendimento é
              pessoal e feito com carinho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coluna da Esquerda: Informações e Botões */}
            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 h-full flex flex-col">
                <h3 className="text-xl font-bold text-stone-800 mb-8 font-serif">
                  Canais de Atendimento
                </h3>

                <div className="space-y-8 grow">
                  {/* Telefone */}
                  <div className="flex items-start gap-4 group">
                    <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-800 mb-1">
                        Por Telefone
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {/* Formatação visual do telefone */}
                        {CONTACT_INFO.whatsappDisplay}{" "}
                        <span className="text-emerald-600 font-semibold text-xs bg-emerald-50 px-2 py-0.5 rounded-full ml-1">
                          WhatsApp
                        </span>
                      </p>
                      <p className="text-gray-600 text-sm">
                        {CONTACT_INFO.phone}
                      </p>
                    </div>
                  </div>

                  {/* E-mail */}
                  <div className="flex items-start gap-4 group">
                    <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-800 mb-1">
                        Por E-mail
                      </h4>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-gray-600 hover:text-emerald-600 transition text-sm break-all"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Endereço */}
                  <div className="flex items-start gap-4 group">
                    <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-800 mb-1">
                        Nossa Localização
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Estrada Aiuruoca/Alagoa, km 04
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        Aiuruoca, Minas Gerais - Serra da Mantiqueira
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-10 pt-8 border-t border-stone-100 space-y-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-200 transform hover:-translate-y-1"
                  >
                    <MessageCircle size={20} />
                    Chamar no WhatsApp
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="w-full bg-stone-50 border-2 border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-800 py-4 rounded-xl font-bold transition flex items-center justify-center gap-2"
                  >
                    <Mail size={20} />
                    Enviar E-mail
                  </a>
                </div>
              </div>
            </div>

            {/* Coluna da Direita: Mapa Interativo */}
            <div className="h-full min-h-[450px] animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
              <div className="h-full w-full rounded-2xl overflow-hidden shadow-lg border border-stone-100 relative bg-stone-200 group">
                <iframe
                  title="Mapa Estalagem Mirante Contato"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://maps.google.com/maps?q=Estalagem%20Mirante%20Aiuruoca&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="grayscale hover:grayscale-0 transition duration-1000"
                ></iframe>

                {/* Overlay de dica (UI/UX touch) */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-sm text-xs text-gray-600 border border-white/50 pointer-events-none">
                  <p className="flex items-center gap-2">
                    <AlertCircle
                      size={14}
                      className="text-emerald-600 shrink-0"
                    />
                    <span>
                      <strong>Dica:</strong> Salve o mapa offline no Google Maps
                      antes de pegar a estrada, o sinal de internet pode oscilar
                      na serra.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsappFloat />
    </>
  );
}
