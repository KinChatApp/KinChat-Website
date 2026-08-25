import { Space_Grotesk } from "next/font/google";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import React from "react";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"] });

interface SEOHeroProps {
  h1: string;
  subtitle: string;
  visual: React.ReactNode;
}

export function SEOHero({ h1, subtitle, visual }: SEOHeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(46,46,139,0.15),transparent_50%)] bg-[#0A0A18]" />
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className={`${display.className} text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl`}>
              {h1}
            </h1>
            <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto md:mx-0">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button href="/download" variant="primary">
                Download APK <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end relative">
             <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_50%_50%,rgba(108,99,255,0.2),transparent_60%)] blur-2xl" />
             {visual}
          </div>
        </div>
      </Container>
    </section>
  );
}
