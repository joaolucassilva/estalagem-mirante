import Image from "next/image";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { IMAGES, CONTACT_INFO } from "@/constants/images";

export function LocationSection() {
  return (
    <section
      id="localizacao"
      className="py-24 bg-white relative overflow-hidden border-t border-stone-100"
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="bg-emerald-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 flex flex-col justify-center text-white">
            <span className="text-emerald-400 font-bold tracking-wider text-sm uppercase mb-2">
              Estamos te esperando
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              O caminho para a paz é mais curto do que você imagina.
            </h2>

            <p className="text-emerald-100 mb-8 text-lg leading-relaxed">
              Localizada em Aiuruoca, no coração da Mantiqueira, a Estalagem
              Mirante é o destino perfeito para quem busca isolamento sem abrir
              mão do acesso fácil.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-800/50 p-2 rounded-lg">
                  <MapPin className="text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold">Localização Privilegiada</h4>
                  <p className="text-emerald-200 text-sm">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-emerald-800/50 p-2 rounded-lg">
                  <Phone className="text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold">Fale Conosco</h4>
                  <p className="text-emerald-200 text-sm">
                    {CONTACT_INFO.whatsappDisplay} | {CONTACT_INFO.phone}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá, gostaria de reservar minha estadia.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold text-center hover:bg-emerald-50 transition shadow-lg transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Solicitar Reserva via WhatsApp
            </a>
          </div>

          <div className="md:w-1/2 h-64 md:h-auto relative">
            <Image
              src={IMAGES.local}
              alt="Mapa visual da região"
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-emerald-900/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
