"use client";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  WifiOff,
  Zap,
  BatteryCharging,
  Check,
  CheckCheck,
  Clock,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import Image from "next/image";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
});

type Phase = 0 | 1 | 2 | 3 | 4 | 5;

const PHASE_DURATIONS: Record<Phase, number> = {
  0: 1200, // pause, only incoming bubble
  1: 900, // typing indicator
  2: 700, // outgoing bubble appears, sending
  3: 500, // sent (single check)
  4: 600, // delivered (double check, grey)
  5: 2400, // read (double check, blue) — hold longest
};

function ChatDemo() {
  const [phase, setPhase] = useState<Phase>(5);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduced(true);
      return;
    }

    let current: Phase = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const run = () => {
      setPhase(current);
      timeoutId = setTimeout(() => {
        current = ((current + 1) % 6) as Phase;
        run();
      }, PHASE_DURATIONS[current]);
    };

    run();
    return () => clearTimeout(timeoutId);
  }, []);

  const showTyping = !reduced && phase === 1;
  const showOutgoing = reduced || phase >= 2;
  const status = reduced
    ? "read"
    : phase >= 5
    ? "read"
    : phase >= 4
    ? "delivered"
    : phase >= 3
    ? "sent"
    : "sending";

  return (
    <div className="relative mx-auto w-[260px] sm:w-[280px]">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_50%_30%,rgba(108,99,255,0.35),transparent_70%)] blur-2xl" />

      <div className="relative rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-zinc-900 to-[#0A0A18] p-2 shadow-[0_30px_80px_-20px_rgba(46,46,139,0.6)]">
        <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/60" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#0D0D1F]">
          <div className="flex items-center gap-2 border-b border-white/5 px-4 pb-3 pt-8">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600" />
            <div>
              <p className="text-xs font-semibold text-white">Ryan Carter</p>
              <p className={`${mono.className} text-[10px] text-emerald-400`}>
                online
              </p>
            </div>
          </div>

          <div className="flex min-h-[220px] flex-col justify-end gap-2 px-3 py-4">
            <div className="max-w-[75%] rounded-2xl rounded-bl-sm bg-zinc-800 px-3 py-2 text-[12px] text-zinc-200">
              Are you coming tomorrow?
            </div>

            {showTyping && (
              <div className="ml-auto flex w-fit items-center gap-1 rounded-2xl rounded-br-sm bg-indigo-600/40 px-3 py-2">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-200 [animation-delay:-0.2s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-200 [animation-delay:-0.1s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-200" />
              </div>
            )}

            {showOutgoing && (
              <div className="ml-auto flex max-w-[75%] flex-col items-end gap-1">
                <div className="rounded-2xl rounded-br-sm bg-indigo-600 px-3 py-2 text-[12px] text-white">
                  Yes, see you at 6!
                </div>
                <div
                  className={`${mono.className} flex items-center gap-1 pr-1 text-[9px] text-zinc-500`}
                >
                  <span>6:04 PM</span>
                  {status === "sending" && <Clock className="h-3 w-3" />}
                  {status === "sent" && <Check className="h-3 w-3" />}
                  {status === "delivered" && (
                    <CheckCheck className="h-3 w-3 text-zinc-400" />
                  )}
                  {status === "read" && (
                    <CheckCheck className="h-3 w-3 text-sky-400" />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// এখানে ৩টি ছবি এবং তাদের রোটেশন আপডেট করা হয়েছে
const screenshots = [
  { src: "/screenshots/homepage.webp", alt: "KinChat chat list", rotate: "md:-rotate-3" },
  { src: "/screenshots/contact.webp", alt: "KinChat contacts", rotate: "md:rotate-0" },
  { src: "/screenshots/call.webp", alt: "KinChat calls", rotate: "md:rotate-3" },
];

const features = [
  {
    icon: WifiOff,
    title: "Works on weak networks",
    body: "Messages queue locally and sync the moment you're back online — built for real-world Bangladeshi connections, not lab wifi.",
  },
  {
    icon: Zap,
    title: "Feels instant",
    body: "Real-time delivery with optimistic sending — your message shows up before the network even confirms it.",
  },
  {
    icon: BatteryCharging,
    title: "Runs light",
    body: "Tuned notification delivery that works with Android's battery optimizer instead of fighting it — no missed messages, no drained battery.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(46,46,139,0.25),transparent_60%)] bg-[#0A0A18]" />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <Container>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="text-center md:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Direct download · No Play Store required
              </div>

              <h1
                className={`${display.className} text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl`}
              >
                Conversations that don&apos;t wait for good signal.
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400 md:mx-0">
                {SITE_CONFIG.description} Built mobile-first, tuned for
                real-world networks, and designed to feel instant.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
                <Button href="/download" variant="primary">
                  Download APK <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button href="#screens" variant="secondary">
                  See real screens
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <ChatDemo />
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="border-y border-white/5 bg-white/[0.02] py-20">
        <Container>
          <h2
            className={`${display.className} mb-12 text-center text-2xl font-semibold text-white md:text-3xl`}
          >
            Built for the way Bangladesh actually gets online.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-[#12122A] p-6 transition-colors hover:border-indigo-500/40"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                  <Icon className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Screenshots */}
      <section id="screens" className="py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2
              className={`${display.className} text-2xl font-semibold text-white md:text-3xl`}
            >
              What you&apos;ll actually see
            </h2>
            <p className="mt-3 text-sm text-zinc-500">
              No mockups — these are real screens from the app.
            </p>
          </div>

          <div className="flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-12 [-ms-overflow-style:none] [scrollbar-width:none] md:justify-center [&::-webkit-scrollbar]:hidden">
            {screenshots.map(({ src, alt, rotate }) => (
              <div
                key={src}
                className={`group relative flex-none w-[260px] snap-center transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-[1.05] hover:rotate-0 hover:z-10 md:w-[300px] ${rotate}`}
              >
                {/* Advanced glow animation behind the screenshot */}
                <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_50%_40%,rgba(108,99,255,0.25),transparent_70%)] blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-[radial-gradient(circle_at_50%_40%,rgba(108,99,255,0.5),transparent_70%)]" />
                
                {/* Main device frame with enhanced shadow on hover */}
                <div className="relative aspect-[1/2.2] rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-zinc-900 to-[#0A0A18] p-2 shadow-[0_30px_80px_-20px_rgba(46,46,139,0.5)] transition-shadow duration-500 group-hover:shadow-[0_40px_100px_-20px_rgba(108,99,255,0.7)]">
                  <div className="absolute left-1/2 top-3 z-20 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/60" />
                  <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-950">
                    <Image src={src} alt={alt} fill className="object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-white/5 py-20">
        <Container className="text-center">
          <h2
            className={`${display.className} text-2xl font-semibold text-white md:text-3xl`}
          >
            Ready when you are.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-zinc-500">
            Free direct download — no Play Store account, no waiting on
            review queues.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/download" variant="primary">
              Download APK <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
