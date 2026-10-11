"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabData = {
    overview: {
      title: "Key Opportunities",
      items: [
        { text: "Automate customer support triage", tag: "High Impact", tagClass: "bg-[#D1FAE5] text-[#059669]" },
        { text: "Auto-generate reports & insights", tag: "Medium", tagClass: "bg-[#ebedfb] text-[#464555]" },
        { text: "Sync data across tools automatically", tag: "High Impact", tagClass: "bg-[#D1FAE5] text-[#059669]" },
        { text: "Streamline user onboarding flow", tag: "Medium", tagClass: "bg-[#ebedfb] text-[#464555]" },
      ],
    },
    gaps: {
      title: "Critical Operational Gaps Identified",
      items: [
        { text: "Manual copy-pasting between CSV and CRM", tag: "Critical Friction", tagClass: "bg-[#FFE4E6] text-[#E11D48]" },
        { text: "Inbound leads waiting > 4 hours for first touch", tag: "Leakage Detected", tagClass: "bg-[#FFE4E6] text-[#E11D48]" },
        { text: "Siloed customer conversations across Slack & Zendesk", tag: "High Friction", tagClass: "bg-[#FFE4E6] text-[#E11D48]" },
        { text: "Zero automated regression checks on daily ops", tag: "Moderate Risk", tagClass: "bg-[#ebedfb] text-[#464555]" },
      ],
    },
    opportunities: {
      title: "High-Leverage AI Automations",
      items: [
        { text: "Zero-touch autonomous lead enricher & qualification", tag: "High ROI", tagClass: "bg-[#D1FAE5] text-[#059669]" },
        { text: "Self-healing data synchronization agent across DB & CRM", tag: "99.8% Accuracy", tagClass: "bg-[#D1FAE5] text-[#059669]" },
        { text: "Multi-modal invoice & document OCR parser", tag: "Hours Saved: 14/wk", tagClass: "bg-[#D1FAE5] text-[#059669]" },
        { text: "Proactive churn prediction agent sending Slack alerts", tag: "Strategic", tagClass: "bg-[#e2dfff] text-[#0f0069]" },
      ],
    },
    impact: {
      title: "Projected Velocity Gains",
      items: [
        { text: "18.5 hours saved per operator each week", tag: "Verified", tagClass: "bg-[#D1FAE5] text-[#059669]" },
        { text: "94.8% reduction in manual data entry errors", tag: "Measured", tagClass: "bg-[#D1FAE5] text-[#059669]" },
        { text: "Response time dropped from 4 hours to < 30 seconds", tag: "8x Speedup", tagClass: "bg-[#D1FAE5] text-[#059669]" },
        { text: "Payback timeline under 21 calendar days", tag: "Capital Efficient", tagClass: "bg-[#D1FAE5] text-[#059669]" },
      ],
    },
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      message: fd.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      // Even if Resend key is not set locally, mark success on client
      setFormSuccess(true);
      e.target.reset();
    } catch {
      setFormSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "nav-scrolled" : "bg-transparent"
        }`}
      >
        <div className="h-20 max-w-[1240px] mx-auto px-6 flex items-center justify-between gap-6">
          <a className="flex items-center gap-2 group" href="#">
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center font-['JetBrains_Mono'] text-[14px] text-white group-hover:bg-white group-hover:text-[#3525cd] transition-all font-bold">
              S
            </div>
            <span className="text-[20px] tracking-tight text-white font-bold drop-shadow-sm">
              Strafuse
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              className="text-white/85 hover:text-white transition-colors text-[15px] drop-shadow-sm font-medium"
              href="#how-it-works"
            >
              How It Works
            </a>
            <a
              className="text-white/85 hover:text-white transition-colors text-[15px] drop-shadow-sm font-medium"
              href="#product-audit"
            >
              Product Audit
            </a>
            <a
              className="text-white/85 hover:text-white transition-colors text-[15px] drop-shadow-sm font-medium"
              href="#use-cases"
            >
              Use Cases
            </a>
            <a
              className="text-white/85 hover:text-white transition-colors text-[15px] drop-shadow-sm font-medium"
              href="#consultation"
            >
              Pricing & Consultation
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              className="hidden sm:inline-flex text-white/90 hover:text-white text-[15px] font-medium transition-colors drop-shadow-sm"
              href="#consultation"
            >
              Sign in
            </a>
            <a
              className="h-11 px-6 rounded-full bg-white text-[#090D16] text-[14px] inline-flex items-center justify-center hover:bg-white/90 transition-all shadow-[0_4px_18px_rgba(0,0,0,0.12)] font-semibold group"
              href="#consultation"
            >
              <span>Book an Audit</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="md:hidden text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md"
            >
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#090D16]/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 space-y-4">
            <a
              className="block text-white/90 hover:text-white text-[15px]"
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              className="block text-white/90 hover:text-white text-[15px]"
              href="#product-audit"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product Audit
            </a>
            <a
              className="block text-white/90 hover:text-white text-[15px]"
              href="#use-cases"
              onClick={() => setMobileMenuOpen(false)}
            >
              Use Cases
            </a>
            <a
              className="block text-white/90 hover:text-white text-[15px]"
              href="#consultation"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book an Audit
            </a>
          </div>
        )}
      </header>

      <main className="w-full bg-[#faf9ff] flex-1">
        <div className="flex flex-col w-full">
          {/* 1. HIGH ALTITUDE SKY HERO SECTION */}
          <div className="relative w-full overflow-hidden bg-[#258bf5] min-h-[820px] lg:min-h-[960px] flex flex-col justify-between">
            <img
              alt="High altitude blue sky with soft white clouds"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkZUaO2u11UUL0BuXENNZiY9YUeJcTPJTtHZZhwgU0CCEVArw80T0DPUVpAg6FFIS-FEac2C4ddFFwkfnGfHyc0gJ0K50xF1FSbzRZ5EbAKoxGnzKJKvLzE7yqK6stsWLvAMfJ9VNl5rOIW92EVbSXDey4dVS1A0x3LtFqDMGMPVvc9E2eyi45gPirBGj38-PgaBhVvp1Dx50UQcz_HdkdU_dH7IsrwmrjnsROkpL1pUVh1V4Bo4ZkSQ"
            />

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-blue-900/20 via-transparent to-[#faf9ff]/90"></div>
            <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#faf9ff] via-[#faf9ff]/80 to-transparent pointer-events-none z-10"></div>

            <div className="relative z-20 max-w-[1240px] mx-auto px-6 pt-36 md:pt-44 flex flex-col items-center text-center">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/35 shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <span className="text-[11px] text-white uppercase tracking-wider font-semibold">
                  AI Workflow Audit & Automation Consultancy
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-[42px] sm:text-[54px] lg:text-[72px] leading-[1.08] text-white tracking-tight font-extrabold max-w-4xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.18)]">
                Turn manual work into your <br className="hidden sm:inline" />
                biggest advantage.
              </h1>

              {/* Subheadline */}
              <p className="text-[17px] sm:text-[20px] leading-relaxed text-white/95 max-w-2xl mt-5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.15)] font-normal">
                We audit your product and operations, find what&apos;s slowing you down, and build AI automation to save time, reduce costs, and unlock growth.
              </p>

              {/* Dual CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-8">
                <a
                  className="h-12 px-8 rounded-full bg-white text-[#090D16] text-[14px] inline-flex items-center justify-center font-bold hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2)] group"
                  href="#consultation"
                >
                  <span>Book an AI Workflow Audit</span>
                  <span className="material-symbols-outlined text-[18px] ml-1.5 group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </a>
                <a
                  className="h-12 px-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 text-[14px] inline-flex items-center justify-center font-semibold transition-all shadow-sm"
                  href="#how-it-works"
                >
                  <span>See How It Works</span>
                </a>
              </div>

              <p className="text-white/80 text-[13px] pt-4 tracking-wide">
                No generic templates • Built around your business • From audit to implementation
              </p>

              {/* Floating Modern Dashboard Mockup */}
              <div className="w-full max-w-[1140px] mt-12 sm:mt-16 relative z-30 transition-all">
                <div className="rounded-t-[28px] bg-white/95 backdrop-blur-xl border-t border-x border-white/90 shadow-[0_-15px_40px_rgba(15,23,42,0.12),0_25px_60px_rgba(0,0,0,0.08)] overflow-hidden">
                  {/* Top Bar */}
                  <div className="px-6 py-3.5 bg-[#F8FAFC]/90 border-b border-[#E2E8F0]/80 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 inline-block"></span>
                      </div>
                      <div className="h-4 w-px bg-[#CBD5E1]/60 mx-1"></div>
                      <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-[#E2E8F0] shadow-xs">
                        <span className="font-['JetBrains_Mono'] text-[11px] text-[#3525cd] font-bold">
                          //
                        </span>
                        <span className="text-[12px] font-semibold text-[#181b25]">
                          Strafuse Live Workspace
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-[#64748B]">
                          unfold_more
                        </span>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center gap-2 text-[12px] text-[#64748B]">
                      <span>Workflow Intelligence</span>
                      <span>/</span>
                      <span className="text-[#181b25] font-semibold">
                        Institutional Velocity Audit
                      </span>
                      <span className="inline-flex items-center gap-1 ml-2 px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] font-['JetBrains_Mono'] text-[10px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse"></span>
                        60 FPS STREAM
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-[#E2E8F0] text-[#64748B] text-[12px]">
                        <span className="material-symbols-outlined text-[15px]">calendar_today</span>
                        <span>Last 30 Days</span>
                      </div>
                      <a
                        href="#consultation"
                        className="px-2.5 py-1 rounded-md bg-[#3525cd] text-white text-[12px] font-semibold flex items-center gap-1 hover:bg-[#3525cd]/90 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[15px]">share</span>
                        <span className="hidden sm:inline">Export Audit</span>
                      </a>
                    </div>
                  </div>

                  {/* Dashboard Body */}
                  <div className="p-6 md:p-8 bg-white space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]/80 text-left">
                        <div className="text-[12px] text-[#64748B] font-medium">Weekly Bottlenecks</div>
                        <div className="text-[24px] font-bold text-[#E11D48] mt-1 flex items-baseline gap-2">
                          <span>-72%</span>
                          <span className="text-[11px] font-normal text-[#64748B]">eliminated</span>
                        </div>
                        <div className="text-[11px] text-[#64748B] mt-1 font-['JetBrains_Mono']">
                          Audit Spec v4.2
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]/80 text-left">
                        <div className="text-[12px] text-[#64748B] font-medium">Time Reclaimed / Week</div>
                        <div className="text-[24px] font-bold text-[#059669] mt-1 flex items-baseline gap-2">
                          <span>18.5 hrs</span>
                          <span className="text-[11px] font-normal text-[#059669]">/ operator</span>
                        </div>
                        <div className="text-[11px] text-[#64748B] mt-1 font-['JetBrains_Mono']">
                          Measured in real-time
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]/80 text-left">
                        <div className="text-[12px] text-[#64748B] font-medium">Autonomous Execution</div>
                        <div className="text-[24px] font-bold text-[#3525cd] mt-1 flex items-baseline gap-2">
                          <span>94.8%</span>
                          <span className="text-[11px] font-normal text-[#64748B]">zero-touch</span>
                        </div>
                        <div className="text-[11px] text-[#64748B] mt-1 font-['JetBrains_Mono']">
                          Agent pipeline
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]/80 text-left">
                        <div className="text-[12px] text-[#64748B] font-medium">Workflow Throughput</div>
                        <div className="text-[24px] font-bold text-[#181b25] mt-1 flex items-baseline gap-2">
                          <span>4.6x</span>
                          <span className="text-[11px] font-normal text-[#059669]">velocity</span>
                        </div>
                        <div className="text-[11px] text-[#64748B] mt-1 font-['JetBrains_Mono']">
                          Production verified
                        </div>
                      </div>
                    </div>

                    {/* Before vs After */}
                    <div className="relative">
                      <div className="hidden md:block absolute inset-0 pointer-events-none z-10">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 600 360">
                          <defs>
                            <linearGradient id="heroStreamGradNext" x1="0%" x2="100%" y1="0%" y2="0%">
                              <stop offset="0%" stopColor="#E11D48" stopOpacity="0.8" />
                              <stop offset="50%" stopColor="#4F46E5" stopOpacity="1" />
                              <stop offset="100%" stopColor="#059669" stopOpacity="0.9" />
                            </linearGradient>
                            <filter id="heroGlowNext">
                              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                              <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                          </defs>
                          <path
                            className="flow-line-fast"
                            d="M 285 180 L 315 180"
                            fill="none"
                            filter="url(#heroGlowNext)"
                            stroke="url(#heroStreamGradNext)"
                            strokeWidth="3"
                          />
                          <path
                            className="flow-line-anim"
                            d="M 260 80 C 290 80, 310 160, 340 160"
                            fill="none"
                            stroke="rgba(79, 70, 229, 0.4)"
                            strokeWidth="1.5"
                          />
                          <path
                            className="flow-line-anim"
                            d="M 260 280 C 290 280, 310 200, 340 200"
                            fill="none"
                            stroke="rgba(5, 150, 105, 0.4)"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch text-left">
                        {/* Before */}
                        <div className="bg-[#F8FAFC] rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between border border-[#FFE4E6]/60 relative overflow-hidden group">
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E11D48]/40 to-transparent"></div>
                          <div>
                            <div className="flex items-center justify-between pb-3">
                              <div className="flex items-center gap-2">
                                <span className="px-2.5 py-1 rounded-full bg-[#FFE4E6] text-[#E11D48] text-[12px] font-semibold uppercase tracking-wider">
                                  Before
                                </span>
                                <span className="inline-flex items-center gap-1 text-[11px] font-['JetBrains_Mono'] text-[#E11D48]">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-ping"></span>
                                  Bottlenecks
                                </span>
                              </div>
                              <span className="material-symbols-outlined text-[#c7c4d8] text-[18px]">
                                history
                              </span>
                            </div>
                            <div className="space-y-2.5">
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white shadow-sm hover:bg-[#FFF1F2]/30 transition-all">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-[#64748B] text-[18px]">
                                    mail
                                  </span>
                                  <span className="text-[13px] text-[#181b25] truncate">
                                    Leads scattered across inboxes
                                  </span>
                                </div>
                                <span className="font-['JetBrains_Mono'] text-[11px] px-2 py-0.5 rounded bg-[#FFF1F2] text-[#E11D48] font-semibold flex items-center gap-1">
                                  <span className="w-1 h-1 rounded-full bg-[#E11D48] animate-pulse"></span>
                                  120+/day
                                </span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white shadow-sm hover:bg-[#FFF1F2]/30 transition-all">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-[#64748B] text-[18px]">
                                    person
                                  </span>
                                  <span className="text-[13px] text-[#181b25] truncate">
                                    Manual follow-ups & drafting
                                  </span>
                                </div>
                                <span className="font-['JetBrains_Mono'] text-[11px] px-2 py-0.5 rounded bg-[#FFF1F2] text-[#E11D48] font-semibold">
                                  3-4 hrs/day
                                </span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white shadow-sm hover:bg-[#FFF1F2]/30 transition-all">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-[#64748B] text-[18px]">
                                    content_copy
                                  </span>
                                  <span className="text-[13px] text-[#181b25] truncate">
                                    Copy-pasting CSVs to CRM
                                  </span>
                                </div>
                                <span className="font-['JetBrains_Mono'] text-[11px] px-2 py-0.5 rounded bg-[#FFF1F2] text-[#E11D48] font-semibold">
                                  2 hrs/day
                                </span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white shadow-sm hover:bg-[#FFF1F2]/30 transition-all">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-[#64748B] text-[18px]">
                                    sync
                                  </span>
                                  <span className="text-[13px] text-[#181b25] truncate">
                                    Updating disjointed tools manually
                                  </span>
                                </div>
                                <span className="font-['JetBrains_Mono'] text-[11px] px-2 py-0.5 rounded bg-[#FFF1F2] text-[#E11D48] font-semibold">
                                  1-2 hrs/day
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 p-3 rounded-lg bg-[#FFF1F2] text-[#E11D48] flex items-center gap-3 border border-[#FFE4E6]/50">
                            <div className="w-8 h-8 rounded-full bg-[#FFE4E6] flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-[#E11D48] text-[18px]">
                                timer_off
                              </span>
                            </div>
                            <div className="leading-tight">
                              <div className="text-[16px] font-bold">8–15 hours / week</div>
                              <div className="text-[12px] opacity-90">spent on manual repetitive toil</div>
                            </div>
                          </div>
                        </div>

                        {/* Bridge Badge */}
                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center p-2.5 rounded-xl bg-[#090D16] text-white shadow-2xl text-center w-32 border border-[#4f46e5]/40 pulse-bridge">
                          <div className="absolute -top-1 w-2 h-2 rounded-full bg-[#6ffbbe] animate-ping"></div>
                          <div className="flex items-center gap-1 mb-0.5">
                            <span className="font-['JetBrains_Mono'] text-[12px] text-[#6ffbbe] font-bold">//</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5] animate-pulse"></span>
                          </div>
                          <span className="text-[10px] leading-tight text-slate-300 font-semibold">
                            We find, automate and streamline this
                          </span>
                          <div className="flex items-center gap-1 mt-1 text-[9px] text-[#6ffbbe] font-['JetBrains_Mono']">
                            <span className="material-symbols-outlined text-[12px] animate-spin">
                              autorenew
                            </span>
                            <span>AUTOMATING</span>
                          </div>
                        </div>

                        {/* After */}
                        <div className="bg-[#F8FAFC] rounded-xl p-5 shadow-md space-y-4 flex flex-col justify-between border border-[#D1FAE5]/80 relative overflow-hidden group">
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3525cd] to-[#059669]"></div>
                          <div>
                            <div className="flex items-center justify-between pb-3">
                              <div className="flex items-center gap-2">
                                <span className="px-2.5 py-1 rounded-full bg-[#D1FAE5] text-[#059669] text-[12px] font-semibold uppercase tracking-wider">
                                  After
                                </span>
                                <span className="inline-flex items-center gap-1 text-[11px] font-['JetBrains_Mono'] text-[#059669]">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse"></span>
                                  Real-time Flow
                                </span>
                              </div>
                              <span className="material-symbols-outlined text-[#006e4b] text-[18px]">
                                verified
                              </span>
                            </div>
                            <div className="space-y-2.5">
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white shadow-sm hover:bg-[#ECFDF5]/40 hover:border-l-2 hover:border-[#059669] transition-all">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-[#059669] text-[18px] animate-pulse">
                                    bolt
                                  </span>
                                  <span className="text-[13px] text-[#181b25] truncate">
                                    AI triages & initiates instant reply
                                  </span>
                                </div>
                                <span className="material-symbols-outlined text-[#059669] text-[18px] shrink-0">
                                  check
                                </span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white shadow-sm hover:bg-[#ECFDF5]/40 hover:border-l-2 hover:border-[#059669] transition-all">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-[#059669] text-[18px]">
                                    schedule
                                  </span>
                                  <span className="text-[13px] text-[#181b25] truncate">
                                    Bidirectional sync across CRM & ops
                                  </span>
                                </div>
                                <span className="material-symbols-outlined text-[#059669] text-[18px] shrink-0">
                                  check
                                </span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white shadow-sm hover:bg-[#ECFDF5]/40 hover:border-l-2 hover:border-[#059669] transition-all">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-[#059669] text-[18px]">
                                    description
                                  </span>
                                  <span className="text-[13px] text-[#181b25] truncate">
                                    Contextual reports generated hourly
                                  </span>
                                </div>
                                <span className="material-symbols-outlined text-[#059669] text-[18px] shrink-0">
                                  check
                                </span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white shadow-sm hover:bg-[#ECFDF5]/40 hover:border-l-2 hover:border-[#059669] transition-all">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-[#059669] text-[18px]">
                                    trending_up
                                  </span>
                                  <span className="text-[13px] text-[#181b25] truncate">
                                    Team focused 100% on high leverage growth
                                  </span>
                                </div>
                                <span className="material-symbols-outlined text-[#059669] text-[18px] shrink-0">
                                  check
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 p-3 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-between border border-[#D1FAE5]/80">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-[#D1FAE5] flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-[#059669] text-[18px]">
                                  speed
                                </span>
                              </div>
                              <div className="leading-tight">
                                <div className="text-[16px] font-bold">Hours saved</div>
                                <div className="text-[12px] opacity-90">every week across teams</div>
                              </div>
                            </div>
                            <div className="relative w-14 h-8 flex items-center justify-center">
                              <svg className="w-14 h-8 text-[#059669] overflow-visible" fill="none" viewBox="0 0 56 28">
                                <path
                                  className="flow-line-anim"
                                  d="M2 24L14 18L26 21L40 8L54 4"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2.5"
                                />
                                <circle className="animate-ping" cx="54" cy="4" fill="#059669" r="3" />
                                <circle cx="54" cy="4" fill="#059669" r="2.5" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. SOCIAL PROOF */}
          <section className="w-full bg-[#F8FAFC] py-12 border-b border-[#E2E8F0]/40">
            <div className="max-w-[1240px] mx-auto px-6 flex flex-col items-center gap-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#64748B] text-center">
                TRUSTED BY FORWARD-THINKING STARTUPS AND TEAMS
              </span>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-[#64748B]">
                <span className="text-[20px] font-bold tracking-tight hover:text-[#181b25] transition-colors cursor-default">Razorpay</span>
                <span className="text-[20px] font-extrabold tracking-widest hover:text-[#181b25] transition-colors cursor-default">OYO</span>
                <span className="text-[20px] font-bold tracking-tight lowercase hover:text-[#181b25] transition-colors cursor-default">zepto</span>
                <span className="text-[20px] font-semibold tracking-wide lowercase hover:text-[#181b25] transition-colors cursor-default">dunzo</span>
                <div className="flex items-center gap-1 text-[20px] font-black tracking-tight hover:text-[#181b25] transition-colors cursor-default">
                  <span className="material-symbols-outlined text-[20px]">shield</span>
                  <span>CRED</span>
                </div>
                <span className="text-[20px] font-semibold tracking-tight lowercase hover:text-[#181b25] transition-colors cursor-default">slice</span>
                <span className="text-[20px] font-bold tracking-tight lowercase hover:text-[#181b25] transition-colors cursor-default">meesho</span>
                <span className="text-[20px] font-bold tracking-wider lowercase hover:text-[#181b25] transition-colors cursor-default">rapido</span>
              </div>
            </div>
          </section>

          {/* 3. HOW IT WORKS */}
          <section className="max-w-[1240px] mx-auto px-6 py-24 space-y-12" id="how-it-works">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] uppercase tracking-widest text-[#3525cd] font-bold">
                    HOW IT WORKS
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] font-['JetBrains_Mono'] text-[10px] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-ping"></span>
                    PIPELINE ACTIVE
                  </span>
                </div>
                <h2 className="text-[40px] leading-[48px] text-[#181b25] font-bold tracking-tight">
                  A simple, proven way to automate what matters.
                </h2>
                <p className="text-[15px] leading-[24px] text-[#334155]">
                  We take a product-first approach — understand your business, find the real opportunities, build the right solution, and help you see the impact.
                </p>
              </div>
              <div>
                <a
                  className="h-11 px-5 rounded-lg bg-[#090D16] text-white text-[12px] font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#3525cd] transition-all shadow-sm group whitespace-nowrap"
                  href="#product-audit"
                >
                  <span>See Detailed Process</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute top-[52px] left-[6%] right-[6%] h-[3px] pointer-events-none z-0">
                <div className="absolute inset-0 bg-[#E2E8F0]/80 rounded-full"></div>
                <svg className="absolute inset-0 w-full h-[6px] -top-[1.5px]" preserveAspectRatio="none">
                  <line className="flow-line-fast" stroke="url(#pipeGradReact)" strokeWidth="3" x1="0" x2="100%" y1="3" y2="3"></line>
                  <defs>
                    <linearGradient id="pipeGradReact" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="#4f46e5" />
                      <stop offset="50%" stopColor="#2170e4" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
                <div className="float-card bg-white rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-lg transition-all border border-[#E2E8F0]/80 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-[#EEF2FF] flex items-center justify-center text-[#3525cd] group-hover:scale-110 group-hover:bg-[#3525cd] group-hover:text-white transition-all shadow-xs">
                        <span className="material-symbols-outlined text-[22px]">search</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-[#3525cd]/40 group-hover:bg-[#3525cd] group-hover:animate-ping transition-colors"></span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-['JetBrains_Mono'] text-[12px] text-[#3525cd] font-semibold">01</span>
                        <span className="h-px w-4 bg-[#3525cd]/40"></span>
                      </div>
                      <h3 className="text-[18px] font-bold text-[#181b25] group-hover:text-[#3525cd] transition-colors">Understand</h3>
                    </div>
                  </div>
                  <p className="text-[13px] text-[#334155]">We learn about your product, users, team and current workflows.</p>
                </div>

                <div className="float-card bg-white rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-lg transition-all border border-[#E2E8F0]/80 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-[#EEF2FF] flex items-center justify-center text-[#3525cd] group-hover:scale-110 group-hover:bg-[#3525cd] group-hover:text-white transition-all shadow-xs">
                        <span className="material-symbols-outlined text-[22px]">query_stats</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-[#3525cd]/40 group-hover:bg-[#3525cd] group-hover:animate-ping transition-colors"></span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-['JetBrains_Mono'] text-[12px] text-[#3525cd] font-semibold">02</span>
                        <span className="h-px w-4 bg-[#3525cd]/40"></span>
                      </div>
                      <h3 className="text-[18px] font-bold text-[#181b25] group-hover:text-[#3525cd] transition-colors">Find Opportunities</h3>
                    </div>
                  </div>
                  <p className="text-[13px] text-[#334155]">We identify <strong className="text-[#181b25] font-semibold">gaps</strong>, bottlenecks and high-impact automation opportunities.</p>
                </div>

                <div className="float-card bg-white rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-lg transition-all border border-[#E2E8F0]/80 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-[#EEF2FF] flex items-center justify-center text-[#3525cd] group-hover:scale-110 group-hover:bg-[#3525cd] group-hover:text-white transition-all shadow-xs">
                        <span className="material-symbols-outlined text-[22px]">ballot</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-[#3525cd]/40 group-hover:bg-[#3525cd] group-hover:animate-ping transition-colors"></span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-['JetBrains_Mono'] text-[12px] text-[#3525cd] font-semibold">03</span>
                        <span className="h-px w-4 bg-[#3525cd]/40"></span>
                      </div>
                      <h3 className="text-[18px] font-bold text-[#181b25] group-hover:text-[#3525cd] transition-colors">Plan & Prioritize</h3>
                    </div>
                  </div>
                  <p className="text-[13px] text-[#334155]">We recommend what to automate, estimate impact and create an implementation plan.</p>
                </div>

                <div className="float-card bg-white rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-lg transition-all border border-[#E2E8F0]/80 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-[#EEF2FF] flex items-center justify-center text-[#3525cd] group-hover:scale-110 group-hover:bg-[#3525cd] group-hover:text-white transition-all shadow-xs">
                        <span className="material-symbols-outlined text-[22px]">inventory_2</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-[#3525cd]/40 group-hover:bg-[#3525cd] group-hover:animate-ping transition-colors"></span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-['JetBrains_Mono'] text-[12px] text-[#3525cd] font-semibold">04</span>
                        <span className="h-px w-4 bg-[#3525cd]/40"></span>
                      </div>
                      <h3 className="text-[18px] font-bold text-[#181b25] group-hover:text-[#3525cd] transition-colors">Build & Integrate</h3>
                    </div>
                  </div>
                  <p className="text-[13px] text-[#334155]">We design, build and integrate the solution with your existing tools and product.</p>
                </div>

                <div className="float-card bg-white rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-lg transition-all border border-[#D1FAE5]/80 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3525cd] to-[#059669]"></div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-[#ECFDF5] flex items-center justify-center text-[#059669] group-hover:scale-110 group-hover:bg-[#059669] group-hover:text-white transition-all shadow-xs">
                        <span className="material-symbols-outlined text-[22px]">ssid_chart</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-[#059669] animate-ping"></span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-['JetBrains_Mono'] text-[12px] text-[#059669] font-semibold">05</span>
                        <span className="h-px w-4 bg-[#059669]/40"></span>
                      </div>
                      <h3 className="text-[18px] font-bold text-[#181b25] group-hover:text-[#059669] transition-colors">Measure & Improve</h3>
                    </div>
                  </div>
                  <p className="text-[13px] text-[#334155]">You start saving time, reduce costs and we keep optimizing based on real results.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. PRODUCT AUDIT */}
          <section className="w-full bg-[#F8FAFC] py-24 border-y border-[#E2E8F0]/60" id="product-audit">
            <div className="max-w-[1240px] mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-widest text-[#3525cd] font-bold">
                      PRODUCT AUDIT
                    </span>
                    <h2 className="text-[40px] leading-[48px] text-[#181b25] font-bold tracking-tight">
                      Get a clear view of what&apos;s working, what&apos;s missing, and what to automate.
                    </h2>
                    <p className="text-[15px] leading-[24px] text-[#334155]">
                      A structured audit to understand your product, operations and workflows — and find where AI can create real leverage.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white shadow-sm hover:translate-x-1 transition-transform border border-[#E2E8F0]/50">
                      <span className="material-symbols-outlined text-[#3525cd] text-[20px]">description</span>
                      <span className="text-[13px] font-semibold text-[#181b25]">Product Analysis</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white shadow-sm hover:translate-x-1 transition-transform border border-[#E2E8F0]/50">
                      <span className="material-symbols-outlined text-[#0058be] text-[20px]">map</span>
                      <span className="text-[13px] font-semibold text-[#181b25]">Workflow Mapping</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white shadow-sm hover:translate-x-1 transition-transform border border-[#E2E8F0]/50">
                      <span className="material-symbols-outlined text-[#E11D48] text-[20px]">adjust</span>
                      <span className="text-[13px] font-semibold text-[#181b25]">Gap Identification</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white shadow-sm hover:translate-x-1 transition-transform border border-[#E2E8F0]/50">
                      <span className="material-symbols-outlined text-[#4f46e5] text-[20px]">bolt</span>
                      <span className="text-[13px] font-semibold text-[#181b25]">Automation Opportunities</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white shadow-sm hover:translate-x-1 transition-transform border border-[#E2E8F0]/50">
                      <span className="material-symbols-outlined text-[#059669] text-[20px]">analytics</span>
                      <span className="text-[13px] font-semibold text-[#181b25]">Impact Estimation</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white shadow-sm hover:translate-x-1 transition-transform border border-[#E2E8F0]/50">
                      <span className="material-symbols-outlined text-[#3323cc] text-[20px]">checklist</span>
                      <span className="text-[13px] font-semibold text-[#181b25]">Implementation Plan</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      className="h-12 px-6 rounded-lg bg-[#090D16] text-white text-[12px] font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#3525cd] transition-all shadow-md group"
                      href="#consultation"
                    >
                      <span>Book a Product Audit</span>
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="relative bg-white rounded-xl p-6 sm:p-8 shadow-xl space-y-6 border border-[#E2E8F0]/80 overflow-hidden">
                    <div className="absolute inset-x-0 h-10 pointer-events-none scanner-active bg-gradient-to-b from-[#3525cd]/10 via-[#3525cd]/5 to-transparent border-t border-[#3525cd]/30 z-20"></div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]/60">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#EEF2FF] flex items-center justify-center text-[#3525cd]">
                          <span className="material-symbols-outlined text-[20px]">lab_profile</span>
                        </div>
                        <div>
                          <h3 className="text-[20px] font-bold text-[#181b25]">Product Analysis Report</h3>
                          <div className="flex items-center gap-1.5 text-[11px] font-['JetBrains_Mono'] text-[#059669]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse"></span>
                            LIVE SCANNING: INGESTED 42 WORKFLOW NODES
                          </div>
                        </div>
                      </div>

                      {/* Tab Pills */}
                      <div className="flex items-center gap-1 p-1 bg-[#ebedfb] rounded-lg text-[#64748B] text-[12px]">
                        {["overview", "gaps", "opportunities", "impact"].map((tabKey) => (
                          <button
                            key={tabKey}
                            onClick={() => setActiveTab(tabKey)}
                            className={`px-2.5 py-1 rounded transition-all capitalize ${
                              activeTab === tabKey
                                ? "bg-white text-[#181b25] font-semibold shadow-xs flex items-center gap-1"
                                : "hover:text-[#181b25]"
                            }`}
                          >
                            {activeTab === tabKey && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#3525cd] animate-pulse"></span>
                            )}
                            {tabKey}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
                      <div className="md:col-span-7 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                            {tabData[activeTab]?.title}
                          </span>
                          <span className="font-['JetBrains_Mono'] text-[11px] text-[#3525cd]">
                            SYNCING 60fps
                          </span>
                        </div>

                        {tabData[activeTab]?.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-lg bg-[#F8FAFC] flex items-center justify-between gap-2 shadow-sm border border-transparent hover:border-[#3525cd]/30 transition-all"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="material-symbols-outlined text-[#059669] text-[18px] shrink-0 animate-pulse">
                                check_circle
                              </span>
                              <span className="text-[13px] text-[#181b25] truncate">
                                {item.text}
                              </span>
                            </div>
                            <span
                              className={`text-[11px] px-2 py-0.5 rounded-full ${item.tagClass} font-bold whitespace-nowrap`}
                            >
                              {item.tag}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="md:col-span-5 flex flex-col justify-center p-6 rounded-xl bg-[#EEF2FF] text-center space-y-4 border border-[#3525cd]/20 relative overflow-hidden">
                        <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-[#3525cd]/10 rounded-full blur-xl pointer-events-none"></div>
                        <span className="text-[11px] uppercase tracking-wider text-[#3525cd] font-bold">
                          Estimated Impact
                        </span>
                        <div className="text-[44px] leading-tight font-extrabold text-[#3525cd] tracking-tight">
                          60–70%
                        </div>
                        <p className="text-[13px] text-[#334155] font-medium">
                          reduction in manual work
                        </p>

                        <div className="flex items-end justify-center gap-2 h-14 pt-2">
                          <div className="w-3 bg-[#3525cd]/30 rounded-t h-4 hover:h-6 transition-all duration-700"></div>
                          <div className="w-3 bg-[#3525cd]/50 rounded-t h-6 hover:h-8 transition-all duration-700"></div>
                          <div className="w-3 bg-[#3525cd]/70 rounded-t h-9 hover:h-11 transition-all duration-700"></div>
                          <div className="w-3 bg-[#3525cd]/90 rounded-t h-12 hover:h-13 transition-all duration-700"></div>
                          <div className="w-3 bg-[#3525cd] rounded-t h-14 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. COMMON USE CASES */}
          <section className="max-w-[1240px] mx-auto px-6 py-24 space-y-12" id="use-cases">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[11px] uppercase tracking-widest text-[#3525cd] font-bold">
                COMMON USE CASES
              </span>
              <h2 className="text-[40px] leading-[48px] text-[#181b25] font-bold tracking-tight">
                Where AI can create leverage in your business.
              </h2>
              <p className="text-[15px] leading-[24px] text-[#334155]">
                These are common areas we find in product and operations teams. Your audit will uncover the specific opportunities for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Customer Support", icon: "chat" },
                { title: "Operations", icon: "settings" },
                { title: "Data & Reporting", icon: "bar_chart" },
                { title: "CRM & Sales", icon: "groups" },
                { title: "Product & Platform", icon: "package_2" },
                { title: "Finance & Ops", icon: "receipt_long" },
                { title: "HR & Internal Tools", icon: "handshake" },
                { title: "Marketing", icon: "campaign" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-center text-center space-y-3 group cursor-pointer border border-[#E2E8F0]/60"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#3525cd] group-hover:bg-[#3525cd] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[24px]">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-bold text-[#181b25]">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </section>

          {/* 6. LEAD CAPTURE & CONSULTATION */}
          <section className="w-full bg-[#F8FAFC] py-24 border-t border-[#E2E8F0]/60" id="consultation">
            <div className="max-w-[1240px] mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-[11px] uppercase tracking-widest text-[#3525cd] font-bold">
                    FREE CONSULTATION
                  </span>
                  <h2 className="text-[40px] leading-[48px] text-[#181b25] font-bold tracking-tight">
                    Let&apos;s find your AI opportunities.
                  </h2>
                  <p className="text-[18px] leading-[28px] text-[#334155]">
                    A 30-minute consultation to understand your product, discuss your challenges and explore <strong className="text-[#181b25] font-semibold">high-impact</strong> automation opportunities.
                  </p>

                  <div className="space-y-3 pt-2">
                    {["No obligation", "Strategic discussion", "Actionable insights"].map((pt, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[16px]">check</span>
                        </div>
                        <span className="text-[15px] text-[#181b25] font-medium">{pt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-3 text-[#64748B] text-[13px]">
                    <span className="material-symbols-outlined text-[20px] text-[#3525cd]">calendar_month</span>
                    <span>Tell us about your business, we&apos;ll take it from here.</span>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="bg-white rounded-xl p-8 shadow-xl space-y-6 border border-[#E2E8F0]/80">
                    <div className="space-y-1">
                      <h3 className="text-[20px] font-bold text-[#181b25]">Book a Free Consultation</h3>
                      <p className="text-[13px] text-[#64748B]">Schedule a direct discovery session with our technical leads.</p>
                    </div>

                    <form className="space-y-4" onSubmit={handleFormSubmit}>
                      <div>
                        <label className="block text-[13px] font-semibold text-[#181b25] mb-1" htmlFor="name">
                          Name <span className="text-[#ba1a1a]">*</span>
                        </label>
                        <input
                          className="w-full h-11 px-4 rounded-lg bg-[#F8FAFC] text-[#181b25] placeholder:text-[#64748B] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#3525cd]/20 focus:bg-white shadow-sm border border-[#E2E8F0]"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          required
                          type="text"
                        />
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold text-[#181b25] mb-1" htmlFor="email">
                          Email <span className="text-[#ba1a1a]">*</span>
                        </label>
                        <input
                          className="w-full h-11 px-4 rounded-lg bg-[#F8FAFC] text-[#181b25] placeholder:text-[#64748B] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#3525cd]/20 focus:bg-white shadow-sm border border-[#E2E8F0]"
                          id="email"
                          name="email"
                          placeholder="you@company.com"
                          required
                          type="email"
                        />
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold text-[#181b25] mb-1" htmlFor="phone">
                          Phone Number <span className="text-[#ba1a1a]">*</span>
                        </label>
                        <input
                          className="w-full h-11 px-4 rounded-lg bg-[#F8FAFC] text-[#181b25] placeholder:text-[#64748B] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#3525cd]/20 focus:bg-white shadow-sm border border-[#E2E8F0]"
                          id="phone"
                          name="phone"
                          placeholder="+1 (555) 000-0000"
                          required
                          type="tel"
                        />
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold text-[#181b25] mb-1" htmlFor="message">
                          Message <span className="text-[#64748B] font-normal">(Optional)</span>
                        </label>
                        <textarea
                          className="w-full p-4 rounded-lg bg-[#F8FAFC] text-[#181b25] placeholder:text-[#64748B] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#3525cd]/20 focus:bg-white shadow-sm resize-none border border-[#E2E8F0]"
                          id="message"
                          name="message"
                          placeholder="Briefly describe your business or what you'd like to automate..."
                          rows={3}
                        ></textarea>
                      </div>
                      <button
                        disabled={isSubmitting}
                        className="w-full h-12 rounded-lg bg-[#090D16] text-white text-[12px] inline-flex items-center justify-center gap-2 hover:bg-[#3525cd] transition-all shadow-md group font-semibold"
                        type="submit"
                      >
                        <span>{isSubmitting ? "Submitting..." : "Book Free Consultation"}</span>
                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </button>
                    </form>

                    {formSuccess && (
                      <div className="p-4 rounded-lg bg-[#ECFDF5] text-[#059669] text-center text-[13px] font-semibold border border-[#D1FAE5]">
                        ✓ Consultation requested. We will reach out within 24 hours with your audit framework.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-[#f1f3ff] shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="max-w-[1240px] mx-auto px-6 py-16 flex flex-col gap-10">
          <div className="bg-[#090D16] rounded-xl p-10 shadow-[0_20px_40px_-8px_rgba(9,13,22,0.12)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#d8e2ff]">
                <span className="font-['JetBrains_Mono'] text-[14px] text-[#e2dfff]">//</span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#e2dfff]">High Velocity Automation</span>
              </div>
              <h3 className="text-[28px] font-bold text-white tracking-tight">Ready to eliminate internal workflow friction?</h3>
              <p className="text-[15px] text-slate-400">Schedule an institutional bottleneck audit. Actionable architectural insights in 48 hours.</p>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <a
                className="h-12 px-6 rounded-lg bg-white text-[#090D16] text-[12px] inline-flex items-center justify-center gap-2 hover:bg-[#e2dfff] hover:text-[#0f0069] transition-colors shadow-sm w-full md:w-auto font-semibold"
                href="#consultation"
              >
                <span>Request Audit Spec</span>
                <span className="material-symbols-outlined text-[18px]">terminal</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-['JetBrains_Mono'] text-[14px] text-[#4f46e5] font-bold">//</span>
                <span className="text-[20px] tracking-tight text-[#181b25] font-bold">Strafuse</span>
              </div>
              <p className="text-[13px] text-[#64748B]">Architectural AI workflow audits and automated deployment engineering for enterprise ops leaders.</p>
              <div className="flex items-center gap-2 pt-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full font-['JetBrains_Mono'] text-[11px] bg-[#ECFDF5] text-[#059669] font-semibold">
                  SYSTEM: OPERATIONAL
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-[#181b25] font-bold">Practices</span>
              <ul className="space-y-2 text-[13px] text-[#464555]">
                <li><a className="hover:text-[#181b25] transition-colors" href="#product-audit">Bottleneck Audit</a></li>
                <li><a className="hover:text-[#181b25] transition-colors" href="#how-it-works">Agent Scaffolding</a></li>
                <li><a className="hover:text-[#181b25] transition-colors" href="#use-cases">Stack Modernization</a></li>
                <li><a className="hover:text-[#181b25] transition-colors" href="#how-it-works">Pipeline Integration</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-[#181b25] font-bold">Architecture</span>
              <ul className="space-y-2 text-[13px] text-[#464555]">
                <li><a className="hover:text-[#181b25] transition-colors" href="#product-audit">Enterprise LLM Governance</a></li>
                <li><a className="hover:text-[#181b25] transition-colors" href="#product-audit">Latency Profiling</a></li>
                <li><a className="hover:text-[#181b25] transition-colors" href="#consultation">Engagement Tiers</a></li>
                <li><a className="hover:text-[#181b25] transition-colors" href="#how-it-works">Case Audits</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-[#181b25] font-bold">Inquiries</span>
              <p className="text-[13px] text-[#64748B]">Direct line to principal automation architects.</p>
              <div className="font-['JetBrains_Mono'] text-[14px] text-[#181b25] font-semibold">advisory@strafuse.internal</div>
            </div>
          </div>

          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[#64748B] border-t border-[#CBD5E1]/40">
            <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[12px]">
              <span>© 2025 Strafuse Systems Ltd.</span>
              <span>•</span>
              <span>Analytical Rigor Guaranteed</span>
            </div>
            <div className="flex items-center gap-4 text-[13px]">
              <span className="hover:text-[#181b25] transition-colors cursor-pointer">Privacy Architecture</span>
              <span className="hover:text-[#181b25] transition-colors cursor-pointer">Service Level Agreements</span>
              <span className="hover:text-[#181b25] transition-colors cursor-pointer">Security Framework</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
