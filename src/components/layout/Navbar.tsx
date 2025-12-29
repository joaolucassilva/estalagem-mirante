"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Mountain, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation"; // Importante para saber em qual página estamos
import { sendGAEvent } from "@next/third-parties/google";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Pega a rota atual (ex: /, /acomodacoes)

  // Verifica se é a Home Page
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lógica de Estilo:
  // Se for Home: Começa transparente (texto branco) e fica branco ao rolar.
  // Se for Interna: Sempre fundo branco (texto escuro).
  const isTransparent = isHome && !scrolled;

  const navClasses = isTransparent
    ? "bg-transparent py-5"
    : "bg-white/95 backdrop-blur-md shadow-md py-3";

  const textLogoClasses = isTransparent ? "text-white" : "text-stone-800";
  const iconLogoClasses = isTransparent ? "text-white" : "text-emerald-700";

  const linkClasses = isTransparent
    ? "text-white/90 hover:text-emerald-200"
    : "text-stone-600 hover:text-emerald-600";

  const menuButtonColor = isTransparent ? "text-white" : "text-stone-800";

  const trackClick = (origem: string) => {
    sendGAEvent("event", "conversion_whatsapp", {
      page_location: "navbar",
      section: origem, // 'desktop' ou 'mobile'
      label: "botao_reservar_topo",
    });
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        navClasses
      )}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => setIsMenuOpen(false)}
        >
          <Mountain
            className={cn("w-8 h-8 transition-colors", iconLogoClasses)}
          />
          <span
            className={cn(
              "text-lg md:text-xl font-serif font-bold tracking-wider transition-colors",
              textLogoClasses
            )}
          >
            ESTALAGEM MIRANTE
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/acomodacoes"
            className={cn("text-sm font-medium transition-colors", linkClasses)}
          >
            Acomodações
          </Link>
          <Link
            href="/atrativos"
            className={cn("text-sm font-medium transition-colors", linkClasses)}
          >
            Atrativos
          </Link>
          <Link
            href="/precos"
            className={cn("text-sm font-medium transition-colors", linkClasses)}
          >
            Pacotes
          </Link>
          <Link
            href="/contato"
            className={cn("text-sm font-medium transition-colors", linkClasses)}
          >
            Contato
          </Link>

          <a
            href="https://wa.me/5535999831400?text=Olá, gostaria de verificar disponibilidade."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick("desktop")}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-semibold transition shadow-lg hover:shadow-emerald-900/20 flex items-center gap-2 text-sm"
          >
            <MessageCircle size={18} />
            Reservar
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className={cn("md:hidden p-1", menuButtonColor)}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-stone-100 flex flex-col p-4 gap-2 animate-in slide-in-from-top-2 fade-in duration-300">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 py-2 border-b border-gray-100 text-left"
          >
            Início
          </Link>
          <Link
            href="/acomodacoes"
            onClick={() => setIsMenuOpen(false)}
            className="text-stone-700 p-3 rounded-lg hover:bg-stone-50 font-medium border-b border-stone-50"
          >
            Acomodações
          </Link>
          <Link
            href="/atrativos"
            onClick={() => setIsMenuOpen(false)}
            className="text-stone-700 p-3 rounded-lg hover:bg-stone-50 font-medium border-b border-stone-50"
          >
            Atrativos
          </Link>
          <Link
            href="/precos"
            onClick={() => setIsMenuOpen(false)}
            className="text-stone-700 p-3 rounded-lg hover:bg-stone-50 font-medium border-b border-stone-50"
          >
            Pacotes
          </Link>
          <Link
            href="/contato"
            onClick={() => setIsMenuOpen(false)}
            className="text-stone-700 p-3 rounded-lg hover:bg-stone-50 font-medium"
          >
            Contato
          </Link>
          <a
            href="https://wa.me/5535999831400"
            className="bg-emerald-600 text-white text-center py-3 rounded-lg font-bold mt-2 flex items-center justify-center gap-2"
            onClick={() => trackClick("mobile")}
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
