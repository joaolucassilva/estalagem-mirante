import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from '@/constants/images';

export function AccommodationsTeaser() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <span className="text-emerald-600 font-bold tracking-wider text-sm uppercase">Nossos Refúgios</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mt-2 mb-8">Chalés para todos os estilos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           <TeaserCard 
             href="/acomodacoes"
             image={IMAGES.chaleTeaser}
             title="Conheça nossos Chalés"
             subtitle="Estrela, Lua, Sol, Terra, Marte e Júpiter"
           />
           <TeaserCard 
             href="/acomodacoes"
             image={IMAGES.naturezaTeaser}
             title="Paz e Tranquilidade"
             subtitle="Ao som das águas e dos passarinhos"
           />
        </div>
        
        <Link href="/acomodacoes" className="bg-stone-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-stone-900 transition inline-flex items-center gap-2">
          Ver Todos os Chalés →
        </Link>
      </div>
    </section>
  );
}

function TeaserCard({ href, image, title, subtitle }: { href: string, image: string, title: string, subtitle: string }) {
  return (
    <Link href={href} className="relative group overflow-hidden rounded-2xl cursor-pointer block h-80">
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition z-10"></div>
      <Image 
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute bottom-6 left-6 z-20 text-left">
         <h3 className="text-white text-2xl font-bold font-serif">{title}</h3>
         <p className="text-gray-200 text-sm mt-2">{subtitle}</p>
      </div>
    </Link>
  );
}