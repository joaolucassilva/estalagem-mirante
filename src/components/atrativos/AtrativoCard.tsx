import Image from "next/image";
import { Compass, ChevronRight } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

interface AtrativoCardProps {
  data: {
    nome: string;
    desc: string;
    img: string;
  };
}

export function AtrativoCard({ data }: AtrativoCardProps) {
  const whatsappLink = `https://wa.me/5535999831400?text=${encodeURIComponent(
    `Gostaria de saber mais sobre o passeio: ${data.nome}`
  )}`;

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-500 border border-stone-100 flex flex-col h-full">
      {/* Imagem com Efeito de Zoom */}
      <div className="h-64 overflow-hidden relative">
        <Image
          src={data.img}
          alt={data.nome}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradiente para leitura do texto */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-90"></div>

        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h3 className="text-2xl font-bold font-serif flex items-center gap-2">
            <Compass size={24} className="text-emerald-400" />
            {data.nome}
          </h3>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-8 grow flex flex-col">
        <p className="text-gray-600 leading-relaxed mb-6">{data.desc}</p>
        <div className="mt-auto pt-6 border-t border-stone-100">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              sendGAEvent("event", "conversion_whatsapp", {
                page_location: "card_atrativo",
                item_name: data.nome,
                label: "pedir_infos_passeio",
              });
            }}
            className="text-emerald-700 font-bold text-sm hover:text-emerald-500 transition flex items-center gap-1 group/link"
          >
            Pedir informações sobre este passeio
            <ChevronRight
              size={16}
              className="group-hover/link:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </article>
  );
}
