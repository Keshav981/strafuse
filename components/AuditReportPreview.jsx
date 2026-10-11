"use client";

import { ArrowRight, AlertTriangle, CheckCircle2, ShieldAlert, Cpu } from "lucide-react";

export default function AuditReportPreview({ onOpenConsultation }) {
  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0C] border-b border-zinc-800" id="audit-report">
      <div className="container-strafuse">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="badge-tech-red mb-3">SYSTEM DIAGNOSIS REPORT</div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            SAMPLE STRAFUSE AUDIT REPORT
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-medium">
            This is what you receive after a 3-day Strafuse audit: quantified gaps, impact scores, and ready-to-deploy AI agent architectures.
          </p>
        </div>

        {/* Real-Looking Audit Report Document Preview */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Document Header */}
          <div className="flex flex-wrap items-center justify-between pb-6 mb-6 border-b border-zinc-800 gap-4">
            <div>
              <div className="text-xs font-mono font-bold text-zinc-400 mb-1">// STRAFUSE EXECUTIVE AUDIT REPORT</div>
              <h3 className="text-xl font-extrabold text-white">SYSTEM AUDIT SCORE CARD</h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-[10px] font-mono text-zinc-500 block">HEALTH SCORE</span>
                <span className="text-2xl font-extrabold text-amber-400 font-mono">72 / 100</span>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-amber-500/80 flex items-center justify-center font-mono font-bold text-amber-400 text-sm">
                72%
              </div>
            </div>
          </div>

          {/* Critical Gaps Section */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">CRITICAL GAPS IDENTIFIED (03)</span>
              <span className="text-[11px] font-mono text-zinc-500">PRIORITY MATRIX</span>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900 border border-red-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-mono font-bold text-red-400 mt-0.5">01</span>
                <div>
                  <h4 className="text-sm font-extrabold text-white">Manual lead qualification</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">SDRs spend 12 hours/week copying inbound form submissions to spreadsheet</p>
                </div>
              </div>
              <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 self-start sm:self-auto">
                IMPACT: HIGH
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900 border border-red-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-mono font-bold text-red-400 mt-0.5">02</span>
                <div>
                  <h4 className="text-sm font-extrabold text-white">Onboarding friction</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">3 unneeded form steps cause 42% signup exit before activation</p>
                </div>
              </div>
              <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 self-start sm:self-auto">
                IMPACT: HIGH
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900 border border-amber-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-mono font-bold text-amber-400 mt-0.5">03</span>
                <div>
                  <h4 className="text-sm font-extrabold text-white">Slow follow-up latency</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">24-hour delay in prospect outreach reduces booking intent by 65%</p>
                </div>
              </div>
              <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 self-start sm:self-auto">
                IMPACT: MEDIUM
              </span>
            </div>
          </div>

          {/* Recommended Action Box */}
          <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-900/60 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Cpu className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
              <div>
                <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase">RECOMMENDED ACTION</span>
                <h4 className="text-sm font-extrabold text-white">Deploy AI Qualification & Follow-up Agent Architecture</h4>
                <p className="text-xs text-zinc-400 mt-0.5">Automates lead research, scoring, outreach & CRM sync in &lt; 0.4s.</p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-700">
                EFFORT: LOW
              </span>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                IMPACT: HIGH
              </span>
            </div>
          </div>

          {/* Footer Call to Action */}
          <div className="text-center pt-4 border-t border-zinc-800">
            <button
              onClick={() => {
                if (onOpenConsultation) onOpenConsultation();
                else {
                  const el = document.getElementById("consultation");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn-strafuse-primary py-3 px-8"
            >
              <span>GET THE FULL AUDIT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
