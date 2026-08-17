import { Container } from "@/components/ui/Container";

export const metadata = { title: "Features" };

export default function Features() {
  const features = [
    { title: "Real-time Messaging", desc: "Instant text delivery with typing indicators and read receipts." },
    { title: "Offline-first", desc: "Draft messages offline. They will send automatically when you reconnect." },
    { title: "Media Sharing", desc: "Share high-quality images and files securely." },
    { title: "Message Reactions", desc: "React to messages quickly with standard emojis." },
  ];

  return (
    <div className="py-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">Features</h1>
          <p className="text-xl text-zinc-400 mb-12">Everything you need for seamless communication, without the bloat.</p>
          
          <div className="space-y-8">
            {features.map((f, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
