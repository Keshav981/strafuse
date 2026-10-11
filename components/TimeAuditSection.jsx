"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight, Bot, CheckCircle2, Zap } from "lucide-react";

export default function TimeAuditSection() {
  const timeBreakdown = [
    { task: "Sales research", hours: 12, agent: "Lead Research Agent", status: "Automatable" },
    { task: "Lead qualification", hours: 8, agent: "Qualification Agent", status: "Automatable" },
    { task: "Follow-ups & outreach", hours: 7, agent: "Follow-up Agent", status: "Automatable" },
    { task: "Customer operations", hours: 6, agent: "Ops Triage Agent", status: "Automatable" },
    { task: "Executive reporting", hours: 5, agent: "Reporting Agent", status: "Automatable" },
    { task: "Data entry across tools", hours: 4, agent: "Webhook Sync Agent", status: "Automatable" }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0C] border-b border-zinc-800" id="time-audit">
      <div className="container-strafuse">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="badge-tech-red mb-3">TIME & OPERATIONS AUDIT</div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            WHERE IS YOUR TEAM ACTUALLY SPENDING TIME?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-medium">
            We quantify every manual task across your department to pinpoint exactly where time is drained.
          </p>
        </div>

        {/* Time Breakdown Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Card: 42 Hours Breakdown */}
          <div className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span className="text-sm font-extrabold text-white">WEEKLY MANUAL TIME DRAIN</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase bg-zinc-900 px-2 py-1 rounded">
                  Example Workflow
                </span>
              </div>

              <div className="space-y-3">
                {timeBreakdown.map((item) => (
                  <div key={item.task} className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between text-xs">
                    <span className="font-semibold text-zinc-300">{item.task}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-zinc-800 h-2 rounded-full overflow-hidden hidden sm:block">
                        <div 
                          className="bg-red-500 h-full rounded-full" 
                          style={{ width: `${(item.hours / 12) * 100}%` }}
                        />
                      </div>
                      <span className="font-mono font-bold text-red-400 w-8 text-right">{item.hours}h</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-zinc-400 block">TOTAL MANUAL WORK</span>
                <span className="text-2xl font-extrabold text-white">42 HOURS / WEEK</span>
              </div>
              <span className="text-xs font-mono text-red-400 font-bold bg-red-950/40 border border-red-800/40 px-3 py-1.5 rounded-lg">
                POTENTIALLY AUTOMATABLE
              </span>
            </div>
          </div>

          {/* Right Card: Strafuse AI Agent Intervention */}
          <div className="p-6 rounded-3xl bg-zinc-900/60 border border-indigo-900/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-indigo-900/40 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-indigo-400" />
                  <span className="text-sm font-extrabold text-white">STRAFUSE AI AGENT INTERVENTION</span>
                </div>
                <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/60 px-2 py-1 rounded">
                  Sub-Second
                </span>
              </div>

              <div className="space-y-3">
                {timeBreakdown.map((item) => (
                  <div key={item.task} className="p-3 rounded-xl bg-indigo-950/20 border border-indigo-900/40 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-indigo-400" />
                      <span className="font-semibold text-indigo-200">{item.agent}</span>
                    </div>
                    <span className="font-mono font-bold text-emerald-400 text-[11px] bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                      &lt; 0.4s Automated
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-indigo-900/40 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-zinc-400 block">POTENTIAL WORKLOAD REDUCTION</span>
                <span className="text-2xl font-extrabold text-emerald-400">up to 95% SAVED</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400">
                *Based on workflow design
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
