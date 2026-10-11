"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Search, 
  AlertTriangle, 
  Clock, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Activity
} from "lucide-react";

export default function HeroVisual() {
  const steps = [
    {
      id: "product",
      title: "PRODUCT",
      sub: "User Journey & Funnels",
      icon: Building2,
      status: "Ingested",
      badge: "Active Data Stream",
      color: "border-zinc-700 bg-zinc-900/90 text-zinc-300"
    },
    {
      id: "audit",
      title: "AUDIT",
      sub: "Strafuse Engine Scan",
      icon: Search,
      status: "Analyzing",
      badge: "Full-Stack Audit",
      color: "border-indigo-500/50 bg-indigo-950/40 text-indigo-300"
    },
    {
      id: "gaps",
      title: "GAPS FOUND",
      sub: "3 Bottlenecks Flagged",
      icon: AlertTriangle,
      status: "Detected",
      badge: "High Priority",
      color: "border-amber-500/50 bg-amber-950/40 text-amber-300"
    },
    {
      id: "manual",
      title: "MANUAL WORK",
      sub: "42 Hours/Wk Identified",
      icon: Clock,
      status: "Isolated",
      badge: "Time Drain",
      color: "border-red-500/50 bg-red-950/40 text-red-300"
    },
    {
      id: "agent",
      title: "AI AGENT",
      sub: "Custom Copilot Designed",
      icon: Cpu,
      status: "Deployed",
      badge: "Autonomous",
      color: "border-sky-500/50 bg-sky-950/40 text-sky-300"
    },
    {
      id: "automated",
      title: "AUTOMATED",
      sub: "API & Webhook Trigger",
      icon: Zap,
      status: "Sub-Second",
      badge: "< 0.4s Execution",
      color: "border-emerald-500/50 bg-emerald-950/40 text-emerald-300"
    },
    {
      id: "saved",
      title: "TIME SAVED",
      sub: "95% Workload Reduction",
      icon: CheckCircle2,
      status: "Verified",
      badge: "ROI Achieved",
      color: "border-emerald-400 bg-emerald-900/50 text-emerald-200"
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-[#0A0A0C] border-b border-zinc-800/80">
      <div className="container-strafuse">
        <div className="p-4 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl relative overflow-hidden">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-xs font-mono font-bold text-zinc-300">
                STRAFUSE PRODUCT INTELLIGENCE PIPELINE // LIVE SYSTEM DIAGNOSTIC
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                SYSTEM OPERATIONAL
              </span>
              <span>LATENCY: 0.38s</span>
            </div>
          </div>

          {/* Node Flow Horizontal Pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-3 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={step.id} className="relative group">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    viewport={{ once: true }}
                    className={`p-3.5 rounded-xl border ${step.color} transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between h-full min-h-[120px]`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <IconComp className="w-4 h-4 opacity-90" />
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider opacity-75">
                          0{idx + 1}
                        </span>
                      </div>
                      <h3 className="text-xs font-extrabold tracking-tight text-white mb-0.5">
                        {step.title}
                      </h3>
                      <p className="text-[10px] text-zinc-400 font-medium leading-tight">
                        {step.sub}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[9px] font-mono text-zinc-400 font-semibold">
                        {step.status}
                      </span>
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-white/10 text-white">
                        {step.badge}
                      </span>
                    </div>
                  </motion.div>

                  {/* Flow Arrow connecting nodes */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 w-4 h-4 items-center justify-center text-zinc-600">
                      <ArrowRight className="w-3 h-3 text-zinc-500" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Real-time System Telemetry Overlay */}
          <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-zinc-400 gap-3">
            <div className="flex items-center gap-4">
              <span className="text-zinc-500">TELEMETRY:</span>
              <span className="text-emerald-400 font-bold">✓ 3 Gaps Isolated</span>
              <span className="text-sky-400 font-bold">✓ 42h Automatable</span>
              <span className="text-white font-bold">✓ Agent Deployed</span>
            </div>
            <div className="text-zinc-500">
              AUDIT SCAN COMPLETE &middot; STRAFUSE VERIFIED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
