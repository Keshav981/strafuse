"use client";

import { motion } from "framer-motion";
import { AlertCircle, Target, Users, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export default function GTMAuditVisual() {
  const gtmPipeline = [
    {
      stage: "ICP",
      status: "Verified",
      issue: null,
      desc: "Target profile defined",
      badge: "OK"
    },
    {
      stage: "POSITIONING",
      status: "Warning",
      issue: "⚠ Too broad",
      desc: "Lacks sharp value proposition",
      badge: "LEAK"
    },
    {
      stage: "ACQUISITION",
      status: "Verified",
      issue: null,
      desc: "Inbound traffic flowing",
      badge: "OK"
    },
    {
      stage: "QUALIFICATION",
      status: "Warning",
      issue: "⚠ Manual process",
      desc: "SDRs reading emails line-by-line",
      badge: "TIME DRAIN"
    },
    {
      stage: "SALES DEMO",
      status: "Verified",
      issue: null,
      desc: "Product demo structured",
      badge: "OK"
    },
    {
      stage: "FOLLOW-UP",
      status: "Warning",
      issue: "⚠ Founder dependent",
      desc: "24-48h delay in outreach",
      badge: "HIGH LEAK"
    },
    {
      stage: "CONVERSION",
      status: "Warning",
      issue: "⚠ No clear next step",
      desc: "Missing automated contract trigger",
      badge: "REVENUE DROP"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0F0F11] border-b border-zinc-800" id="gtm-audit">
      <div className="container-strafuse">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="badge-tech-amber mb-3">GO-TO-MARKET DIAGNOSIS</div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            YOUR PRODUCT CAN BE GREAT <br className="hidden sm:inline" />
            <span className="text-red-400">AND STILL HAVE A BROKEN GTM.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-medium">
            Strafuse identifies where your go-to-market system is leaking leads, delaying follow-ups, and slowing conversion.
          </p>
        </div>

        {/* GTM Pipeline Visual Grid */}
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-3">
            {gtmPipeline.map((item, idx) => {
              const isWarning = item.status === "Warning";
              return (
                <motion.div
                  key={item.stage}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  viewport={{ once: true }}
                  className={`p-3.5 rounded-xl border flex flex-col justify-between min-h-[140px] ${
                    isWarning 
                      ? "bg-red-950/20 border-red-800/50" 
                      : "bg-zinc-900 border-zinc-800"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-zinc-500 font-bold">0{idx + 1}</span>
                      <span className={`text-[9px] font-mono font-extrabold px-1.5 py-0.5 rounded ${
                        isWarning ? "bg-red-500/20 text-red-400" : "bg-emerald-500/20 text-emerald-400"
                      }`}>
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xs font-extrabold text-white mb-1 tracking-tight">
                      {item.stage}
                    </h3>

                    {item.issue ? (
                      <p className="text-[11px] font-mono text-red-400 font-bold mb-1">{item.issue}</p>
                    ) : (
                      <p className="text-[11px] font-mono text-emerald-400 font-bold mb-1">✓ Optimal</p>
                    )}

                    <p className="text-[10px] text-zinc-400 leading-snug">{item.desc}</p>
                  </div>

                  <div className="mt-2 pt-2 border-t border-white/5 text-[9px] font-mono text-zinc-500">
                    {isWarning ? "REQUIRES AUTOMATION" : "VERIFIED STABLE"}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-400 gap-3">
            <div className="flex items-center gap-2 text-red-400 font-bold">
              <AlertCircle className="w-4 h-4" />
              <span>DIAGNOSIS SUMMARY: 4 GTM LEAKS SPOTTED IN PIPELINE</span>
            </div>
            <div className="text-zinc-400 font-bold">
              STRAFUSE GTM REPAIR ACTIVE &rarr;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
