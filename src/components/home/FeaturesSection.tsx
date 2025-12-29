import { Coffee, Mountain, Wifi } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="py-20 bg-stone-50 border-t border-stone-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 mb-4">Comodidades & Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Detalhes pensados para tornar sua estadia ainda mais confortável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Coffee size={24} />} 
            title="Café da Manhã" 
            desc="Pão de queijo quentinho, bolos caseiros, frutas frescas e aquele café coado na hora. Tudo preparado com carinho na casa principal."
          />
          <FeatureCard 
            icon={<Mountain size={24} />} 
            title="Vista Panorâmica" 
            desc="Localização privilegiada no alto da montanha. Acorde com o canto dos pássaros e uma vista de tirar o fôlego do vale."
          />
          <FeatureCard 
            icon={<Wifi size={24} />} 
            title="Wi-Fi & Conforto" 
            desc="Internet disponível na casa principal e em todos os chalés, para você compartilhar seus melhores momentos sem perder a conexão."
          />
        </div>
      </div>
    </section>
  );
}

// Subcomponente interno simples
function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition group">
      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors text-emerald-700 group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-stone-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}