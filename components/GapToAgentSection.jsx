"use client";

import { motion } from "framer-motion";
import { AlertCircle, FileText, Calculator, Sparkles, Cpu, Rocket, LineChart } from "lucide-react";

export default function GapToAgentSection() {
  const steps = [
    { num: "01", title: "Problem detected", desc: "Isolate customer drop-off or bottleneck", icon: AlertCircle },
    { num: "02", title: "Manual workflow identified", desc: "Document repetitive tasks and time drain", icon: FileText },
    { num: "03", title: "Impact calculated", desc: "Quantify financial and velocity cost", icon: Calculator },
    { num: "04", title: "Automation opportunity", desc: "Map exact API and AI requirements", icon: Sparkles },
    { num: "05", title: "Agent designed", desc: "Build custom LLM prompt & logic chain", icon: Cpu },
    { num: "06", title: "Agent deployed", desc: "Integrate with CRM, webhooks & DB", icon: Rocket },
    { num: "07", title: "Performance measured", desc: "Verify sub-second response & accuracy", icon: LineChart }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0C] border-b border-zinc-800" id="from-gap-to-agent">
      <div className="container-strafuse">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="badge-tech-red mb-3">THE STRAFUSE METHODOLOGY</div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            WE DON'T START WITH AN AI AGENT. <br className="hidden sm:inline" />
            <span className="text-red-400">WE START WITH THE PROBLEM.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-medium">
            Most companies build AI widgets without knowing what they're fixing. We diagnose first, calculate ROI second, and deploy AI third.
          </p>
        </div>

        {/* 7-Step Signature Visual */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-3">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between min-h-[150px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-red-400">STEP {step.num}</span>
                    <IconComp className="w-4 h-4 text-zinc-400" />
                  </div>
                  <h3 className="text-xs font-extrabold text-white mb-1 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[10px] text-zinc-400 leading-snug font-medium">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-2 pt-2 border-t border-zinc-800/80 text-[9px] font-mono text-zinc-500 uppercase">
                  Phase {idx + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
