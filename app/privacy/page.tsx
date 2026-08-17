import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <div className="py-20">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-invert prose-zinc">
          <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-zinc-400 mb-8">Last Updated: {SITE_CONFIG.lastUpdated}</p>
          
          <div className="text-zinc-300 space-y-6">
            <p>Welcome to {SITE_CONFIG.name}. We are committed to protecting your personal information and your right to privacy.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8">1. Information We Collect</h2>
            <p>[TODO: Detail the exact information collected by the Android app, e.g., phone numbers, device IDs, or state "No data collected" if truly anonymous].</p>

            <h2 className="text-2xl font-semibold text-white mt-8">2. How We Use Your Information</h2>
            <p>[TODO: Explain usage, e.g., to facilitate message routing, improve app stability, etc.]</p>

            <h2 className="text-2xl font-semibold text-white mt-8">3. Data Security</h2>
            <p>We use reasonable organizational and technical measures to protect your data. [TODO: Confirm encryption standards before making claims here].</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
