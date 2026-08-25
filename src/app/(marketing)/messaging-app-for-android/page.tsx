import { SEOHero } from "@/components/seo/SEOHero";
import { SEOFeatureGrid } from "@/components/seo/SEOFeatureGrid";
import { SEOFAQ } from "@/components/seo/SEOFAQ";
import { BatteryCharging, Download, Smartphone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Messaging App for Android | Direct APK Download",
  description: "A messaging app built exclusively for Android. Optimized for device battery life, real-world network conditions, and available via direct APK.",
  alternates: { canonical: `${SITE_CONFIG.url}/messaging-app-for-android` }
};

export default function AndroidMessagingApp() {
  const features = [
    { icon: Download, title: "Direct APK Install", description: "No Play Store required. Download the APK directly from us, making it easy to install on any Android device." },
    { icon: BatteryCharging, title: "Battery Optimized", description: "We work with Android's background constraints, not against them. Receive notifications reliably without severe battery drain." },
    { icon: Smartphone, title: "Built for Mobile", description: "Designed from the ground up for the Android operating system, focusing on touch targets, native feel, and performance." }
  ];

  const faqs = [
    { question: "Do I need a Google account to download KinChat?", answer: "No. We provide direct APK downloads so you can install and update the app without relying on the Google Play Store." },
    { question: "Will it drain my battery in the background?", answer: "We've specifically tuned KinChat's background notification delivery to respect Android's native battery optimization features, minimizing background drain." }
  ];

  const heroVisual = (
    <div className="relative w-[280px] md:w-[320px] aspect-[1/2.15] rounded-[2.5rem] border border-white/10 bg-zinc-950 p-2 shadow-2xl">
      <div className="absolute left-1/2 top-3 z-20 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/60" />
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/5">
        <Image src="/screenshots/call.webp" alt="KinChat Interface on Android" fill className="object-cover" />
      </div>
    </div>
  );

  return (
    <>
      <SEOHero 
        h1="The messaging app built for real-world Androids." 
        subtitle="Engineered to run fast, respect your device's battery, and install easily via direct APK—no app store required."
        visual={heroVisual}
      />
      <SEOFeatureGrid features={features} heading="Engineered specifically for the Android ecosystem." />
      <SEOFAQ faqs={faqs} />
    </>
  );
}
