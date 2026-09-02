import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = { title: "Changelog" };

export default function Changelog() {
  return (
    <div className="py-20 font-['Arial','Helvetica',sans-serif]">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#F8FAFC] mb-10 font-['Space_Grotesk']">Changelog</h1>
          
          <div className="relative border-l border-[#1E3A5F] pl-8 ml-4 space-y-12">
            
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-[#2563EB] border-4 border-[#07111F]"></div>
              <span className="text-[#60A5FA] font-semibold text-sm">v{SITE_CONFIG.version} (Beta)</span>
              <h3 className="text-xl font-bold text-[#F8FAFC] mt-1 mb-2 font-['Space_Grotesk']">Initial Beta Release</h3>
              <ul className="list-disc list-inside text-[#94A3B8] space-y-1">
                <li>Core messaging functionality</li>
                <li>Dark UI system implemented</li>
                <li>Offline draft saving</li>
              </ul>
            </div>

            <div className="relative opacity-60">
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-[#1E3A5F] border-4 border-[#07111F]"></div>
              <span className="text-[#64748B] font-semibold text-sm">Pre-release</span>
              <h3 className="text-xl font-bold text-[#F8FAFC] mt-1 mb-2 font-['Space_Grotesk']">Development Phase</h3>
              <p className="text-[#94A3B8]">Architecture and UI/UX design foundation.</p>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}
