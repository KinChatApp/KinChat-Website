import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = { title: "Terms of Service" };

export default function Terms() {
  return (
    <div className="py-20">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-invert prose-zinc">
          <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-zinc-400 mb-8">Last Updated: {SITE_CONFIG.lastUpdated}</p>
          
          <div className="text-zinc-300 space-y-6">
            <p>These terms govern your use of the {SITE_CONFIG.name} application and website.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8">1. Acceptance of Terms</h2>
            <p>By downloading or using the app, you agree to these terms. [TODO: Add legal boilerplate tailored to project].</p>

            <h2 className="text-2xl font-semibold text-white mt-8">2. Acceptable Use</h2>
            <p>You agree not to use the app for any illegal or unauthorized purpose.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
