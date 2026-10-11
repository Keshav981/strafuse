"use client";

import { ArrowRight, ChevronDown, Activity, Sparkles } from "lucide-react";

export default function HeroSection({ onOpenConsultation }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-12 pb-12 sm:pt-20 sm:pb-16 bg-grid-tech">
      <div className="container-strafuse text-center">
        {/* Technical Tag Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 mb-6 sm:mb-8 text-xs font-mono text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span>SYSTEM DIAGNOSIS & AUTOMATION ARCHITECTURE</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-5xl mx-auto mb-6">
          FIND WHAT'S SLOWING YOUR <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            BUSINESS DOWN.
          </span>
        </h1>

        {/* Supporting Paragraph */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 font-medium">
          Strafuse audits your product, GTM and operations to find what's costing you time, customers and growth — then automates the work that shouldn't be manual.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto mb-10 sm:mb-14">
          <button
            onClick={() => {
              if (onOpenConsultation) onOpenConsultation();
              else scrollToSection("consultation");
            }}
            className="btn-strafuse-primary w-full sm:w-auto"
          >
            <span>GET YOUR PRODUCT AUDITED</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="btn-strafuse-secondary w-full sm:w-auto"
          >
            <span>SEE HOW IT WORKS</span>
          </button>
        </div>

        {/* Technical Feature Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-2.5">
            <span className="text-red-400 text-xs font-mono font-bold">01</span>
            <div>
              <h4 className="text-xs font-extrabold text-white">Full-Stack Audit</h4>
              <p className="text-[11px] text-zinc-400 mt-0.5">Product, GTM & Ops</p>
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-2.5">
            <span className="text-red-400 text-xs font-mono font-bold">02</span>
            <div>
              <h4 className="text-xs font-extrabold text-white">Friction Discovery</h4>
              <p className="text-[11px] text-zinc-400 mt-0.5">Uncover lost revenue</p>
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-2.5">
            <span className="text-red-400 text-xs font-mono font-bold">03</span>
            <div>
              <h4 className="text-xs font-extrabold text-white">Custom AI Agents</h4>
              <p className="text-[11px] text-zinc-400 mt-0.5">Autonomous execution</p>
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-2.5">
            <span className="text-red-400 text-xs font-mono font-bold">04</span>
            <div>
              <h4 className="text-xs font-extrabold text-white">Time Reduction</h4>
              <p className="text-[11px] text-zinc-400 mt-0.5">Hours to seconds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
