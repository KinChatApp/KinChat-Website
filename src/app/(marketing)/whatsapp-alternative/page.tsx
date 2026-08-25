import { SEOHero } from "@/components/seo/SEOHero";
import { SEOComparison } from "@/components/seo/SEOComparison";
import { SEOFAQ } from "@/components/seo/SEOFAQ";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "A Minimalist WhatsApp Alternative for Android - KinChat",
  description: "Looking for an alternative to feature-heavy messaging platforms? KinChat offers a lightweight, offline-first chat experience tailored for Android.",
  alternates: { canonical: `${SITE_CONFIG.url}/whatsapp-alternative` }
};

export default function WhatsAppAlternative() {
  const faqs = [
    { question: "How does KinChat handle weak connections differently?", answer: "When networks drop, KinChat allows you to continue drafting messages locally. They are queued silently and sync automatically when you reconnect, rather than blocking you from using the inbox." },
    { question: "Can I download it without the Play Store?", answer: "Yes, you can download the APK directly from our website without needing a Google Play Store account." }
  ];

  const heroVisual = (
    <div className="relative w-[280px] md:w-[320px] aspect-[1/2.15] rounded-[2.5rem] border border-white/10 bg-zinc-950 p-2 shadow-2xl">
      <div className="absolute left-1/2 top-3 z-20 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/60" />
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/5">
        <Image src="/screenshots/contact.webp" alt="KinChat Contacts Interface" fill className="object-cover" />
      </div>
    </div>
  );

  return (
    <>
      <SEOHero 
        h1="A simpler alternative to modern messaging bloat." 
        subtitle="If you prefer an app dedicated solely to messaging rather than an all-in-one platform, KinChat brings the focus back to personal conversations."
        visual={heroVisual}
      />
      <SEOComparison 
        title="Understanding Your Messaging Choices"
        traditionalTitle="General Purpose Platforms"
        traditionalTraits={[
          "Often include 24-hour Stories and status updates",
          "May integrate business catalogs and broadcast channels",
          "Typically require a registered app store account to download",
          "Heavy feature sets can impact older devices"
        ]}
        kinchatTitle="The KinChat Approach"
        kinchatTraits={[
          "Focused strictly on standard messaging and media sharing",
          "Clean interface without status updates or business tools",
          "Available as a direct, independent APK download",
          "Lightweight design optimized for smooth scrolling and typing"
        ]}
      />
      <SEOFAQ faqs={faqs} />
    </>
  );
}
