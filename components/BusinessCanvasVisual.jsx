"use client";

import { motion } from "framer-motion";
import { 
  Building, 
  Search, 
  Bot, 
  TrendingUp, 
  AlertTriangle, 
  ArrowDown, 
  CheckCircle2,
  Zap,
  ArrowRight
} from "lucide-react";

export default function BusinessCanvasVisual() {
  return (
    <section className="py-16 sm:py-24 bg-[#0F0F11] border-b border-zinc-800" id="business-canvas">
      <div className="container-strafuse">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="badge-tech-red mb-3">SYSTEM MAP ARCHITECTURE</div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            ONE SYSTEM CANVAS. ZERO GRADIENT NOISE.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-medium">
            See how Strafuse connects directly to your company's core operations to isolate bottlenecks and deploy automated AI agents.
          </p>
        </div>

        {/* Large Visual Canvas */}
        <div className="p-6 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {/* Step 1: YOUR BUSINESS */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-zinc-300" />
                    <span className="text-xs font-mono font-bold text-zinc-300">YOUR BUSINESS</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">INPUT</span>
                </div>

                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-semibold text-zinc-200">
                    Product & Core UX
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-semibold text-zinc-200">
                    User Journey & Funnels
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-semibold text-zinc-200">
                    Signup & Activation
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-semibold text-zinc-200">
                    Operations & Support
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800 text-[11px] font-mono text-zinc-400">
                &rarr; Raw Business Operations
              </div>
            </motion.div>

            {/* Step 2: STRAFUSE AUDIT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-red-950/20 border border-red-900/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-red-400" />
                    <span className="text-xs font-mono font-bold text-red-300">STRAFUSE AUDIT</span>
                  </div>
                  <span className="text-[10px] font-mono text-red-400">DIAGNOSIS</span>
                </div>

                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-800/40 text-xs font-semibold text-red-200 flex items-center justify-between">
                    <span>⚠ Onboarding friction</span>
                    <span className="text-[9px] font-mono bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded">High</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-800/40 text-xs font-semibold text-red-200 flex items-center justify-between">
                    <span>⚠ Manual lead routing</span>
                    <span className="text-[9px] font-mono bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded">High</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-800/40 text-xs font-semibold text-amber-200 flex items-center justify-between">
                    <span>⚠ Weak intent CTA</span>
                    <span className="text-[9px] font-mono bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded">Med</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-800/40 text-xs font-semibold text-red-200 flex items-center justify-between">
                    <span>⚠ Follow-up delay</span>
                    <span className="text-[9px] font-mono bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded">High</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-red-900/40 text-[11px] font-mono text-red-400">
                &rarr; 4 Critical Gaps Isolated
              </div>
            </motion.div>

            {/* Step 3: AI OPPORTUNITY */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-900/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-mono font-bold text-indigo-300">AI OPPORTUNITY</span>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-400">AUTONOMOUS</span>
                </div>

                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-800/40 text-xs font-semibold text-indigo-200 flex items-center justify-between">
                    <span>🤖 Lead Research Agent</span>
                    <span className="text-[9px] font-mono text-indigo-300">Deployed</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-800/40 text-xs font-semibold text-indigo-200 flex items-center justify-between">
                    <span>🤖 Follow-up Agent</span>
                    <span className="text-[9px] font-mono text-indigo-300">Deployed</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-800/40 text-xs font-semibold text-indigo-200 flex items-center justify-between">
                    <span>🤖 Qualification Agent</span>
                    <span className="text-[9px] font-mono text-indigo-300">Deployed</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-800/40 text-xs font-semibold text-indigo-200 flex items-center justify-between">
                    <span>🤖 Auto-Reporting Copilot</span>
                    <span className="text-[9px] font-mono text-indigo-300">Deployed</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-indigo-900/40 text-[11px] font-mono text-indigo-400">
                &rarr; 4 Custom AI Agents Active
              </div>
            </motion.div>

            {/* Step 4: RESULT */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-900/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono font-bold text-emerald-300">RESULT</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">VERIFIED</span>
                </div>

                <div className="space-y-2 font-mono">
                  <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-xs font-bold text-emerald-300 flex items-center justify-between">
                    <span>↓ Manual Workload</span>
                    <span className="text-emerald-400 font-extrabold">-95%</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-xs font-bold text-emerald-300 flex items-center justify-between">
                    <span>↑ Execution Speed</span>
                    <span className="text-emerald-400 font-extrabold">&lt; 0.4s</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-xs font-bold text-emerald-300 flex items-center justify-between">
                    <span>↑ Lead Conversion</span>
                    <span className="text-emerald-400 font-extrabold">+38%</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-xs font-bold text-emerald-300 flex items-center justify-between">
                    <span>↑ Operational Revenue</span>
                    <span className="text-emerald-400 font-extrabold">+40%</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-emerald-900/40 text-[11px] font-mono text-emerald-400">
                &rarr; Max Velocity Achieved
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
