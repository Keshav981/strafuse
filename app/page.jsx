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
        { text: "Automate customer support triage", tag: "High Impact", tagClass: "bg-status-velocity-badge text-status-velocity-text" },
        { text: "Auto-generate reports & insights", tag: "Medium", tagClass: "bg-surface-container text-on-surface-variant" },
        { text: "Sync data across tools automatically", tag: "High Impact", tagClass: "bg-status-velocity-badge text-status-velocity-text" },
        { text: "Streamline user onboarding flow", tag: "Medium", tagClass: "bg-surface-container text-on-surface-variant" },
      ],
    },
    gaps: {
      title: "Critical Operational Gaps Identified",
      items: [
        { text: "Manual copy-pasting between CSV and CRM", tag: "Critical Friction", tagClass: "bg-status-friction-badge text-status-friction-text" },
        { text: "Inbound leads waiting > 4 hours for first touch", tag: "Leakage Detected", tagClass: "bg-status-friction-badge text-status-friction-text" },
        { text: "Siloed customer conversations across Slack & Zendesk", tag: "High Friction", tagClass: "bg-status-friction-badge text-status-friction-text" },
        { text: "Zero automated regression checks on daily ops", tag: "Moderate Risk", tagClass: "bg-surface-container text-on-surface-variant" },
      ],
    },
    opportunities: {
      title: "High-Leverage AI Automations",
      items: [
        { text: "Zero-touch autonomous lead enricher & qualification", tag: "High ROI", tagClass: "bg-status-velocity-badge text-status-velocity-text" },
        { text: "Self-healing data synchronization agent across DB & CRM", tag: "99.8% Accuracy", tagClass: "bg-status-velocity-badge text-status-velocity-text" },
        { text: "Multi-modal invoice & document OCR parser", tag: "Hours Saved: 14/wk", tagClass: "bg-status-velocity-badge text-status-velocity-text" },
        { text: "Proactive churn prediction agent sending Slack alerts", tag: "Strategic", tagClass: "bg-primary-fixed text-on-primary-fixed" },
      ],
    },
    impact: {
      title: "Projected Velocity Gains",
      items: [
        { text: "18.5 hours saved per operator each week", tag: "Verified", tagClass: "bg-status-velocity-badge text-status-velocity-text" },
        { text: "94.8% reduction in manual data entry errors", tag: "Measured", tagClass: "bg-status-velocity-badge text-status-velocity-text" },
        { text: "Response time dropped from 4 hours to < 30 seconds", tag: "8x Speedup", tagClass: "bg-status-velocity-badge text-status-velocity-text" },
        { text: "Payback timeline under 21 calendar days", tag: "Capital Efficient", tagClass: "bg-status-velocity-badge text-status-velocity-text" },
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
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
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
        <div className="h-20 max-w-[1240px] mx-auto px-6 flex items-center justify-between gap-space-lg">
          <a className="flex items-center gap-space-xs group" data-path="home" href="#">
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center font-code-stat text-code-stat text-white group-hover:bg-white group-hover:text-primary transition-all font-bold">
              S
            </div>
            <span className="font-headline-md text-headline-md tracking-tight text-white font-bold drop-shadow-sm">
              Strafuse
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              className="text-white/85 hover:text-white transition-colors font-body-md text-body-md drop-shadow-sm font-medium"
              data-path="features"
              href="#how-it-works"
            >
              How It Works
            </a>
            <a
              className="text-white/85 hover:text-white transition-colors font-body-md text-body-md drop-shadow-sm font-medium"
              data-path="solutions"
              href="#product-audit"
            >
              Product Audit
            </a>
            <a
              className="text-white/85 hover:text-white transition-colors font-body-md text-body-md drop-shadow-sm font-medium"
              data-path="audit"
              href="#use-cases"
            >
              Use Cases
            </a>
            <a
              className="text-white/85 hover:text-white transition-colors font-body-md text-body-md drop-shadow-sm font-medium"
              data-path="pricing"
              href="#consultation"
            >
              Pricing & Consultation
            </a>
          </nav>

          <div className="flex items-center gap-space-md">
            <a
              className="hidden sm:inline-flex text-white/90 hover:text-white font-body-md text-body-md font-medium transition-colors drop-shadow-sm"
              href="#consultation"
            >
              Sign in
            </a>
            <a
              className="h-11 px-6 rounded-full bg-white text-surface-dark font-label-badge text-[14px] inline-flex items-center justify-center hover:bg-white/90 transition-all shadow-[0_4px_18px_rgba(0,0,0,0.12)] font-semibold group"
              data-path="book-an-audit"
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

        {mobileMenuOpen && (
          <div className="md:hidden bg-surface-dark/95 backdrop-blur-xl border-b border-border-slate-dark px-6 py-6 space-y-4">
            <a
              className="block text-white/90 hover:text-white font-body-md"
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              className="block text-white/90 hover:text-white font-body-md"
              href="#product-audit"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product Audit
            </a>
            <a
              className="block text-white/90 hover:text-white font-body-md"
              href="#use-cases"
              onClick={() => setMobileMenuOpen(false)}
            >
              Use Cases
            </a>
            <a
              className="block text-white/90 hover:text-white font-body-md"
              href="#consultation"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book an Audit
            </a>
          </div>
        )}
      </header>

      <main className="w-full bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* 1. HIGH ALTITUDE SKY HERO SECTION */}
          <div className="relative w-full overflow-hidden bg-[#258bf5] min-h-[820px] lg:min-h-[960px] flex flex-col justify-between">
            <img
              alt="High altitude blue sky with soft white clouds"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkZUaO2u11UUL0BuXENNZiY9YUeJcTPJTtHZZhwgU0CCEVArw80T0DPUVpAg6FFIS-FEac2C4ddFFwkfnGfHyc0gJ0K50xF1FSbzRZ5EbAKoxGnzKJKvLzE7yqK6stsWLvAMfJ9VNl5rOIW92EVbSXDey4dVS1A0x3LtFqDMGMPVvc9E2eyi45gPirBGj38-PgaBhVvp1Dx50UQcz_HdkdU_dH7IsrwmrjnsROkpL1pUVh1V4Bo4ZkSQ"
            />

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-blue-900/20 via-transparent to-surface/90"></div>
            <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-surface via-surface/80 to-transparent pointer-events-none z-10"></div>

            <div className="relative z-20 max-w-[1240px] mx-auto px-6 pt-36 md:pt-44 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/35 shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <span className="font-label-eyebrow text-label-eyebrow text-white uppercase tracking-wider font-semibold">
                  AI Workflow Audit & Automation Consultancy
                </span>
              </div>

              <h1 className="font-display-hero text-[42px] sm:text-[54px] lg:text-[72px] leading-[1.08] text-white tracking-tight font-extrabold max-w-4xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.18)]">
                Turn manual work into your <br className="hidden sm:inline" />
                biggest advantage.
              </h1>

              <p className="font-body-lg text-[17px] sm:text-[20px] leading-relaxed text-white/95 max-w-2xl mt-5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.15)] font-normal">
                We audit your product and operations, find what&apos;s slowing you down, and build AI automation to save time, reduce costs, and unlock growth.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-8">
                <a
                  className="h-12 px-8 rounded-full bg-white text-surface-dark font-label-badge text-[14px] inline-flex items-center justify-center font-bold hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2)] group"
                  href="#consultation"
                >
                  <span>Book an AI Workflow Audit</span>
                  <span className="material-symbols-outlined text-[18px] ml-1.5 group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </a>
                <a
                  className="h-12 px-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 font-label-badge text-[14px] inline-flex items-center justify-center font-semibold transition-all shadow-sm"
                  href="#how-it-works"
                >
                  <span>See How It Works</span>
                </a>
              </div>

              <p className="text-white/80 font-body-sm text-[13px] pt-4 tracking-wide drop-shadow-xs">
                No generic templates • Built around your business • From audit to implementation
              </p>

              {/* Floating Modern Dashboard Mockup */}
              <div className="w-full max-w-[1140px] mt-12 sm:mt-16 relative z-30 transition-all">
                <div className="rounded-t-[28px] bg-surface-bg/95 backdrop-blur-xl border-t border-x border-white/90 shadow-[0_-15px_40px_rgba(15,23,42,0.12),0_25px_60px_rgba(0,0,0,0.08)] overflow-hidden">
                  {/* Top Bar */}
                  <div className="px-6 py-3.5 bg-surface-subtle/90 border-b border-border-slate-subtle/80 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 inline-block"></span>
                      </div>
                      <div className="h-4 w-px bg-border-slate-medium/60 mx-1"></div>
                      <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-surface-bg border border-border-slate-subtle shadow-xs">
                        <span className="font-code-stat text-[11px] text-primary font-bold">//</span>
                        <span className="font-body-sm text-[12px] font-semibold text-on-surface">
                          Strafuse Live Workspace
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-text-muted">
                          unfold_more
                        </span>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center gap-2 text-[12px] font-body-sm text-text-muted">
                      <span>Workflow Intelligence</span>
                      <span>/</span>
                      <span className="text-on-surface font-semibold">
                        Institutional Velocity Audit
                      </span>
                      <span className="inline-flex items-center gap-1 ml-2 px-2 py-0.5 rounded-full bg-status-velocity-bg text-status-velocity-text font-code-stat text-[10px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-status-velocity-text animate-pulse"></span>
                        60 FPS STREAM
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-bg border border-border-slate-subtle text-text-muted text-[12px]">
                        <span className="material-symbols-outlined text-[15px]">calendar_today</span>
                        <span>Last 30 Days</span>
                      </div>
                      <a
                        href="#consultation"
                        className="px-2.5 py-1 rounded-md bg-primary text-white text-[12px] font-semibold flex items-center gap-1 hover:bg-primary/90 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[15px]">share</span>
                        <span className="hidden sm:inline">Export Audit</span>
                      </a>
                    </div>
                  </div>

                  {/* Dashboard Metrics */}
                  <div className="p-6 md:p-8 bg-surface-bg space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-4 rounded-xl bg-surface-subtle border border-border-slate-subtle/80 text-left">
                        <div className="font-body-sm text-[12px] text-text-muted font-medium">Weekly Bottlenecks</div>
                        <div className="font-headline-lg text-[24px] font-bold text-status-friction-text mt-1 flex items-baseline gap-2">
                          <span>-72%</span>
                          <span className="text-[11px] font-normal text-text-muted">eliminated</span>
                        </div>
                        <div className="text-[11px] text-text-muted mt-1 font-code-stat">Audit Spec v4.2</div>
                      </div>

                      <div className="p-4 rounded-xl bg-surface-subtle border border-border-slate-subtle/80 text-left">
                        <div className="font-body-sm text-[12px] text-text-muted font-medium">Time Reclaimed / Week</div>
                        <div className="font-headline-lg text-[24px] font-bold text-status-velocity-text mt-1 flex items-baseline gap-2">
                          <span>18.5 hrs</span>
                          <span className="text-[11px] font-normal text-status-velocity-text">/ operator</span>
                        </div>
                        <div className="text-[11px] text-text-muted mt-1 font-code-stat">Measured in real-time</div>
                      </div>

                      <div className="p-4 rounded-xl bg-surface-subtle border border-border-slate-subtle/80 text-left">
                        <div className="font-body-sm text-[12px] text-text-muted font-medium">Autonomous Execution</div>
                        <div className="font-headline-lg text-[24px] font-bold text-primary mt-1 flex items-baseline gap-2">
                          <span>94.8%</span>
                          <span className="text-[11px] font-normal text-text-muted">zero-touch</span>
                        </div>
                        <div className="text-[11px] text-text-muted mt-1 font-code-stat">Agent pipeline</div>
                      </div>

                      <div className="p-4 rounded-xl bg-surface-subtle border border-border-slate-subtle/80 text-left">
                        <div className="font-body-sm text-[12px] text-text-muted font-medium">Workflow Throughput</div>
                        <div className="font-headline-lg text-[24px] font-bold text-on-surface mt-1 flex items-baseline gap-2">
                          <span>4.6x</span>
                          <span className="text-[11px] font-normal text-status-velocity-text">velocity</span>
                        </div>
                        <div className="text-[11px] text-text-muted mt-1 font-code-stat">Production verified</div>
                      </div>
                    </div>

                    {/* Flow Diagram & Before / After Cards */}
                    <div className="relative">
                      <div className="hidden md:block absolute inset-0 pointer-events-none z-10">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 600 360">
                          <defs>
                            <linearGradient id="heroStreamGradPage" x1="0%" x2="100%" y1="0%" y2="0%">
                              <stop offset="0%" stopColor="#E11D48" stopOpacity="0.8" />
                              <stop offset="50%" stopColor="#4F46E5" stopOpacity="1" />
                              <stop offset="100%" stopColor="#059669" stopOpacity="0.9" />
                            </linearGradient>
                            <filter id="heroGlowPage">
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
                            filter="url(#heroGlowPage)"
                            stroke="url(#heroStreamGradPage)"
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
                        {/* BEFORE */}
                        <div className="bg-surface-subtle rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between border border-status-friction-badge/60 relative overflow-hidden group">
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-status-friction-text/40 to-transparent"></div>
                          <div>
                            <div className="flex items-center justify-between pb-3">
                              <div className="flex items-center gap-2">
                                <span className="px-2.5 py-1 rounded-full bg-status-friction-badge text-status-friction-text font-label-badge text-label-badge uppercase tracking-wider">
                                  Before
                                </span>
                                <span className="inline-flex items-center gap-1 text-[11px] font-code-stat text-status-friction-text">
                                  <span className="w-1.5 h-1.5 rounded-full bg-status-friction-text animate-ping"></span>
                                  Bottlenecks
                                </span>
                              </div>
                              <span className="material-symbols-outlined text-outline-variant text-[18px]">
                                history
                              </span>
                            </div>
                            <div className="space-y-2.5">
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-bg shadow-sm hover:bg-status-friction-bg/30 transition-all">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-text-muted text-[18px]">mail</span>
                                  <span className="font-body-sm text-body-sm text-on-surface truncate">
                                    Leads scattered across inboxes
                                  </span>
                                </div>
                                <span className="font-code-stat text-[11px] px-2 py-0.5 rounded bg-status-friction-bg text-status-friction-text font-semibold flex items-center gap-1">
                                  <span className="w-1 h-1 rounded-full bg-status-friction-text animate-pulse"></span>
                                  120+/day
                                </span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-bg shadow-sm hover:bg-status-friction-bg/30 transition-all">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-text-muted text-[18px]">person</span>
                                  <span className="font-body-sm text-body-sm text-on-surface truncate">
                                    Manual follow-ups & drafting
                                  </span>
                                </div>
                                <span className="font-code-stat text-[11px] px-2 py-0.5 rounded bg-status-friction-bg text-status-friction-text font-semibold">
                                  3-4 hrs/day
                                </span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-bg shadow-sm hover:bg-status-friction-bg/30 transition-all">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-text-muted text-[18px]">content_copy</span>
                                  <span className="font-body-sm text-body-sm text-on-surface truncate">
                                    Copy-pasting CSVs to CRM
                                  </span>
                                </div>
                                <span className="font-code-stat text-[11px] px-2 py-0.5 rounded bg-status-friction-bg text-status-friction-text font-semibold">
                                  2 hrs/day
                                </span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-bg shadow-sm hover:bg-status-friction-bg/30 transition-all">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-text-muted text-[18px]">sync</span>
                                  <span className="font-body-sm text-body-sm text-on-surface truncate">
                                    Updating disjointed tools manually
                                  </span>
                                </div>
                                <span className="font-code-stat text-[11px] px-2 py-0.5 rounded bg-status-friction-bg text-status-friction-text font-semibold">
                                  1-2 hrs/day
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 p-3 rounded-lg bg-status-friction-bg text-status-friction-text flex items-center gap-3 border border-status-friction-badge/50">
                            <div className="w-8 h-8 rounded-full bg-status-friction-badge flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-status-friction-text text-[18px]">
                                timer_off
                              </span>
                            </div>
                            <div className="leading-tight">
                              <div className="font-headline-md text-[16px] font-bold">8–15 hours / week</div>
                              <div className="font-body-sm text-[12px] opacity-90">spent on manual repetitive toil</div>
                            </div>
                          </div>
                        </div>

                        {/* Bridge Badge */}
                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center p-2.5 rounded-xl bg-surface-dark text-surface-bg shadow-2xl text-center w-32 border border-primary/40 pulse-bridge">
                          <div className="absolute -top-1 w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></div>
                          <div className="flex items-center gap-1 mb-0.5">
                            <span className="font-code-stat text-[12px] text-tertiary-fixed font-bold">//</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                          </div>
                          <span className="font-label-eyebrow text-[10px] leading-tight text-slate-300 font-semibold">
                            We find, automate and streamline this
                          </span>
                          <div className="flex items-center gap-1 mt-1 text-[9px] text-tertiary-fixed font-code-stat">
                            <span className="material-symbols-outlined text-[12px] animate-spin">autorenew</span>
                            <span>AUTOMATING</span>
                          </div>
                        </div>

                        {/* AFTER */}
                        <div className="bg-surface-subtle rounded-xl p-5 shadow-md space-y-4 flex flex-col justify-between border border-status-velocity-badge/80 relative overflow-hidden group">
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-status-velocity-text"></div>
                          <div>
                            <div className="flex items-center justify-between pb-3">
                              <div className="flex items-center gap-2">
                                <span className="px-2.5 py-1 rounded-full bg-status-velocity-badge text-status-velocity-text font-label-badge text-label-badge uppercase tracking-wider">
                                  After
                                </span>
                                <span className="inline-flex items-center gap-1 text-[11px] font-code-stat text-status-velocity-text">
                                  <span className="w-1.5 h-1.5 rounded-full bg-status-velocity-text animate-pulse"></span>
                                  Real-time Flow
                                </span>
                              </div>
                              <span className="material-symbols-outlined text-tertiary-container text-[18px]">
                                verified
                              </span>
                            </div>
                            <div className="space-y-2.5">
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-bg shadow-sm hover:bg-status-velocity-bg/40 hover:border-l-2 hover:border-status-velocity-text transition-all">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-status-velocity-text text-[18px] animate-pulse">bolt</span>
                                  <span className="font-body-sm text-body-sm text-on-surface truncate">
                                    AI triages & initiates instant reply
                                  </span>
                                </div>
                                <span className="material-symbols-outlined text-status-velocity-text text-[18px] shrink-0">
                                  check
                                </span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-bg shadow-sm hover:bg-status-velocity-bg/40 hover:border-l-2 hover:border-status-velocity-text transition-all">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-status-velocity-text text-[18px]">schedule</span>
                                  <span className="font-body-sm text-body-sm text-on-surface truncate">
                                    Bidirectional sync across CRM & ops
                                  </span>
                                </div>
                                <span className="material-symbols-outlined text-status-velocity-text text-[18px] shrink-0">
                                  check
                                </span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-bg shadow-sm hover:bg-status-velocity-bg/40 hover:border-l-2 hover:border-status-velocity-text transition-all">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-status-velocity-text text-[18px]">description</span>
                                  <span className="font-body-sm text-body-sm text-on-surface truncate">
                                    Contextual reports generated hourly
                                  </span>
                                </div>
                                <span className="material-symbols-outlined text-status-velocity-text text-[18px] shrink-0">
                                  check
                                </span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-bg shadow-sm hover:bg-status-velocity-bg/40 hover:border-l-2 hover:border-status-velocity-text transition-all">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-status-velocity-text text-[18px]">trending_up</span>
                                  <span className="font-body-sm text-body-sm text-on-surface truncate">
                                    Team focused 100% on high leverage growth
                                  </span>
                                </div>
                                <span className="material-symbols-outlined text-status-velocity-text text-[18px] shrink-0">
                                  check
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 p-3 rounded-lg bg-status-velocity-bg text-status-velocity-text flex items-center justify-between border border-status-velocity-badge/80">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-status-velocity-badge flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-status-velocity-text text-[18px]">speed</span>
                              </div>
                              <div className="leading-tight">
                                <div className="font-headline-md text-[16px] font-bold">Hours saved</div>
                                <div className="font-body-sm text-[12px] opacity-90">every week across teams</div>
                              </div>
                            </div>
                            <div className="relative w-14 h-8 flex items-center justify-center">
                              <svg className="w-14 h-8 text-status-velocity-text overflow-visible" fill="none" viewBox="0 0 56 28">
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

          {/* 2. SOCIAL PROOF / LOGO BAR */}
          <section className="w-full bg-surface-subtle py-12">
            <div className="max-w-[1240px] mx-auto px-6 flex flex-col items-center gap-6">
              <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest text-text-muted text-center">
                TRUSTED BY FORWARD-THINKING STARTUPS AND TEAMS
              </span>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-text-muted">
                <span className="font-headline-md text-[20px] font-bold tracking-tight hover:text-on-surface transition-colors cursor-default">Razorpay</span>
                <span className="font-headline-md text-[20px] font-extrabold tracking-widest hover:text-on-surface transition-colors cursor-default">OYO</span>
                <span className="font-headline-md text-[20px] font-bold tracking-tight lowercase hover:text-on-surface transition-colors cursor-default">zepto</span>
                <span className="font-headline-md text-[20px] font-semibold tracking-wide lowercase hover:text-on-surface transition-colors cursor-default">dunzo</span>
                <div className="flex items-center gap-1 font-headline-md text-[20px] font-black tracking-tight hover:text-on-surface transition-colors cursor-default">
                  <span className="material-symbols-outlined text-[20px]">shield</span>
                  <span>CRED</span>
                </div>
                <span className="font-headline-md text-[20px] font-semibold tracking-tight lowercase hover:text-on-surface transition-colors cursor-default">slice</span>
                <span className="font-headline-md text-[20px] font-bold tracking-tight lowercase hover:text-on-surface transition-colors cursor-default">meesho</span>
                <span className="font-headline-md text-[20px] font-bold tracking-wider lowercase hover:text-on-surface transition-colors cursor-default">rapido</span>
              </div>
            </div>
          </section>

          {/* 3. HOW IT WORKS */}
          <section className="max-w-[1240px] mx-auto px-6 py-24 space-y-12" id="how-it-works">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest text-primary font-bold">
                    HOW IT WORKS
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-status-velocity-bg text-status-velocity-text font-code-stat text-[10px] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-status-velocity-text animate-ping"></span>
                    PIPELINE ACTIVE
                  </span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                  A simple, proven way to automate what matters.
                </h2>
                <p className="font-body-md text-body-md text-text-body">
                  We take a product-first approach — understand your business, find the real opportunities, build the right solution, and help you see the impact.
                </p>
              </div>
              <div>
                <a
                  className="h-11 px-5 rounded-lg bg-surface-dark text-surface-bg font-label-badge text-label-badge inline-flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-sm group whitespace-nowrap"
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
                <div className="absolute inset-0 bg-border-slate-subtle/80 rounded-full"></div>
                <svg className="absolute inset-0 w-full h-[6px] -top-[1.5px]" preserveAspectRatio="none">
                  <line className="flow-line-fast" stroke="url(#pipeGradReact2)" strokeWidth="3" x1="0" x2="100%" y1="3" y2="3"></line>
                  <defs>
                    <linearGradient id="pipeGradReact2" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="#4f46e5" />
                      <stop offset="50%" stopColor="#2170e4" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
                <div className="float-card bg-surface-bg rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-lg transition-all border border-border-slate-subtle/80 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-electric-indigo-subtle flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-surface-bg transition-all shadow-xs">
                        <span className="material-symbols-outlined text-[22px]">search</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:animate-ping transition-colors"></span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-code-stat text-[12px] text-primary font-semibold">01</span>
                        <span className="h-px w-4 bg-primary/40"></span>
                      </div>
                      <h3 className="font-headline-md text-[18px] font-bold text-on-surface group-hover:text-primary transition-colors">Understand</h3>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-text-body">We learn about your product, users, team and current workflows.</p>
                </div>

                <div className="float-card bg-surface-bg rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-lg transition-all border border-border-slate-subtle/80 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-electric-indigo-subtle flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-surface-bg transition-all shadow-xs">
                        <span className="material-symbols-outlined text-[22px]">query_stats</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:animate-ping transition-colors"></span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-code-stat text-[12px] text-primary font-semibold">02</span>
                        <span className="h-px w-4 bg-primary/40"></span>
                      </div>
                      <h3 className="font-headline-md text-[18px] font-bold text-on-surface group-hover:text-primary transition-colors">Find Opportunities</h3>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-text-body">We identify <strong className="text-on-surface font-semibold">gaps</strong>, bottlenecks and high-impact automation opportunities.</p>
                </div>

                <div className="float-card bg-surface-bg rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-lg transition-all border border-border-slate-subtle/80 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-electric-indigo-subtle flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-surface-bg transition-all shadow-xs">
                        <span className="material-symbols-outlined text-[22px]">ballot</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:animate-ping transition-colors"></span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-code-stat text-[12px] text-primary font-semibold">03</span>
                        <span className="h-px w-4 bg-primary/40"></span>
                      </div>
                      <h3 className="font-headline-md text-[18px] font-bold text-on-surface group-hover:text-primary transition-colors">Plan & Prioritize</h3>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-text-body">We recommend what to automate, estimate impact and create an implementation plan.</p>
                </div>

                <div className="float-card bg-surface-bg rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-lg transition-all border border-border-slate-subtle/80 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-electric-indigo-subtle flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-surface-bg transition-all shadow-xs">
                        <span className="material-symbols-outlined text-[22px]">inventory_2</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:animate-ping transition-colors"></span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-code-stat text-[12px] text-primary font-semibold">04</span>
                        <span className="h-px w-4 bg-primary/40"></span>
                      </div>
                      <h3 className="font-headline-md text-[18px] font-bold text-on-surface group-hover:text-primary transition-colors">Build & Integrate</h3>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-text-body">We design, build and integrate the solution with your existing tools and product.</p>
                </div>

                <div className="float-card bg-surface-bg rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-lg transition-all border border-status-velocity-badge/80 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-status-velocity-text"></div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-status-velocity-bg flex items-center justify-center text-status-velocity-text group-hover:scale-110 group-hover:bg-status-velocity-text group-hover:text-surface-bg transition-all shadow-xs">
                        <span className="material-symbols-outlined text-[22px]">ssid_chart</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-status-velocity-text animate-ping"></span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-code-stat text-[12px] text-status-velocity-text font-semibold">05</span>
                        <span className="h-px w-4 bg-status-velocity-text/40"></span>
                      </div>
                      <h3 className="font-headline-md text-[18px] font-bold text-on-surface group-hover:text-status-velocity-text transition-colors">Measure & Improve</h3>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-text-body">You start saving time, reduce costs and we keep optimizing based on real results.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. PRODUCT AUDIT */}
          <section className="w-full bg-surface-subtle py-24" id="product-audit">
            <div className="max-w-[1240px] mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-2">
                    <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest text-primary font-bold">
                      PRODUCT AUDIT
                    </span>
                    <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                      Get a clear view of what&apos;s working, what&apos;s missing, and what to automate.
                    </h2>
                    <p className="font-body-md text-body-md text-text-body">
                      A structured audit to understand your product, operations and workflows — and find where AI can create real leverage.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2.5 p-3 rounded-lg bg-surface-bg shadow-sm hover:translate-x-1 transition-transform">
                      <span className="material-symbols-outlined text-primary text-[20px]">description</span>
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface">Product Analysis</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-lg bg-surface-bg shadow-sm hover:translate-x-1 transition-transform">
                      <span className="material-symbols-outlined text-secondary text-[20px]">map</span>
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface">Workflow Mapping</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-lg bg-surface-bg shadow-sm hover:translate-x-1 transition-transform">
                      <span className="material-symbols-outlined text-status-friction-text text-[20px]">adjust</span>
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface">Gap Identification</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-lg bg-surface-bg shadow-sm hover:translate-x-1 transition-transform">
                      <span className="material-symbols-outlined text-primary-container text-[20px]">bolt</span>
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface">Automation Opportunities</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-lg bg-surface-bg shadow-sm hover:translate-x-1 transition-transform">
                      <span className="material-symbols-outlined text-status-velocity-text text-[20px]">analytics</span>
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface">Impact Estimation</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-lg bg-surface-bg shadow-sm hover:translate-x-1 transition-transform">
                      <span className="material-symbols-outlined text-on-primary-fixed-variant text-[20px]">checklist</span>
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface">Implementation Plan</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      className="h-12 px-6 rounded-lg bg-surface-dark text-surface-bg font-label-badge text-label-badge inline-flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-md group"
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
                  <div className="relative bg-surface-bg rounded-xl p-6 sm:p-8 shadow-xl space-y-6 border border-border-slate-subtle/80 overflow-hidden">
                    <div className="absolute inset-x-0 h-10 pointer-events-none scanner-active bg-gradient-to-b from-primary/10 via-primary/5 to-transparent border-t border-primary/30 z-20"></div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border-slate-subtle/60">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-electric-indigo-subtle flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">lab_profile</span>
                        </div>
                        <div>
                          <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Product Analysis Report</h3>
                          <div className="flex items-center gap-1.5 text-[11px] font-code-stat text-status-velocity-text">
                            <span className="w-1.5 h-1.5 rounded-full bg-status-velocity-text animate-pulse"></span>
                            LIVE SCANNING: INGESTED 42 WORKFLOW NODES
                          </div>
                        </div>
                      </div>

                      {/* Tab Pills */}
                      <div className="flex items-center gap-1 p-1 bg-surface-container rounded-lg text-text-muted font-body-sm text-[12px]">
                        {["overview", "gaps", "opportunities", "impact"].map((tabKey) => (
                          <button
                            key={tabKey}
                            onClick={() => setActiveTab(tabKey)}
                            className={`px-2.5 py-1 rounded transition-all capitalize ${
                              activeTab === tabKey
                                ? "bg-surface-bg text-on-surface font-semibold shadow-xs flex items-center gap-1"
                                : "hover:text-on-surface"
                            }`}
                          >
                            {activeTab === tabKey && (
                              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            )}
                            {tabKey}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
                      <div className="md:col-span-7 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-wider text-text-muted">
                            {tabData[activeTab]?.title}
                          </span>
                          <span className="font-code-stat text-[11px] text-primary">
                            SYNCING 60fps
                          </span>
                        </div>

                        {tabData[activeTab]?.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-lg bg-surface-subtle flex items-center justify-between gap-2 shadow-sm border border-transparent hover:border-primary/30 transition-all"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="material-symbols-outlined text-status-velocity-text text-[18px] shrink-0 animate-pulse">
                                check_circle
                              </span>
                              <span className="font-body-sm text-body-sm text-on-surface truncate">
                                {item.text}
                              </span>
                            </div>
                            <span
                              className={`font-label-badge text-[11px] px-2 py-0.5 rounded-full ${item.tagClass} font-bold whitespace-nowrap`}
                            >
                              {item.tag}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="md:col-span-5 flex flex-col justify-center p-6 rounded-xl bg-electric-indigo-subtle text-center space-y-4 border border-primary/20 relative overflow-hidden">
                        <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary/10 rounded-full blur-xl pointer-events-none"></div>
                        <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-wider text-primary font-bold">
                          Estimated Impact
                        </span>
                        <div className="font-display-hero text-[44px] leading-tight font-extrabold text-primary tracking-tight">
                          60–70%
                        </div>
                        <p className="font-body-sm text-body-sm text-text-body font-medium">
                          reduction in manual work
                        </p>

                        <div className="flex items-end justify-center gap-2 h-14 pt-2">
                          <div className="w-3 bg-primary/30 rounded-t h-4 hover:h-6 transition-all duration-700"></div>
                          <div className="w-3 bg-primary/50 rounded-t h-6 hover:h-8 transition-all duration-700"></div>
                          <div className="w-3 bg-primary/70 rounded-t h-9 hover:h-11 transition-all duration-700"></div>
                          <div className="w-3 bg-primary/90 rounded-t h-12 hover:h-13 transition-all duration-700"></div>
                          <div className="w-3 bg-primary rounded-t h-14 animate-pulse"></div>
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
              <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest text-primary font-bold">
                COMMON USE CASES
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                Where AI can create leverage in your business.
              </h2>
              <p className="font-body-md text-body-md text-text-body">
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
                  className="p-6 rounded-xl bg-surface-bg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-center text-center space-y-3 group cursor-pointer border border-border-slate-subtle/60"
                >
                  <div className="w-12 h-12 rounded-xl bg-electric-indigo-subtle flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface-bg transition-colors">
                    <span className="material-symbols-outlined text-[24px]">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-[18px] font-bold text-on-surface">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </section>

          {/* 6. LEAD CAPTURE & CONSULTATION */}
          <section className="w-full bg-surface-subtle py-24" id="consultation">
            <div className="max-w-[1240px] mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest text-primary font-bold">
                    FREE CONSULTATION
                  </span>
                  <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                    Let&apos;s find your AI opportunities.
                  </h2>
                  <p className="font-body-lg text-body-lg text-text-body">
                    A 30-minute consultation to understand your product, discuss your challenges and explore <strong className="text-on-surface font-semibold">high-impact</strong> automation opportunities.
                  </p>

                  <div className="space-y-3 pt-2">
                    {["No obligation", "Strategic discussion", "Actionable insights"].map((pt, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-status-velocity-bg text-status-velocity-text flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[16px]">check</span>
                        </div>
                        <span className="font-body-md text-body-md text-on-surface font-medium">{pt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-3 text-text-muted font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-[20px] text-primary">calendar_month</span>
                    <span>Tell us about your business, we&apos;ll take it from here.</span>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="bg-surface-bg rounded-xl p-8 shadow-xl space-y-6 border border-border-slate-subtle/80">
                    <div className="space-y-1">
                      <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Book a Free Consultation</h3>
                      <p className="font-body-sm text-body-sm text-text-muted">Schedule a direct discovery session with our technical leads.</p>
                    </div>

                    <form className="space-y-4" onSubmit={handleFormSubmit}>
                      <div>
                        <label className="block font-body-sm text-[13px] font-semibold text-on-surface mb-1" htmlFor="name">
                          Name <span className="text-error">*</span>
                        </label>
                        <input
                          className="w-full h-11 px-4 rounded-lg bg-surface-subtle text-on-surface placeholder:text-text-muted text-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-bg shadow-sm border border-border-slate-subtle"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          required
                          type="text"
                        />
                      </div>
                      <div>
                        <label className="block font-body-sm text-[13px] font-semibold text-on-surface mb-1" htmlFor="email">
                          Email <span className="text-error">*</span>
                        </label>
                        <input
                          className="w-full h-11 px-4 rounded-lg bg-surface-subtle text-on-surface placeholder:text-text-muted text-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-bg shadow-sm border border-border-slate-subtle"
                          id="email"
                          name="email"
                          placeholder="you@company.com"
                          required
                          type="email"
                        />
                      </div>
                      <div>
                        <label className="block font-body-sm text-[13px] font-semibold text-on-surface mb-1" htmlFor="phone">
                          Phone Number <span className="text-error">*</span>
                        </label>
                        <input
                          className="w-full h-11 px-4 rounded-lg bg-surface-subtle text-on-surface placeholder:text-text-muted text-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-bg shadow-sm border border-border-slate-subtle"
                          id="phone"
                          name="phone"
                          placeholder="+1 (555) 000-0000"
                          required
                          type="tel"
                        />
                      </div>
                      <div>
                        <label className="block font-body-sm text-[13px] font-semibold text-on-surface mb-1" htmlFor="message">
                          Message <span className="text-text-muted font-normal">(Optional)</span>
                        </label>
                        <textarea
                          className="w-full p-4 rounded-lg bg-surface-subtle text-on-surface placeholder:text-text-muted text-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-bg shadow-sm resize-none border border-border-slate-subtle"
                          id="message"
                          name="message"
                          placeholder="Briefly describe your business or what you'd like to automate..."
                          rows={3}
                        ></textarea>
                      </div>
                      <button
                        disabled={isSubmitting}
                        className="w-full h-12 rounded-lg bg-surface-dark text-surface-bg font-label-badge text-label-badge inline-flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-md group font-semibold"
                        type="submit"
                      >
                        <span>{isSubmitting ? "Submitting..." : "Book Free Consultation"}</span>
                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </button>
                    </form>

                    {formSuccess && (
                      <div className="p-4 rounded-lg bg-status-velocity-bg text-status-velocity-text text-center font-body-sm text-body-sm font-semibold border border-status-velocity-badge">
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
      <footer className="w-full bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="max-w-[1240px] mx-auto px-6 py-space-2xl flex flex-col gap-space-xl">
          <div className="bg-surface-dark rounded-xl p-space-xl shadow-[0_20px_40px_-8px_rgba(9,13,22,0.12)] flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
            <div className="space-y-space-xs">
              <div className="flex items-center gap-space-xs text-secondary-fixed">
                <span className="font-code-stat text-code-stat text-primary-fixed">//</span>
                <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest text-primary-fixed">High Velocity Automation</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-surface-bg font-bold tracking-tight">Ready to eliminate internal workflow friction?</h3>
              <p className="font-body-md text-body-md text-slate-400">Schedule an institutional bottleneck audit. Actionable architectural insights in 48 hours.</p>
            </div>
            <div className="flex items-center gap-space-md w-full md:w-auto">
              <a
                className="h-12 px-6 rounded-lg bg-surface-bg text-surface-dark font-label-badge text-label-badge inline-flex items-center justify-center gap-space-xs hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors shadow-sm w-full md:w-auto font-semibold"
                data-path="book-an-audit"
                href="#consultation"
              >
                <span>Request Audit Spec</span>
                <span className="material-symbols-outlined text-[18px]">terminal</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-space-xl pt-space-md">
            <div className="space-y-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="font-code-stat text-code-stat text-primary-container font-bold">//</span>
                <span className="font-headline-md text-headline-md tracking-tight text-on-surface font-bold">Strafuse</span>
              </div>
              <p className="font-body-sm text-body-sm text-text-muted">Architectural AI workflow audits and automated deployment engineering for enterprise ops leaders.</p>
              <div className="flex items-center gap-space-xs">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full font-code-stat text-[11px] bg-status-velocity-bg text-status-velocity-text font-semibold">
                  SYSTEM: OPERATIONAL
                </span>
              </div>
            </div>

            <div className="space-y-space-sm">
              <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-wider text-on-surface font-bold">Practices</span>
              <ul className="space-y-space-xs font-body-sm text-body-sm">
                <li className="text-on-surface-variant hover:text-on-surface transition-colors"><a data-path="audit" href="#product-audit">Bottleneck Audit</a></li>
                <li className="text-on-surface-variant hover:text-on-surface transition-colors"><a data-path="solutions" href="#how-it-works">Agent Scaffolding</a></li>
                <li className="text-on-surface-variant hover:text-on-surface transition-colors"><a data-path="features" href="#use-cases">Stack Modernization</a></li>
                <li className="text-on-surface-variant hover:text-on-surface transition-colors"><a data-path="solutions" href="#how-it-works">Pipeline Integration</a></li>
              </ul>
            </div>

            <div className="space-y-space-sm">
              <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-wider text-on-surface font-bold">Architecture</span>
              <ul className="space-y-space-xs font-body-sm text-body-sm">
                <li className="text-on-surface-variant hover:text-on-surface transition-colors"><a data-path="features" href="#product-audit">Enterprise LLM Governance</a></li>
                <li className="text-on-surface-variant hover:text-on-surface transition-colors"><a data-path="audit" href="#product-audit">Latency Profiling</a></li>
                <li className="text-on-surface-variant hover:text-on-surface transition-colors"><a data-path="pricing" href="#consultation">Engagement Tiers</a></li>
                <li className="text-on-surface-variant hover:text-on-surface transition-colors"><a data-path="solutions" href="#how-it-works">Case Audits</a></li>
              </ul>
            </div>

            <div className="space-y-space-sm">
              <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-wider text-on-surface font-bold">Inquiries</span>
              <p className="font-body-sm text-body-sm text-text-muted">Direct line to principal automation architects.</p>
              <div className="font-code-stat text-code-stat text-on-surface font-semibold">advisory@strafuse.internal</div>
            </div>
          </div>

          <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-text-muted">
            <div className="flex items-center gap-space-xs font-code-stat text-[12px]">
              <span>© 2025 Strafuse Systems Ltd.</span>
              <span>•</span>
              <span>Analytical Rigor Guaranteed</span>
            </div>
            <div className="flex items-center gap-space-md text-[13px]">
              <span className="hover:text-on-surface transition-colors cursor-pointer">Privacy Architecture</span>
              <span className="hover:text-on-surface transition-colors cursor-pointer">Service Level Agreements</span>
              <span className="hover:text-on-surface transition-colors cursor-pointer">Security Framework</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
