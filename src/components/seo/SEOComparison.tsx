import { Container } from "@/components/ui/Container";
import { Check, CircleDot } from "lucide-react";

interface ComparisonProps {
  title: string;
  traditionalTitle: string;
  traditionalTraits: string[];
  kinchatTitle: string;
  kinchatTraits: string[];
}

export function SEOComparison({ title, traditionalTitle, traditionalTraits, kinchatTitle, kinchatTraits }: ComparisonProps) {
  return (
    <section className="py-24 border-t border-white/5 bg-zinc-950">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">{title}</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-zinc-300 mb-8 pb-4 border-b border-zinc-800">
                {traditionalTitle}
              </h3>
              <ul className="space-y-5">
                {traditionalTraits.map((trait, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400">
                    <CircleDot className="w-5 h-5 text-zinc-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{trait}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-b from-indigo-950/40 to-zinc-900/50 border border-indigo-500/20 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />
              <h3 className="text-xl font-semibold text-white mb-8 pb-4 border-b border-indigo-500/20 relative z-10">
                {kinchatTitle}
              </h3>
              <ul className="space-y-5 relative z-10">
                {kinchatTraits.map((trait, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-200">
                    <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{trait}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
