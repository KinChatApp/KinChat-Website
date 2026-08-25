import { SEOHero } from "@/components/seo/SEOHero";
import { SEOFeatureGrid } from "@/components/seo/SEOFeatureGrid";
import { SEOFAQ } from "@/components/seo/SEOFAQ";
import { AnimatedChat } from "@/features/animated-chat-demo";
import { Zap, Smile, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Chat App | Fast & Intuitive Android Messaging",
  description: "Experience a private chat app with instant delivery, read receipts, and quick reactions. Designed to feel lightning-fast on Android.",
  alternates: { canonical: `${SITE_CONFIG.url}/private-chat-app` }
};

export default function PrivateChatApp() {
  const features = [
    { icon: Zap, title: "Feels Instant", description: "Optimistic UI updates mean your messages appear in the chat instantly, avoiding annoying loading spinners." },
    { icon: Smile, title: "Quick Reactions", description: "Acknowledge messages instantly with familiar emoji reactions without cluttering the chat timeline." },
    { icon: CheckCircle2, title: "Delivery Status", description: "Built-in read receipts and typing indicators so you always know the status of your active conversations." }
  ];

  const faqs = [
    { question: "What does 'Optimistic UI' mean?", answer: "It means when you hit send, the message appears in your chat immediately, rather than waiting for the server to confirm it. This makes the app feel incredibly fast and responsive." },
    { question: "Can I react to messages?", answer: "Yes, KinChat supports fast emoji reactions directly on individual messages, just like you expect from a modern chat app." }
  ];

  const heroVisual = (
    <div className="relative w-full max-w-[320px] rounded-[2rem] border border-white/5 bg-[#0b0e17] overflow-hidden shadow-2xl">
      <AnimatedChat />
    </div>
  );

  return (
    <>
      <SEOHero 
        h1="A private chat app that keeps up with you." 
        subtitle="Built around a modern chat experience. Enjoy real-time delivery, clear read receipts, and fast reactions in a lightweight package."
        visual={heroVisual}
      />
      <SEOFeatureGrid features={features} heading="The standard chat features you expect, executed perfectly." />
      <SEOFAQ faqs={faqs} />
    </>
  );
}
