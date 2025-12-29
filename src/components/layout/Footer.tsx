import Link from "next/link";
import { Instagram, Facebook, PawPrint } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Coluna 1: Sobre */}
          <div className="col-span-1">
            <h4 className="text-white font-serif text-xl font-bold mb-4">
              Estalagem Mirante
            </h4>
            <p className="text-sm mb-4">
              Sua casa nas montanhas. Onde a simplicidade mineira encontra a
              sofisticação da natureza.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/estalagem_mirante_aiuruoca/"
                target="_blank"
                rel="noreferrer"
                className="text-stone-400 hover:text-emerald-400 transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/gilbertopereira.ribeiro.9"
                target="_blank"
                rel="noreferrer"
                className="text-stone-400 hover:text-emerald-400 transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links */}
          <div className="col-span-1">
            <h5 className="text-white font-bold mb-4">Navegação</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/acomodacoes"
                  className="hover:text-emerald-400 transition"
                >
                  Acomodações
                </Link>
              </li>
              <li>
                <Link
                  href="/atrativos"
                  className="hover:text-emerald-400 transition"
                >
                  Atrativos
                </Link>
              </li>
              <li>
                <Link
                  href="/precos"
                  className="hover:text-emerald-400 transition"
                >
                  Pacotes
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-emerald-400 transition"
                >
                  Contato & Localização
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 e 4: Mapa Google (Lazy Load para performance) */}
          <div className="col-span-1 md:col-span-2 h-64 md:h-auto rounded-xl overflow-hidden border border-stone-800 shadow-inner bg-stone-800">
            <iframe
              title="Mapa Estalagem Mirante"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Estalagem%20Mirante%20Aiuruoca&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            ></iframe>
          </div>
        </div>

        {/* Copyright e Aviso */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2025 Estalagem Mirante. Todos os direitos reservados.</p>
          <p className="text-stone-500 flex items-center gap-1 ml-auto md:ml-4 mt-2 md:mt-0">
            <PawPrint size={12} className="text-red-500/70" />
            Não aceitamos animais
          </p>
        </div>
      </div>
    </footer>
  );
}
