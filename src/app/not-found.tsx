import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsappFloat } from "@/components/ui/WhatsappFloat";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-9xl font-serif font-bold text-stone-200">404</h1>
          <h2 className="text-2xl font-bold text-stone-800 -mt-10 mb-4 relative z-10">
            Caminho não encontrado
          </h2>
          <p className="text-gray-600 mb-8">
            Parece que você se perdeu na trilha. Essa página não existe, mas
            nossas acomodações continuam no mesmo lugar.
          </p>
          <Link
            href="/"
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition inline-block"
          >
            Voltar para o Início
          </Link>
        </div>
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
