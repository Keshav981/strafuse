"use client";

import { useState } from "react";
import { Play, RotateCcw, AlertCircle, CheckCircle2, ShieldAlert, Sparkles } from "lucide-react";

export default function ProductAuditVisual() {
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditComplete, setAuditComplete] = useState(true);

  const handleRunAudit = () => {
    setIsAuditing(true);
    setAuditComplete(false);
    setTimeout(() => {
      setIsAuditing(false);
      setAuditComplete(true);
    }, 2500);
  };

  const auditHighlights = [
    {
      id: "onboarding",
      label: "ONBOARDING FLOW",
      issue: "3 unnecessary steps detected",
      detail: "Form requires phone number before value drop. High 42% exit rate.",
      impact: "HIGH FRICTION",
      color: "border-red-500/50 bg-red-950/20 text-red-300"
    },
    {
      id: "cta",
      label: "PRIMARY CTA",
      issue: "Low intent capture",
      detail: "Generic 'Submit' button gets 2.1% CTR. Recommended: 'Start Free Audit &rarr;'",
      impact: "HIGH LEAK",
      color: "border-amber-500/50 bg-amber-950/20 text-amber-300"
    },
    {
      id: "checkout",
      label: "CHECKOUT & UPSELL",
      issue: "Drop-off opportunity",
      detail: "Missing 1-click upgrade trigger post registration.",
      impact: "REVENUE DROP",
      color: "border-red-500/50 bg-red-950/20 text-red-300"
    },
    {
      id: "analytics",
      label: "EVENT ANALYTICS",
      issue: "Missing core event",
      detail: "Feature activation triggers not firing back to CRM webhooks.",
      impact: "DATA GAP",
      color: "border-indigo-500/50 bg-indigo-950/20 text-indigo-300"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0C] border-b border-zinc-800" id="product-audit">
      <div className="container-strafuse">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="badge-tech-red mb-3">PRODUCT DIAGNOSTIC ENGINE</div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            INTERACTIVE PRODUCT AUDIT VISUAL
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-medium">
            Test how Strafuse scans a product interface to detect user drop-offs, onboarding friction, and missed event tracking.
          </p>
        </div>

        {/* Realistic Demo Startup Product Window */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden relative">
          {/* Scanning Line Animation */}
          {isAuditing && <div className="animate-scan-line" />}

          {/* Browser Window Header */}
          <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono text-zinc-400 ml-2">app.acmesaaS-demo.io/onboarding</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-zinc-500">DEMO AUDIT ENVIRONMENT</span>
              <button
                onClick={handleRunAudit}
                disabled={isAuditing}
                className="btn-strafuse-primary text-xs py-1.5 px-4 font-mono"
              >
                {isAuditing ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span>SCANNING PRODUCT...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>RUN AUDIT</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Demo Interface Content & Highlight Overlay */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Left Column: Simulated SaaS Interface */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4 relative">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="text-xs font-bold text-zinc-300">Acme SaaS Signup Flow</div>
                <span className="text-[10px] font-mono bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">User Session #841</span>
              </div>

              {/* Highlighted UI Boxes */}
              <div className="p-3 rounded-xl border border-red-500/40 bg-red-950/20 relative">
                <span className="text-[10px] font-mono font-bold text-red-400 block mb-1">ONBOARDING STEP 2/5</span>
                <p className="text-xs text-zinc-300">Enter phone, company size, billing address & credit card</p>
                <div className="mt-2 text-[10px] font-mono text-red-400 flex items-center gap-1 font-bold">
                  <AlertCircle className="w-3 h-3" />
                  <span>3 UNNECESSARY STEPS BEFORE VALUE DROP</span>
                </div>
              </div>

              <div className="p-3 rounded-xl border border-amber-500/40 bg-amber-950/20 relative">
                <span className="text-[10px] font-mono font-bold text-amber-400 block mb-1">BUTTON CTA</span>
                <div className="w-full py-2 rounded bg-zinc-800 text-center text-xs font-bold text-zinc-400">
                  SUBMIT FORM
                </div>
                <div className="mt-2 text-[10px] font-mono text-amber-400 flex items-center gap-1 font-bold">
                  <AlertCircle className="w-3 h-3" />
                  <span>LOW INTENT CAPTURE (2.1% CTR)</span>
                </div>
              </div>

              <div className="p-3 rounded-xl border border-indigo-500/40 bg-indigo-950/20 relative">
                <span className="text-[10px] font-mono font-bold text-indigo-400 block mb-1">CHECKOUT & TELEMETRY</span>
                <p className="text-xs text-zinc-300">Payment success screen without auto-upgrade prompt</p>
                <div className="mt-2 text-[10px] font-mono text-indigo-400 flex items-center gap-1 font-bold">
                  <AlertCircle className="w-3 h-3" />
                  <span>MISSING EVENT & DROP-OFF OPPORTUNITY</span>
                </div>
              </div>
            </div>

            {/* Right Column: Strafuse Real-time Audit Findings */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-zinc-300">STRAFUSE DIAGNOSIS OUTPUT</span>
                <span className="text-xs font-mono text-red-400 font-bold">4 ISSUES DETECTED</span>
              </div>

              {auditHighlights.map((item) => (
                <div key={item.id} className={`p-3.5 rounded-xl border ${item.color} transition-all`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">{item.label}</span>
                    <span className="text-[9px] font-mono font-extrabold px-1.5 py-0.5 rounded bg-white/10">{item.impact}</span>
                  </div>
                  <h4 className="text-xs font-extrabold text-white mb-1">{item.issue}</h4>
                  <p className="text-[11px] text-zinc-400 leading-snug">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
