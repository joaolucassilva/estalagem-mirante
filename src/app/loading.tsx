import { Mountain } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-stone-50 z-[100] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <Mountain size={48} className="text-emerald-600" />
        <span className="text-stone-500 font-serif tracking-widest text-sm">
          CARREGANDO...
        </span>
      </div>
    </div>
  );
}
