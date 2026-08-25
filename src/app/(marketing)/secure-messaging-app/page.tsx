import { SEOHero } from "@/components/seo/SEOHero";
import { SEOFeatureGrid } from "@/components/seo/SEOFeatureGrid";
import { SEOFAQ } from "@/components/seo/SEOFAQ";
import { Shield, Image as ImageIcon, Smartphone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Secure Messaging App | Reliable & Ad-Free Communication",
  description: "A messaging app that prioritizes reliable delivery, local device control, and absolute freedom from intrusive tracking or ads.",
  alternates: { canonical: `${SITE_CONFIG.url}/secure-messaging-app` }
};

export default function SecureMessagingApp() {
  const features = [
    { icon: Shield, title: "No Trackers or Ads", description: "We do not sell ads, and there are no algorithms scanning your chats to serve you promoted content." },
    { icon: ImageIcon, title: "Reliable Media Sharing", description: "Send photos, videos, and files directly. Media is handled efficiently and managed locally on your device." },
    { icon: Smartphone, title: "Local Device Control", description: "Your app, your storage. KinChat respects your device boundaries and works with Android's native optimizations." }
  ];

  const faqs = [
    { question: "Are there ads in KinChat?", answer: "No, KinChat is completely ad-free. We believe your messaging experience should not be interrupted by advertisements or tracking algorithms." },
    { question: "How does KinChat handle my files?", answer: "Files and media you receive are managed directly on your local device storage, giving you full control over what is kept or deleted." }
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
        h1="A messaging app that respects your device." 
        subtitle="Communication software shouldn't spy on you to sell ads. KinChat provides a clean, safe, and reliable environment for your daily texts and media."
        visual={heroVisual}
      />
      <SEOFeatureGrid features={features} heading="Reliability meets peace of mind." />
      <SEOFAQ faqs={faqs} />
    </>
  );
}
