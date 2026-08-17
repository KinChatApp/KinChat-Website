"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Menu, X, MessageSquare } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Features", href: "/features" },
    { name: "Changelog", href: "/changelog" },
    { name: "Privacy", href: "/privacy" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
            <MessageSquare className="w-6 h-6 text-blue-500" />
            {SITE_CONFIG.name}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
               <Link key={link.name} href={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                 {link.name}
               </Link>
            ))}
            <Link href="/download" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors">
              Get App
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-zinc-400 p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {links.map((link) => (
               <Link key={link.name} href={link.href} className="text-zinc-300 font-medium" onClick={() => setIsOpen(false)}>
                 {link.name}
               </Link>
            ))}
            <Link href="/download" className="text-blue-400 font-medium" onClick={() => setIsOpen(false)}>
              Download APK
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
