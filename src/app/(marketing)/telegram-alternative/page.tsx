import { SEOHero } from "@/components/seo/SEOHero";
import { SEOComparison } from "@/components/seo/SEOComparison";
import { SEOFAQ } from "@/components/seo/SEOFAQ";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Focused Telegram Alternative for Personal Chat | KinChat",
  description: "A messaging alternative designed for personal connections rather than public broadcasting. Experience a simpler, straightforward chat application.",
  alternates: { canonical: `${SITE_CONFIG.url}/telegram-alternative` }
};

export default function TelegramAlternative() {
  const faqs = [
    { question: "Is KinChat meant for large public groups?", answer: "No. KinChat is designed for personal one-on-one connections and standard group messaging, rather than massive public broadcast channels." },
    { question: "Does KinChat use a lot of local storage?", answer: "Since KinChat focuses on personal communication rather than subscribing to large media-heavy public channels, it naturally helps keep your local app storage much smaller and more manageable." }
  ];

  const heroVisual = (
    <div className="relative w-[280px] md:w-[320px] aspect-[1/2.15] rounded-[2.5rem] border border-white/10 bg-zinc-950 p-2 shadow-2xl">
      <div className="absolute left-1/2 top-3 z-20 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/60" />
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/5">
        <Image src="/screenshots/homepage.webp" alt="KinChat Homepage Interface" fill className="object-cover" />
      </div>
    </div>
  );

  return (
    <>
      <SEOHero 
        h1="Less noise. More conversation." 
        subtitle="While other platforms evolve into massive public forums and content hubs, KinChat remains a dedicated application for talking to your real-world contacts."
        visual={heroVisual}
      />
      <SEOComparison 
        title="Choosing the Right Tool for the Job"
        traditionalTitle="Broadcast Platforms"
        traditionalTraits={[
          "Built around massive public groups and channels",
          "Often includes global user search directories",
          "Features bots, mini-apps, and external integrations",
          "Can become a source of endless notification noise"
        ]}
        kinchatTitle="Personal Messaging"
        kinchatTraits={[
          "Built specifically for personal contacts and standard groups",
          "Private by design—no global user discovery directories",
          "Pure messaging experience without mini-apps or bots",
          "Tuned notifications meant only for relevant communications"
        ]}
      />
      <SEOFAQ faqs={faqs} />
    </>
  );
}
