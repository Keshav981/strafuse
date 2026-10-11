"use client";

import { motion } from "framer-motion";
import { UserPlus, Search, ShieldCheck, Mail, RefreshCw, Database, CalendarCheck } from "lucide-react";

export default function AgentWorkflowVisual() {
  const workflowNodes = [
    {
      id: "lead",
      title: "NEW LEAD",
      desc: "Inbound form or signal",
      icon: UserPlus,
      output: "Trigger Event",
      badge: "Inbound"
    },
    {
      id: "research",
      title: "AI RESEARCH AGENT",
      desc: "Company, Founder, Funding, Website & Pain signals",
      icon: Search,
      output: "Enriched Profile",
      badge: "Autonomous"
    },
    {
      id: "qual",
      title: "AI QUALIFICATION",
      desc: "Ideal Customer Profile scoring",
      icon: ShieldCheck,
      output: "SCP SCORE: 91",
      badge: "High Intent"
    },
    {
      id: "outreach",
      title: "AI OUTREACH",
      desc: "Personalized value message",
      icon: Mail,
      output: "Draft Generated",
      badge: "Contextual"
    },
    {
      id: "followup",
      title: "FOLLOW-UP AGENT",
      desc: "Tracks engagement & reply",
      icon: RefreshCw,
      output: "Active Listener",
      badge: "24/7 Monitoring"
    },
    {
      id: "crm",
      title: "CRM UPDATED",
      desc: "Webhook sync to database",
      icon: Database,
      output: "100% Synced",
      badge: "Zero Manual"
    },
    {
      id: "meeting",
      title: "MEETING BOOKED",
      desc: "Calendar invite confirmed",
      icon: CalendarCheck,
      output: "Revenue Qualified",
      badge: "Result"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0F0F11] border-b border-zinc-800" id="ai-agents">
      <div className="container-strafuse">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="badge-tech-red mb-3">AI AGENT ARCHITECTURE</div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            NOT A GENERIC AI CHATBOT. <br className="hidden sm:inline" />
            <span className="text-sky-400">AN AUTONOMOUS WORKFLOW ENGINE.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-medium">
            See how a Strafuse AI Agent system automates an entire lead journey end-to-end.
          </p>
        </div>

        {/* Animated Connected System Canvas */}
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-3">
            {workflowNodes.map((node, idx) => {
              const IconComp = node.icon;
              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between min-h-[140px] hover:border-zinc-700 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <IconComp className="w-4 h-4 text-sky-400" />
                      <span className="text-[9px] font-mono font-extrabold text-zinc-500">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xs font-extrabold text-white mb-1 tracking-tight">
                      {node.title}
                    </h3>
                    <p className="text-[10px] text-zinc-400 leading-snug font-medium mb-2">
                      {node.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-emerald-400 font-bold">
                      {node.output}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
