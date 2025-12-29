import Image from "next/image";
import Link from "next/link";
import { Calendar, Star } from "lucide-react";
import { CONTACT_INFO } from "@/constants/images";

export function Hero() {
  return (
    <section className="relative h-dvh flex items-center justify-center overflow-hidden">
      {/* Background Image com Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/hero.jpg"
          alt="Vista panorâmica da Estalagem Mirante nas montanhas de Aiuruoca"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Gradiente para garantir leitura do texto */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-stone-900/90" />
      </div>

      {/* Conteúdo Central */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16 animate-in fade-in zoom-in duration-700">
        <div className="inline-block bg-emerald-950/60 backdrop-blur-[2px] text-emerald-100 px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-6 border border-emerald-500/30 uppercase tracking-widest shadow-lg">
          Serra da Mantiqueira • Aiuruoca, MG
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-[1.1] md:leading-tight drop-shadow-lg">
          O horizonte da Mantiqueira <br />{" "}
          <span className="text-emerald-400">aos seus pés.</span>
        </h1>

        <p className="text-lg md:text-xl text-stone-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
          Desperte acima das nuvens. Um refúgio de charme onde o silêncio da
          montanha encontra o conforto que você merece.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá, gostaria de reservar meu refúgio.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white text-lg px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-xl shadow-emerald-900/20 flex items-center justify-center gap-2"
          >
            <Calendar size={20} />
            Reservar Meu Refúgio
          </a>
          <Link
            href="/acomodacoes"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 text-lg px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center hover:border-white/50"
          >
            Escolher Chalé
          </Link>
        </div>

        <div className="mt-8 inline-flex items-center justify-center gap-2 text-sm font-medium text-stone-300 bg-black/20 backdrop-blur-sm py-2 px-4 rounded-lg">
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <span>Melhor tarifa garantida na reserva direta</span>
        </div>
      </div>
    </section>
  );
}
