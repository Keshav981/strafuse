"use client";

import { useState } from "react";
import { ArrowRight, Menu, X, ShieldCheck } from "lucide-react";

export default function Navbar({ onOpenConsultation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0C]/90 backdrop-blur-md border-b border-white/10">
      <div className="container-strafuse flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 text-decoration-none group">
          <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-extrabold text-sm font-mono tracking-tighter group-hover:bg-red-500 group-hover:text-white transition-colors">
            //
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-white flex items-center gap-1">
              STRAFUSE
            </span>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider hidden sm:block">
              Product Audit & Automation
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wide text-zinc-300">
          <button onClick={() => scrollToSection("what-we-audit")} className="hover:text-white transition-colors cursor-pointer">
            WHAT WE AUDIT
          </button>
          <button onClick={() => scrollToSection("how-it-works")} className="hover:text-white transition-colors cursor-pointer">
            HOW IT WORKS
          </button>
          <button onClick={() => scrollToSection("time-audit")} className="hover:text-white transition-colors cursor-pointer">
            TIME & GTM AUDIT
          </button>
          <button onClick={() => scrollToSection("ai-agents")} className="hover:text-white transition-colors cursor-pointer">
            AI AGENTS
          </button>
          <button onClick={() => scrollToSection("case-studies")} className="hover:text-white transition-colors cursor-pointer">
            CASE STUDIES
          </button>
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (onOpenConsultation) onOpenConsultation();
              else scrollToSection("consultation");
            }}
            className="btn-strafuse-primary text-xs py-2.5 px-4 sm:px-5"
          >
            <span>GET YOUR PRODUCT AUDITED</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            className="lg:hidden text-zinc-300 hover:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121215] border-b border-white/10 px-4 py-6 space-y-4">
          <button
            onClick={() => scrollToSection("what-we-audit")}
            className="block w-full text-left text-sm font-bold text-zinc-200 py-2 border-b border-white/5"
          >
            WHAT WE AUDIT
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="block w-full text-left text-sm font-bold text-zinc-200 py-2 border-b border-white/5"
          >
            HOW IT WORKS
          </button>
          <button
            onClick={() => scrollToSection("time-audit")}
            className="block w-full text-left text-sm font-bold text-zinc-200 py-2 border-b border-white/5"
          >
            TIME & GTM AUDIT
          </button>
          <button
            onClick={() => scrollToSection("ai-agents")}
            className="block w-full text-left text-sm font-bold text-zinc-200 py-2 border-b border-white/5"
          >
            AI AGENTS
          </button>
          <button
            onClick={() => scrollToSection("case-studies")}
            className="block w-full text-left text-sm font-bold text-zinc-200 py-2"
          >
            CASE STUDIES
          </button>
        </div>
      )}
    </header>
  );
}
