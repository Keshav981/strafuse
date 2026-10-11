"use client";

import { motion } from "framer-motion";
import { Search, Stethoscope, ListOrdered, Zap, BarChart3, ArrowRight } from "lucide-react";

export default function WhatWeDoSection() {
  const processStages = [
    {
      num: "01",
      title: "AUDIT",
      desc: "Full-stack evaluation of product funnels, GTM messaging, and operational workflows.",
      icon: Search,
      badge: "Deep Diagnosis"
    },
    {
      num: "02",
      title: "DIAGNOSE",
      desc: "Identify specific choke points where time, leads, and revenue drop off.",
      icon: Stethoscope,
      badge: "Friction Map"
    },
    {
      num: "03",
      title: "PRIORITIZE",
      desc: "Rank bottlenecks by financial impact and automation feasibility.",
      icon: ListOrdered,
      badge: "ROI Matrix"
    },
    {
      num: "04",
      title: "AUTOMATE",
      desc: "Deploy autonomous AI agents, webhooks, and seamless data pipelines.",
      icon: Zap,
      badge: "Sub-Second"
    },
    {
      num: "05",
      title: "MEASURE",
      desc: "Track real-time workload reduction, speed multipliers, and conversion gains.",
      icon: BarChart3,
      badge: "Verified ROI"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0C] border-b border-zinc-800" id="how-it-works">
      <div className="container-strafuse">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="badge-tech-red mb-4">WHAT WE ACTUALLY DO</div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            WE DON'T JUST FIND PROBLEMS. <br className="hidden sm:inline" />
            <span className="text-zinc-400">WE FIND THE WORK BEHIND THEM.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-medium leading-relaxed">
            We look across your product, GTM and operations to find where friction, manual work and lost opportunities are hiding.
          </p>
        </div>

        {/* Animated Horizontal Process Sequence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 relative">
          {processStages.map((stage, idx) => {
            const IconComp = stage.icon;
            return (
              <motion.div
                key={stage.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between relative group hover:bg-zinc-900"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-extrabold text-red-400">
                      STAGE {stage.num}
                    </span>
                    <IconComp className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-extrabold text-white mb-2 tracking-tight">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {stage.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                    {stage.badge}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-red-400 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
