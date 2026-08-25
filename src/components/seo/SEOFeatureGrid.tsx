import { Container } from "@/components/ui/Container";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function SEOFeatureGrid({ features, heading }: { features: Feature[], heading?: string }) {
  return (
    <section className="py-20 bg-zinc-950">
      <Container>
        {heading && <h2 className="text-3xl font-bold text-white mb-12 text-center">{heading}</h2>}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-white/5 bg-zinc-900/50 p-8 transition-colors hover:border-white/10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                <Icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
              <p className="text-zinc-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
