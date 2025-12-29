"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Users,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { sendGAEvent } from "@next/third-parties/google";

// Definindo a interface (Tipagem)
interface ChaleProps {
  data: {
    id: string;
    nome: string;
    tipo: string;
    desc: string;
    detalhes: string;
    obs?: string;
    icon: React.ReactNode;
    destaque: boolean;
    images: string[];
  };
  priority?: boolean;
}

export function ChaleCard({ data, priority = false }: ChaleProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % data.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + data.images.length) % data.images.length
    );
  };

  const whatsappLink = `https://wa.me/5535999831400?text=${encodeURIComponent(
    `Olá, gostaria de saber os valores para o ${data.nome}.`
  )}`;

  return (
    <article
      className={cn(
        "flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border",
        data.destaque
          ? "border-emerald-200 ring-4 ring-emerald-50"
          : "border-stone-100"
      )}
    >
      {/* --- CARROSSEL --- */}
      <div className="h-64 overflow-hidden relative group shrink-0 bg-stone-200">
        <Image
          src={data.images[currentImageIndex]}
          alt={data.nome}
          fill
          priority={priority && currentImageIndex === 0}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Badge do Nome */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg shadow-sm font-bold text-xs uppercase tracking-wide flex items-center gap-2 text-stone-800 z-10">
          {data.icon} {data.nome}
        </div>

        {/* Setas (só aparecem se tiver mais de 1 foto) */}
        {data.images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                prevImage();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full backdrop-blur-sm transition opacity-0 group-hover:opacity-100 z-20"
              aria-label="Imagem Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                nextImage();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full backdrop-blur-sm transition opacity-0 group-hover:opacity-100 z-20"
              aria-label="Próxima Imagem"
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicadores (Bolinhas) */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 overflow-hidden max-w-[80%] justify-center px-2">
              {data.images.map((_, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full shadow-sm transition-all shrink-0",
                    idx === currentImageIndex ? "bg-white w-3" : "bg-white/50"
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* --- CONTEÚDO --- */}
      <div className="p-8 flex flex-col grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-serif font-bold text-stone-800">
            {data.nome}
          </h3>
          <span className="bg-stone-100 text-stone-600 text-[10px] md:text-xs px-2 py-1 rounded-full font-semibold whitespace-nowrap">
            {data.tipo}
          </span>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed text-sm">
          {data.desc}
        </p>

        <div className="space-y-3 mb-8">
          <div className="flex items-start gap-3 text-sm text-gray-500">
            <Check size={16} className="text-emerald-600 mt-1 min-w-[16px]" />
            <p>{data.detalhes}</p>
          </div>
          {data.obs && (
            <div className="flex items-start gap-3 text-xs md:text-sm text-gray-500 bg-yellow-50 p-3 rounded-lg border border-yellow-100">
              <Users
                size={16}
                className="text-yellow-600 mt-0.5 min-w-[16px]"
              />
              <p>{data.obs}</p>
            </div>
          )}
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          onClick={() => {
            sendGAEvent("event", "conversion_whatsapp", {
              page_location: "card_chale",
              item_name: data.nome,
              label: "ver_valores",
            });
          }}
          rel="noopener noreferrer"
          className={cn(
            "mt-auto w-full py-4 rounded-xl font-bold transition flex items-center justify-center gap-2",
            data.destaque
              ? "bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg shadow-emerald-200"
              : "bg-stone-100 hover:bg-stone-200 text-stone-700"
          )}
        >
          <MessageCircle size={20} />
          Veja Valores
        </a>
      </div>
    </article>
  );
}
