import { SEOHero } from "@/components/seo/SEOHero";
import { SEOFeatureGrid } from "@/components/seo/SEOFeatureGrid";
import { SEOFAQ } from "@/components/seo/SEOFAQ";
import { AnimatedChat } from "@/features/animated-chat-demo";
import { MessageSquare, WifiOff, Zap } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Messaging App | Simple & Distraction-Free - KinChat",
  description: "A private messaging app focused on real-time personal communication without social feeds. Features offline-first drafting and instant delivery.",
  alternates: { canonical: `${SITE_CONFIG.url}/private-messaging-app` }
};

export default function PrivateMessagingApp() {
  const features = [
    { icon: MessageSquare, title: "Pure Communication", description: "Designed strictly for one-to-one and standard messaging without the bloat of social feeds or massive public broadcasts." },
    { icon: Zap, title: "Instant Delivery", description: "Optimistic UI updates mean your text shows up immediately. The interface feels instant even when the network is catching up." },
    { icon: WifiOff, title: "Offline-First Drafting", description: "If you lose connection, messages safely queue locally and sync automatically the moment you are back online." }
  ];

  const faqs = [
    { question: "Can I use KinChat without a strong internet connection?", answer: "Yes. KinChat is built for real-world network conditions. You can draft and send messages offline, and the app will automatically sync them when your connection is restored." },
    { question: "Is this a social media app?", answer: "No. KinChat is strictly a private messaging app designed for personal communication, free from social feeds or public algorithms." },
    { question: "Does it support media sharing?", answer: "Yes, you can share high-quality images and files securely with your contacts in real-time." }
  ];

  const heroVisual = (
    <div className="relative w-full max-w-[320px] rounded-[2rem] border border-white/5 bg-[#0b0e17] overflow-hidden shadow-2xl">
      <AnimatedChat />
    </div>
  );

  return (
    <>
      <SEOHero 
        h1="A private messaging app built for real conversation." 
        subtitle="Step away from noisy social platforms. KinChat is designed for pure, uninterrupted personal communication with the people who matter."
        visual={heroVisual}
      />
      <SEOFeatureGrid features={features} heading="Focus on what you're saying, not the app." />
      <SEOFAQ faqs={faqs} />
    </>
  );
}
