import { Quote } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-wider text-sm uppercase">Bem-vindo</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mt-2 mb-6">A Estalagem</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full mb-8"></div>
        </header>

        <article className="prose prose-lg text-gray-600 mx-auto text-justify leading-relaxed">
          <p className="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:text-emerald-700 first-letter:mr-2 first-letter:float-left">
            Na <strong>Estalagem Mirante</strong>, o tempo desacelera. Localizada no topo da montanha, somos um convite para trocar o barulho da cidade pelo som das águas da <strong>Corredeira do Papagaio</strong> e pelo canto dos pássaros.
          </p>
          
          <p className="mb-6">
            Nossa alma é mineira e nossas raízes são profundas. A casa sede é uma antiga moradia restaurada com carinho, preservando a história em cada tijolo. É nela, em nossa ampla varanda com Wi-Fi, que servimos o café e as prosas acontecem.
          </p>
          
          <p className="mb-12">
            Aqui, o luxo está na simplicidade sofisticada: caminhar pelo jardim, meditar em nossa pequena capela ou simplesmente não fazer nada. É um espaço para reconectar-se com a natureza e consigo mesmo.
          </p>

          <blockquote className="bg-stone-50 border-l-4 border-emerald-500 p-8 rounded-r-xl relative my-16 shadow-sm">
            <Quote className="absolute -top-4 -left-4 text-emerald-500 bg-white p-1 rounded-full shadow-sm w-10 h-10" />
            <div className="italic text-stone-700 space-y-4 font-serif">
              <p>&ldquo;Casa arrumada é assim: um lugar organizado... Mas casa, pra mim, tem que ser casa e não um centro cirúrgico... Casa com vida é aquela em que a gente entra e se sente bem-vinda.&rdquo;</p>
            </div>
            <footer className="text-right font-bold text-emerald-700 mt-4 not-italic text-sm uppercase tracking-wide">— Lena Gino</footer>
          </blockquote>
        </article>
      </div>
    </section>
  );
}