import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Shield, Zap, Smartphone, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-zinc-950 to-zinc-950 -z-10"></div>
        <Container className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Messaging, <span className="text-blue-500">Simplified.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            {SITE_CONFIG.description} Minimalist design, fast performance, and a focus on keeping your conversations private.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/download" variant="primary">
              Download APK <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button href="/features" variant="secondary">
              Explore Features
            </Button>
          </div>
        </Container>
      </section>

      {/* Quick Features */}
      <section className="py-20 bg-zinc-900/30 border-y border-zinc-900">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Privacy First</h3>
              <p className="text-zinc-400">Built with a philosophy that respects your data. No unnecessary tracking.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-zinc-400">Optimized for low-end devices and poor network conditions. Never miss a message.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Modern Android</h3>
              <p className="text-zinc-400">Native feel, smooth animations, and a gorgeous dark mode tailored for Android.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Screenshot Placeholder Area */}
      <section className="py-24">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Designed for Mobile</h2>
          <div className="relative max-w-sm mx-auto aspect-[1/2] bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-2 shadow-2xl">
            <div className="w-full h-full bg-zinc-950 rounded-[2rem] border border-zinc-800 flex items-center justify-center overflow-hidden">
               {/* Replace with actual image later */}
               <span className="text-zinc-600 font-medium">Screenshot Area</span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
