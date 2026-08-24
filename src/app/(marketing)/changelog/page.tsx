import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = { title: "Changelog" };

export default function Changelog() {
  return (
    <div className="py-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-10">Changelog</h1>
          
          <div className="relative border-l border-zinc-800 pl-8 ml-4 space-y-12">
            
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-blue-600 border-4 border-zinc-950"></div>
              <span className="text-blue-500 font-semibold text-sm">v{SITE_CONFIG.version} (Beta)</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">Initial Beta Release</h3>
              <ul className="list-disc list-inside text-zinc-400 space-y-1">
                <li>Core messaging functionality</li>
                <li>Dark UI system implemented</li>
                <li>Offline draft saving</li>
              </ul>
            </div>

            <div className="relative opacity-60">
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-zinc-700 border-4 border-zinc-950"></div>
              <span className="text-zinc-500 font-semibold text-sm">Pre-release</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">Development Phase</h3>
              <p className="text-zinc-400">Architecture and UI/UX design foundation.</p>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}
