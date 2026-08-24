import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 pt-16 pb-8 mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">{SITE_CONFIG.name}</h3>
            <p className="text-zinc-400 max-w-sm mb-4">
              {SITE_CONFIG.description}
            </p>
            <p className="text-sm text-zinc-600">Current Version: {SITE_CONFIG.version}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-zinc-400 hover:text-white text-sm">Features</Link></li>
              <li><Link href="/download" className="text-zinc-400 hover:text-white text-sm">Download for Android</Link></li>
              <li><Link href="/changelog" className="text-zinc-400 hover:text-white text-sm">Changelog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-zinc-400 hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-zinc-400 hover:text-white text-sm">Terms of Service</Link></li>
              <li><a href={SITE_CONFIG.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white text-sm">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-zinc-600 text-sm">Designed for Android</p>
        </div>
      </Container>
    </footer>
  );
}
