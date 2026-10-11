"use client";

import { useState } from "react";
import { Layout, TrendingUp, Cpu, Cog, ChevronRight, CheckCircle2 } from "lucide-react";

export default function WhatWeAuditMap() {
  const [activePillar, setActivePillar] = useState("product");

  const pillars = [
    {
      id: "product",
      title: "PRODUCT AUDIT",
      icon: Layout,
      color: "border-red-500/50 text-red-400",
      items: [
        { name: "UX Friction & Drop-offs", detail: "Identify exact screens where users quit before activation." },
        { name: "Onboarding Flow Optimization", detail: "Audit unnecessary form fields and sign-up friction." },
        { name: "Activation Metrics", detail: "Measure time-to-value for new user cohorts." },
        { name: "Conversion Rate Drivers", detail: "Analyze intent capture triggers and paywall prompts." },
        { name: "Retention & Churn Triggers", detail: "Pinpoint inactivity patterns leading to cancellation." }
      ]
    },
    {
      id: "gtm",
      title: "GTM AUDIT",
      icon: TrendingUp,
      color: "border-amber-500/50 text-amber-400",
      items: [
        { name: "Ideal Customer Profile (ICP)", detail: "Verify target buyer criteria and intent scoring models." },
        { name: "Positioning & Messaging", detail: "Audit clarity of value proposition against competitors." },
        { name: "Acquisition Channels", detail: "Evaluate conversion efficiency across paid and organic inbound." },
        { name: "Sales Pipeline Velocity", detail: "Trace demo-to-close timelines and SDR handoff delays." },
        { name: "Pricing & Tier Packaging", detail: "Assess monetization strategy and upsell triggers." }
      ]
    },
    {
      id: "operations",
      title: "OPERATIONS AUDIT",
      icon: Cog,
      color: "border-indigo-500/50 text-indigo-400",
      items: [
        { name: "Manual Workflows", detail: "Quantify repetitive tasks performed line-by-line by team members." },
        { name: "Cross-Tool Data Entry", detail: "Examine copy-pasting between CRM, DB, and support tools." },
        { name: "Executive Reporting", detail: "Audit hours spent compiling manual weekly status decks." },
        { name: "Lead Triage & Routing", detail: "Measure response latency for inbound prospect requests." },
        { name: "Internal Handoff Bottlenecks", detail: "Map inter-departmental approval delays and SLA leaks." }
      ]
    },
    {
      id: "ai",
      title: "AI & AUTOMATION AUDIT",
      icon: Cpu,
      color: "border-emerald-500/50 text-emerald-400",
      items: [
        { name: "Process Automatable Ratio", detail: "Calculate percentage of weekly workload reducible by AI." },
        { name: "Custom Agent Design", detail: "Architect LLM copilots for support, research, and outreach." },
        { name: "Webhook & API Pipelines", detail: "Design real-time event triggers between databases and Slack." },
        { name: "Integration Readiness", detail: "Verify data cleanliness and API endpoint security." },
        { name: "Automated SLA Escalation", detail: "Deploy 24/7 monitoring triggers for critical business events." }
      ]
    }
  ];

  const currentPillar = pillars.find((p) => p.id === activePillar) || pillars[0];

  return (
    <section className="py-16 sm:py-24 bg-[#0F0F11] border-b border-zinc-800" id="what-we-audit">
      <div className="container-strafuse">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="badge-tech-red mb-3">INTERACTIVE DIAGNOSTIC MAP</div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            WHAT STRAFUSE EXAMINES
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-medium">
            Select a pillar to explore the specific systems, funnels, and workflows we audit.
          </p>
        </div>

        {/* 4 Pillars Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto">
          {/* Left Column: 4 Pillar Navigation Cards */}
          <div className="lg:col-span-5 space-y-3">
            {pillars.map((p) => {
              const IconComp = p.icon;
              const isActive = activePillar === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => setActivePillar(p.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    isActive 
                      ? "bg-zinc-900 border-white/40 shadow-lg scale-[1.02]" 
                      : "bg-zinc-950/60 border-zinc-800 hover:border-zinc-700 opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-zinc-900 ${p.color}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-extrabold text-white">{p.title}</h3>
                      <p className="text-[11px] text-zinc-400">{p.items.length} Audit Domains</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "text-white translate-x-1" : "text-zinc-600"}`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Audit Items Reveal */}
          <div className="lg:col-span-7 p-6 rounded-3xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-mono font-extrabold text-white">{currentPillar.title} FOCUS AREAS</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">ACTIVE SELECTION</span>
              </div>

              <div className="space-y-3">
                {currentPillar.items.map((item, i) => (
                  <div key={item.name} className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs">
                    <div className="flex items-center gap-2 text-white font-extrabold mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                      <span>{item.name}</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 font-medium pl-5 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>EXAMINED DURING STRAFUSE AUDIT</span>
              <span className="text-red-400 font-bold">FULL REPORT DELIVERED &rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
