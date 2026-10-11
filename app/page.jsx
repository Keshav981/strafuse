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
        <div className="h-16 sm:h-20 max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <a className="flex items-center gap-2.5 group shrink-0" data-path="home" href="#">
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center font-mono text-sm text-white group-hover:bg-white group-hover:text-primary transition-all font-bold">
              S
            </div>
            <span className="text-xl sm:text-2xl tracking-tight text-white font-bold drop-shadow-sm">
              Strafuse
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            <a
              className="text-white/85 hover:text-white transition-colors text-sm font-medium drop-shadow-sm"
              data-path="features"
              href="#how-it-works"
            >
              How It Works
            </a>
            <a
              className="text-white/85 hover:text-white transition-colors text-sm font-medium drop-shadow-sm"
              data-path="solutions"
              href="#product-audit"
            >
              Product Audit
            </a>
            <a
              className="text-white/85 hover:text-white transition-colors text-sm font-medium drop-shadow-sm"
              data-path="audit"
              href="#use-cases"
            >
              Use Cases
            </a>
            <a
              className="text-white/85 hover:text-white transition-colors text-sm font-medium drop-shadow-sm"
              data-path="pricing"
              href="#consultation"
            >
              Pricing & Consultation
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              className="hidden sm:inline-flex text-white/90 hover:text-white text-sm font-medium transition-colors drop-shadow-sm"
              href="#consultation"
            >
              Sign in
            </a>
            <a
              className="h-9 sm:h-11 px-4 sm:px-6 rounded-full bg-white text-surface-dark text-xs sm:text-sm inline-flex items-center justify-center hover:bg-white/90 transition-all shadow-md font-semibold shrink-0"
              data-path="book-an-audit"
              href="#consultation"
            >
              <span>Book an Audit</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="lg:hidden text-white p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface-dark/95 backdrop-blur-2xl border-b border-border-slate-dark px-6 py-6 space-y-4 shadow-2xl">
            <a
              className="block text-white/90 hover:text-white text-base font-medium py-1"
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              className="block text-white/90 hover:text-white text-base font-medium py-1"
              href="#product-audit"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product Audit
            </a>
            <a
              className="block text-white/90 hover:text-white text-base font-medium py-1"
              href="#use-cases"
              onClick={() => setMobileMenuOpen(false)}
            >
              Use Cases
            </a>
            <a
              className="block text-white/90 hover:text-white text-base font-medium py-1"
              href="#consultation"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing & Consultation
            </a>
            <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
              <a
                className="w-full h-11 rounded-lg bg-primary text-white text-sm font-semibold flex items-center justify-center shadow-sm"
                href="#consultation"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book an AI Audit
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="w-full bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* 1. HIGH ALTITUDE SKY HERO SECTION */}
          <div className="relative w-full overflow-hidden bg-[#258bf5] min-h-[680px] sm:min-h-[820px] lg:min-h-[960px] flex flex-col justify-between">
            <img
              alt="High altitude blue sky with soft white clouds"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkZUaO2u11UUL0BuXENNZiY9YUeJcTPJTtHZZhwgU0CCEVArw80T0DPUVpAg6FFIS-FEac2C4ddFFwkfnGfHyc0gJ0K50xF1FSbzRZ5EbAKoxGnzKJKvLzE7yqK6stsWLvAMfJ9VNl5rOIW92EVbSXDey4dVS1A0x3LtFqDMGMPVvc9E2eyi45gPirBGj38-PgaBhVvp1Dx50UQcz_HdkdU_dH7IsrwmrjnsROkpL1pUVh1V4Bo4ZkSQ"
            />

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-blue-900/20 via-transparent to-surface/90"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-t from-surface via-surface/80 to-transparent pointer-events-none z-10"></div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-36 lg:pt-40 flex flex-col items-center text-center">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/35 shadow-sm mb-4 sm:mb-6">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  AI Workflow Audit & Automation Consultancy
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.18)]">
                Turn manual work into your <br className="hidden sm:inline" />
                biggest advantage.
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/95 max-w-2xl mt-4 sm:mt-5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.15)] font-normal">
                We audit your product and operations, find what&apos;s slowing you down, and build AI automation to save time, reduce costs, and unlock growth.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 w-full sm:w-auto">
                <a
                  className="w-full sm:w-auto h-12 px-7 rounded-full bg-white text-surface-dark text-sm sm:text-base inline-flex items-center justify-center font-bold hover:bg-white/90 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg group"
                  href="#consultation"
                >
                  <span>Book an AI Workflow Audit</span>
                  <span className="material-symbols-outlined text-lg ml-1.5 group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </a>
                <a
                  className="w-full sm:w-auto h-12 px-7 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 text-sm sm:text-base inline-flex items-center justify-center font-semibold transition-all shadow-sm"
                  href="#how-it-works"
                >
                  <span>See How It Works</span>
                </a>
              </div>

              {/* Trust Subtext */}
              <p className="text-white/85 text-xs sm:text-sm pt-4 tracking-wide">
                No generic templates • Built around your business • From audit to implementation
              </p>

              {/* Floating Modern Dashboard Mockup */}
              <div className="w-full max-w-6xl mt-8 sm:mt-12 lg:mt-16 relative z-30 transition-all">
                <div className="rounded-t-2xl sm:rounded-t-[28px] bg-surface-bg/95 backdrop-blur-xl border-t border-x border-white/90 shadow-[0_-15px_40px_rgba(15,23,42,0.12),0_25px_60px_rgba(0,0,0,0.08)] overflow-hidden">
                  {/* Top Bar */}
                  <div className="px-4 sm:px-6 py-3 bg-surface-subtle/90 border-b border-border-slate-subtle/80 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]/80 inline-block"></span>
                        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]/80 inline-block"></span>
                        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]/80 inline-block"></span>
                      </div>
                      <div className="h-4 w-px bg-border-slate-medium/60 mx-1 hidden sm:block"></div>
                      <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1 rounded-md bg-surface-bg border border-border-slate-subtle shadow-xs">
                        <span className="font-mono text-xs text-primary font-bold">//</span>
                        <span className="text-xs sm:text-sm font-semibold text-on-surface">
                          Strafuse Live Workspace
                        </span>
                        <span className="material-symbols-outlined text-sm text-text-muted hidden sm:inline">
                          unfold_more
                        </span>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center gap-2 text-xs text-text-muted font-medium">
                      <span>Workflow Intelligence</span>
                      <span>/</span>
                      <span className="text-on-surface font-semibold">
                        Institutional Velocity Audit
                      </span>
                      <span className="inline-flex items-center gap-1 ml-2 px-2 py-0.5 rounded-full bg-status-velocity-bg text-status-velocity-text font-mono text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-status-velocity-text"></span>
                        60 FPS STREAM
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-bg border border-border-slate-subtle text-text-muted text-xs">
                        <span className="material-symbols-outlined text-sm">calendar_today</span>
                        <span>Last 30 Days</span>
                      </div>
                      <a
                        href="#consultation"
                        className="px-2.5 py-1 rounded-md bg-primary text-white text-xs font-semibold flex items-center gap-1 hover:bg-primary/90 transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">share</span>
                        <span className="hidden sm:inline">Export Audit</span>
                      </a>
                    </div>
                  </div>

                  {/* Dashboard Metrics */}
                  <div className="p-4 sm:p-6 lg:p-8 bg-surface-bg space-y-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      <div className="p-3.5 sm:p-4 rounded-xl bg-surface-subtle border border-border-slate-subtle/80 text-left">
                        <div className="text-xs text-text-muted font-medium">Weekly Bottlenecks</div>
                        <div className="text-xl sm:text-2xl font-bold font-mono text-status-friction-text mt-1 flex items-baseline gap-1.5">
                          <span>-72%</span>
                          <span className="text-xs font-normal text-text-muted">eliminated</span>
                        </div>
                        <div className="text-xs text-text-muted mt-1 font-mono">Audit Spec v4.2</div>
                      </div>

                      <div className="p-3.5 sm:p-4 rounded-xl bg-surface-subtle border border-border-slate-subtle/80 text-left">
                        <div className="text-xs text-text-muted font-medium">Time Reclaimed / Week</div>
                        <div className="text-xl sm:text-2xl font-bold font-mono text-status-velocity-text mt-1 flex items-baseline gap-1.5">
                          <span>18.5 hrs</span>
                          <span className="text-xs font-normal text-status-velocity-text">/ operator</span>
                        </div>
                        <div className="text-xs text-text-muted mt-1 font-mono">Measured in real-time</div>
                      </div>

                      <div className="p-3.5 sm:p-4 rounded-xl bg-surface-subtle border border-border-slate-subtle/80 text-left">
                        <div className="text-xs text-text-muted font-medium">Autonomous Execution</div>
                        <div className="text-xl sm:text-2xl font-bold font-mono text-primary mt-1 flex items-baseline gap-1.5">
                          <span>94.8%</span>
                          <span className="text-xs font-normal text-text-muted">zero-touch</span>
                        </div>
                        <div className="text-xs text-text-muted mt-1 font-mono">Agent pipeline</div>
                      </div>

                      <div className="p-3.5 sm:p-4 rounded-xl bg-surface-subtle border border-border-slate-subtle/80 text-left">
                        <div className="text-xs text-text-muted font-medium">Workflow Throughput</div>
                        <div className="text-xl sm:text-2xl font-bold font-mono text-on-surface mt-1 flex items-baseline gap-1.5">
                          <span>4.6x</span>
                          <span className="text-xs font-normal text-status-velocity-text">velocity</span>
                        </div>
                        <div className="text-xs text-text-muted mt-1 font-mono">Production verified</div>
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
                            d="M 285 180 L 315 180"
                            fill="none"
                            filter="url(#heroGlowPage)"
                            stroke="url(#heroStreamGradPage)"
                            strokeWidth="3"
                          />
                          <path
                            d="M 260 80 C 290 80, 310 160, 340 160"
                            fill="none"
                            stroke="rgba(79, 70, 229, 0.4)"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M 260 280 C 290 280, 310 200, 340 200"
                            fill="none"
                            stroke="rgba(5, 150, 105, 0.4)"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch text-left">
                        {/* BEFORE */}
                        <div className="bg-surface-subtle rounded-xl p-4 sm:p-5 shadow-sm space-y-4 flex flex-col justify-between border border-status-friction-badge/60 relative overflow-hidden group">
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-status-friction-text/40 to-transparent"></div>
                          <div>
                            <div className="flex items-center justify-between pb-3">
                              <div className="flex items-center gap-2">
                                <span className="px-2.5 py-1 rounded-full bg-status-friction-badge text-status-friction-text text-xs uppercase tracking-wider font-semibold">
                                  Before
                                </span>
                                <span className="inline-flex items-center gap-1 text-xs font-mono text-status-friction-text font-medium">
                                  <span className="w-1.5 h-1.5 rounded-full bg-status-friction-text"></span>
                                  Bottlenecks
                                </span>
                              </div>
                              <span className="material-symbols-outlined text-outline-variant text-lg">
                                history
                              </span>
                            </div>
                            <div className="space-y-2.5">
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-bg shadow-sm border border-border-slate-subtle/40">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-text-muted text-base shrink-0">mail</span>
                                  <span className="text-xs sm:text-sm text-on-surface truncate">
                                    Leads scattered across inboxes
                                  </span>
                                </div>
                                <span className="font-mono text-xs px-2 py-0.5 rounded bg-status-friction-bg text-status-friction-text font-semibold shrink-0">
                                  120+/day
                                </span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-bg shadow-sm border border-border-slate-subtle/40">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-text-muted text-base shrink-0">person</span>
                                  <span className="text-xs sm:text-sm text-on-surface truncate">
                                    Manual follow-ups & drafting
                                  </span>
                                </div>
                                <span className="font-mono text-xs px-2 py-0.5 rounded bg-status-friction-bg text-status-friction-text font-semibold shrink-0">
                                  3-4 hrs/day
                                </span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-bg shadow-sm border border-border-slate-subtle/40">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-text-muted text-base shrink-0">content_copy</span>
                                  <span className="text-xs sm:text-sm text-on-surface truncate">
                                    Copy-pasting CSVs to CRM
                                  </span>
                                </div>
                                <span className="font-mono text-xs px-2 py-0.5 rounded bg-status-friction-bg text-status-friction-text font-semibold shrink-0">
                                  2 hrs/day
                                </span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-bg shadow-sm border border-border-slate-subtle/40">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-text-muted text-base shrink-0">sync</span>
                                  <span className="text-xs sm:text-sm text-on-surface truncate">
                                    Updating disjointed tools manually
                                  </span>
                                </div>
                                <span className="font-mono text-xs px-2 py-0.5 rounded bg-status-friction-bg text-status-friction-text font-semibold shrink-0">
                                  1-2 hrs/day
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-2 p-3 rounded-lg bg-status-friction-bg text-status-friction-text flex items-center gap-3 border border-status-friction-badge/50">
                            <div className="w-8 h-8 rounded-full bg-status-friction-badge flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-status-friction-text text-base">
                                timer_off
                              </span>
                            </div>
                            <div className="leading-tight">
                              <div className="text-sm font-bold">18.5 hours lost</div>
                              <div className="text-xs opacity-90">per person weekly on repetitive admin</div>
                            </div>
                          </div>
                        </div>

                        {/* Bridge Badge */}
                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center p-2.5 rounded-xl bg-surface-dark text-surface-bg shadow-2xl text-center w-36 border border-primary/40">
                          <div className="flex items-center gap-1 mb-0.5">
                            <span className="font-mono text-xs text-tertiary-fixed font-bold">//</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                          </div>
                          <span className="text-xs leading-tight text-slate-300 font-semibold">
                            We find, automate and streamline this
                          </span>
                          <div className="flex items-center gap-1 mt-1 text-xs text-tertiary-fixed font-mono font-semibold">
                            <span className="material-symbols-outlined text-xs">autorenew</span>
                            <span>AUTOMATING</span>
                          </div>
                        </div>

                        {/* AFTER */}
                        <div className="bg-surface-subtle rounded-xl p-4 sm:p-5 shadow-sm space-y-4 flex flex-col justify-between border border-status-velocity-badge/80 relative overflow-hidden group">
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-status-velocity-text"></div>
                          <div>
                            <div className="flex items-center justify-between pb-3">
                              <div className="flex items-center gap-2">
                                <span className="px-2.5 py-1 rounded-full bg-status-velocity-badge text-status-velocity-text text-xs uppercase tracking-wider font-semibold">
                                  After
                                </span>
                                <span className="inline-flex items-center gap-1 text-xs font-mono text-status-velocity-text font-medium">
                                  <span className="w-1.5 h-1.5 rounded-full bg-status-velocity-text"></span>
                                  Real-time Flow
                                </span>
                              </div>
                              <span className="material-symbols-outlined text-tertiary-container text-lg">
                                verified
                              </span>
                            </div>
                            <div className="space-y-2.5">
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-bg shadow-sm border border-border-slate-subtle/40">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-status-velocity-text text-base shrink-0">bolt</span>
                                  <span className="text-xs sm:text-sm text-on-surface truncate">
                                    AI triages & initiates instant reply
                                  </span>
                                </div>
                                <span className="material-symbols-outlined text-status-velocity-text text-base shrink-0">
                                  check
                                </span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-bg shadow-sm border border-border-slate-subtle/40">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-status-velocity-text text-base shrink-0">schedule</span>
                                  <span className="text-xs sm:text-sm text-on-surface truncate">
                                    Bidirectional sync across CRM & ops
                                  </span>
                                </div>
                                <span className="material-symbols-outlined text-status-velocity-text text-base shrink-0">
                                  check
                                </span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-bg shadow-sm border border-border-slate-subtle/40">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-status-velocity-text text-base shrink-0">description</span>
                                  <span className="text-xs sm:text-sm text-on-surface truncate">
                                    Contextual reports generated hourly
                                  </span>
                                </div>
                                <span className="material-symbols-outlined text-status-velocity-text text-base shrink-0">
                                  check
                                </span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-bg shadow-sm border border-border-slate-subtle/40">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="material-symbols-outlined text-status-velocity-text text-base shrink-0">trending_up</span>
                                  <span className="text-xs sm:text-sm text-on-surface truncate">
                                    Team focused 100% on high leverage growth
                                  </span>
                                </div>
                                <span className="material-symbols-outlined text-status-velocity-text text-base shrink-0">
                                  check
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-2 p-3 rounded-lg bg-status-velocity-bg text-status-velocity-text flex items-center justify-between border border-status-velocity-badge/80">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-status-velocity-badge flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-status-velocity-text text-base">speed</span>
                              </div>
                              <div className="leading-tight">
                                <div className="text-sm font-bold">Hours saved</div>
                                <div className="text-xs opacity-90">every week across teams</div>
                              </div>
                            </div>
                            <div className="relative w-14 h-8 flex items-center justify-center">
                              <svg className="w-14 h-8 text-status-velocity-text overflow-visible" fill="none" viewBox="0 0 56 28">
                                <path
                                  d="M2 24L14 18L26 21L40 8L54 4"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2.5"
                                />
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
          <section className="w-full bg-surface-subtle py-8 sm:py-12 border-y border-border-slate-subtle/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-4 sm:gap-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-text-muted text-center">
                TRUSTED BY FORWARD-THINKING STARTUPS AND TEAMS
              </span>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 text-text-muted">
                <span className="text-lg sm:text-xl font-bold tracking-tight hover:text-on-surface transition-colors cursor-default">Razorpay</span>
                <span className="text-lg sm:text-xl font-extrabold tracking-widest hover:text-on-surface transition-colors cursor-default">OYO</span>
                <span className="text-lg sm:text-xl font-bold tracking-tight lowercase hover:text-on-surface transition-colors cursor-default">zepto</span>
                <span className="text-lg sm:text-xl font-semibold tracking-wide lowercase hover:text-on-surface transition-colors cursor-default">dunzo</span>
                <div className="flex items-center gap-1 text-lg sm:text-xl font-black tracking-tight hover:text-on-surface transition-colors cursor-default">
                  <span className="material-symbols-outlined text-lg">shield</span>
                  <span>CRED</span>
                </div>
                <span className="text-lg sm:text-xl font-semibold tracking-tight lowercase hover:text-on-surface transition-colors cursor-default">slice</span>
                <span className="text-lg sm:text-xl font-bold tracking-tight lowercase hover:text-on-surface transition-colors cursor-default">meesho</span>
                <span className="text-lg sm:text-xl font-bold tracking-wider lowercase hover:text-on-surface transition-colors cursor-default">rapido</span>
              </div>
            </div>
          </section>

          {/* 3. HOW IT WORKS */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-10 sm:space-y-12" id="how-it-works">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    HOW IT WORKS
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-status-velocity-bg text-status-velocity-text font-mono text-xs font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-status-velocity-text"></span>
                    PIPELINE ACTIVE
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight">
                  A simple, proven way to automate what matters.
                </h2>
                <p className="text-sm sm:text-base text-text-body leading-relaxed">
                  We take a product-first approach — understand your business, find the real opportunities, build the right solution, and help you see the impact.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  className="h-11 px-5 rounded-lg bg-surface-dark text-surface-bg text-xs sm:text-sm inline-flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-sm group whitespace-nowrap font-semibold"
                  href="#product-audit"
                >
                  <span>See Detailed Process</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute top-[52px] left-[6%] right-[6%] h-[3px] pointer-events-none z-0">
                <div className="absolute inset-0 bg-border-slate-subtle/80 rounded-full"></div>
                <svg className="absolute inset-0 w-full h-[6px] -top-[1.5px]" preserveAspectRatio="none">
                  <line stroke="url(#pipeGradReact2)" strokeWidth="3" x1="0" x2="100%" y1="3" y2="3"></line>
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
                <div className="bg-surface-bg rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-all border border-border-slate-subtle/80 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-electric-indigo-subtle flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface-bg transition-all shadow-xs">
                        <span className="material-symbols-outlined text-xl">search</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-mono text-xs text-primary font-semibold">01</span>
                        <span className="h-px w-4 bg-primary/40"></span>
                      </div>
                      <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">Understand</h3>
                    </div>
                  </div>
                  <p className="text-sm text-text-body leading-normal">We learn about your product, users, team and current workflows.</p>
                </div>

                <div className="bg-surface-bg rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-all border border-border-slate-subtle/80 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-electric-indigo-subtle flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface-bg transition-all shadow-xs">
                        <span className="material-symbols-outlined text-xl">query_stats</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-mono text-xs text-primary font-semibold">02</span>
                        <span className="h-px w-4 bg-primary/40"></span>
                      </div>
                      <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">Find Opportunities</h3>
                    </div>
                  </div>
                  <p className="text-sm text-text-body leading-normal">We identify <strong className="text-on-surface font-semibold">gaps</strong>, bottlenecks and high-impact automation opportunities.</p>
                </div>

                <div className="bg-surface-bg rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-all border border-border-slate-subtle/80 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-electric-indigo-subtle flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface-bg transition-all shadow-xs">
                        <span className="material-symbols-outlined text-xl">ballot</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-mono text-xs text-primary font-semibold">03</span>
                        <span className="h-px w-4 bg-primary/40"></span>
                      </div>
                      <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">Plan & Prioritize</h3>
                    </div>
                  </div>
                  <p className="text-sm text-text-body leading-normal">We recommend what to automate, estimate impact and create an implementation plan.</p>
                </div>

                <div className="bg-surface-bg rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-all border border-border-slate-subtle/80 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-electric-indigo-subtle flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface-bg transition-all shadow-xs">
                        <span className="material-symbols-outlined text-xl">inventory_2</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-mono text-xs text-primary font-semibold">04</span>
                        <span className="h-px w-4 bg-primary/40"></span>
                      </div>
                      <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">Build & Integrate</h3>
                    </div>
                  </div>
                  <p className="text-sm text-text-body leading-normal">We design, build and integrate the solution with your existing tools and product.</p>
                </div>

                <div className="bg-surface-bg rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-all border border-status-velocity-badge/80 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-status-velocity-text"></div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-status-velocity-bg flex items-center justify-center text-status-velocity-text group-hover:bg-status-velocity-text group-hover:text-surface-bg transition-all shadow-xs">
                        <span className="material-symbols-outlined text-xl">ssid_chart</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-status-velocity-text"></span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-mono text-xs text-status-velocity-text font-semibold">05</span>
                        <span className="h-px w-4 bg-status-velocity-text/40"></span>
                      </div>
                      <h3 className="text-lg font-bold text-on-surface group-hover:text-status-velocity-text transition-colors">Measure & Improve</h3>
                    </div>
                  </div>
                  <p className="text-sm text-text-body leading-normal">We track performance, refine workflows and ensure adoption across your team.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. PRODUCT & WORKFLOW AUDIT */}
          <section className="w-full bg-surface-subtle py-16 sm:py-24" id="product-audit">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    DEEP PRODUCT & WORKFLOW AUDIT
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight">
                    We look at your entire workflow — not just one task.
                  </h2>
                  <p className="text-sm sm:text-base text-text-body leading-relaxed">
                    Most automations fail because they solve isolated problems without considering the bigger picture. We evaluate your product, team, and operations together to find high-impact opportunities that move the needle.
                  </p>

                  <div className="space-y-3 pt-2">
                    {[
                      "End-to-end product architecture and data flows",
                      "Operational bottlenecks and repetitive tasks across teams",
                      "Integration points with current tools and databases",
                      "Prioritized roadmap with estimated impact and timeline",
                    ].map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-status-velocity-bg text-status-velocity-text flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-xs">check</span>
                        </div>
                        <span className="text-sm text-on-surface font-medium">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a
                      className="h-11 px-6 rounded-lg bg-primary text-surface-bg text-xs sm:text-sm inline-flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-md group font-semibold"
                      href="#consultation"
                    >
                      <span>Request an Audit</span>
                      <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="relative bg-surface-bg rounded-xl p-5 sm:p-7 shadow-xl space-y-6 border border-border-slate-subtle/80 overflow-hidden">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border-slate-subtle/60">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-electric-indigo-subtle flex items-center justify-center text-primary shrink-0">
                          <span className="material-symbols-outlined text-lg">lab_profile</span>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-on-surface">Product Analysis Report</h3>
                          <div className="flex items-center gap-1.5 font-mono text-xs text-status-velocity-text">
                            <span className="w-1.5 h-1.5 rounded-full bg-status-velocity-text"></span>
                            LIVE SCANNING: INGESTED 42 WORKFLOW NODES
                          </div>
                        </div>
                      </div>

                      {/* Tab Pills with horizontal scroll on small mobile */}
                      <div className="flex items-center gap-1 p-1 bg-surface-container rounded-lg text-text-muted text-xs overflow-x-auto max-w-full">
                        {["overview", "gaps", "opportunities", "impact"].map((tabKey) => (
                          <button
                            key={tabKey}
                            onClick={() => setActiveTab(tabKey)}
                            className={`px-2.5 py-1 rounded transition-all capitalize whitespace-nowrap shrink-0 text-xs ${
                              activeTab === tabKey
                                ? "bg-surface-bg text-on-surface font-semibold shadow-xs flex items-center gap-1"
                                : "hover:text-on-surface"
                            }`}
                          >
                            {activeTab === tabKey && (
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            )}
                            {tabKey}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
                      <div className="md:col-span-7 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                            {tabData[activeTab]?.title}
                          </span>
                          <span className="font-mono text-xs text-primary">
                            SYNCING 60fps
                          </span>
                        </div>

                        {tabData[activeTab]?.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-lg bg-surface-subtle flex items-center justify-between gap-2 shadow-sm border border-transparent hover:border-primary/30 transition-all"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="material-symbols-outlined text-status-velocity-text text-base shrink-0">
                                check_circle
                              </span>
                              <span className="text-xs sm:text-sm text-on-surface truncate">
                                {item.text}
                              </span>
                            </div>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full ${item.tagClass} font-semibold whitespace-nowrap shrink-0`}
                            >
                              {item.tag}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="md:col-span-5 flex flex-col justify-center p-5 sm:p-6 rounded-xl bg-electric-indigo-subtle text-center space-y-3 border border-primary/20 relative overflow-hidden">
                        <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary/10 rounded-full blur-xl pointer-events-none"></div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                          Estimated Impact
                        </span>
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight font-mono">
                          60–70%
                        </div>
                        <p className="text-xs sm:text-sm text-text-body font-medium">
                          reduction in manual work
                        </p>

                        <div className="flex items-end justify-center gap-2 h-12 pt-2">
                          <div className="w-3 bg-primary/30 rounded-t h-4"></div>
                          <div className="w-3 bg-primary/50 rounded-t h-6"></div>
                          <div className="w-3 bg-primary/70 rounded-t h-9"></div>
                          <div className="w-3 bg-primary/90 rounded-t h-11"></div>
                          <div className="w-3 bg-primary rounded-t h-12"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. COMMON USE CASES */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-10 sm:space-y-12" id="use-cases">
            <div className="text-center max-w-2xl mx-auto space-y-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                COMMON USE CASES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight">
                Where AI can create leverage in your business.
              </h2>
              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                These are common areas we find in product and operations teams. Your audit will uncover the specific opportunities for your business.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
                  className="p-4 sm:p-6 rounded-xl bg-surface-bg shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center space-y-2.5 group cursor-pointer border border-border-slate-subtle/60"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-electric-indigo-subtle flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface-bg transition-colors">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-on-surface">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </section>

          {/* 6. LEAD CAPTURE & CONSULTATION */}
          <section className="w-full bg-surface-subtle py-16 sm:py-24 border-t border-border-slate-subtle/60" id="consultation">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-6 space-y-5 sm:space-y-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    FREE CONSULTATION
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight">
                    Let&apos;s find your AI opportunities.
                  </h2>
                  <p className="text-sm sm:text-base text-text-body leading-relaxed">
                    A 30-minute consultation to understand your product, discuss your challenges and explore <strong className="text-on-surface font-semibold">high-impact</strong> automation opportunities.
                  </p>

                  <div className="space-y-3 pt-1">
                    {["No obligation", "Strategic discussion", "Actionable insights"].map((pt, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-status-velocity-bg text-status-velocity-text flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-sm">check</span>
                        </div>
                        <span className="text-sm text-on-surface font-medium">{pt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center gap-2.5 text-text-muted text-xs sm:text-sm">
                    <span className="material-symbols-outlined text-lg text-primary">calendar_month</span>
                    <span>Tell us about your business, we&apos;ll take it from here.</span>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="bg-surface-bg rounded-xl p-5 sm:p-8 shadow-xl space-y-5 border border-border-slate-subtle/80">
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-on-surface">Book a Free Consultation</h3>
                      <p className="text-xs sm:text-sm text-text-muted">Schedule a direct discovery session with our technical leads.</p>
                    </div>

                    <form className="space-y-4" onSubmit={handleFormSubmit}>
                      <div>
                        <label className="block text-xs font-semibold text-on-surface mb-1.5" htmlFor="name">
                          Name <span className="text-error">*</span>
                        </label>
                        <input
                          className="w-full h-11 px-3.5 rounded-lg bg-surface-subtle text-on-surface placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-bg shadow-sm border border-border-slate-subtle"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          required
                          type="text"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-on-surface mb-1.5" htmlFor="email">
                          Email <span className="text-error">*</span>
                        </label>
                        <input
                          className="w-full h-11 px-3.5 rounded-lg bg-surface-subtle text-on-surface placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-bg shadow-sm border border-border-slate-subtle"
                          id="email"
                          name="email"
                          placeholder="you@company.com"
                          required
                          type="email"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-on-surface mb-1.5" htmlFor="phone">
                          Phone Number <span className="text-error">*</span>
                        </label>
                        <input
                          className="w-full h-11 px-3.5 rounded-lg bg-surface-subtle text-on-surface placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-bg shadow-sm border border-border-slate-subtle"
                          id="phone"
                          name="phone"
                          placeholder="+1 (555) 000-0000"
                          required
                          type="tel"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-on-surface mb-1.5" htmlFor="message">
                          Message <span className="text-text-muted font-normal">(Optional)</span>
                        </label>
                        <textarea
                          className="w-full p-3.5 rounded-lg bg-surface-subtle text-on-surface placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-bg shadow-sm resize-none border border-border-slate-subtle"
                          id="message"
                          name="message"
                          placeholder="Briefly describe your business or what you'd like to automate..."
                          rows={3}
                        ></textarea>
                      </div>
                      <button
                        disabled={isSubmitting}
                        className="w-full h-12 rounded-lg bg-surface-dark text-surface-bg text-sm inline-flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-md group font-semibold"
                        type="submit"
                      >
                        <span>{isSubmitting ? "Submitting..." : "Book Free Consultation"}</span>
                        <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </button>
                    </form>

                    {formSuccess && (
                      <div className="p-4 rounded-lg bg-status-velocity-bg text-status-velocity-text text-center text-xs sm:text-sm font-semibold border border-status-velocity-badge">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col gap-10">
          <div className="bg-surface-dark rounded-xl p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 text-secondary-fixed">
                <span className="font-mono text-xs text-primary-fixed font-bold">//</span>
                <span className="text-xs uppercase tracking-wider text-primary-fixed font-semibold">High Velocity Automation</span>
              </div>
              <h3 className="text-xl sm:text-2xl text-surface-bg font-bold tracking-tight">Ready to eliminate internal workflow friction?</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Schedule an institutional bottleneck audit. Actionable architectural insights in 48 hours.</p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
              <a
                className="h-12 px-6 rounded-lg bg-surface-bg text-surface-dark text-xs sm:text-sm inline-flex items-center justify-center gap-2 hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors shadow-sm w-full md:w-auto font-semibold"
                data-path="book-an-audit"
                href="#consultation"
              >
                <span>Request Audit Spec</span>
                <span className="material-symbols-outlined text-base">terminal</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4">
            <div className="col-span-2 md:col-span-1 space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm text-primary-container font-bold">//</span>
                <span className="text-lg tracking-tight text-on-surface font-bold">Strafuse</span>
              </div>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">Architectural AI workflow audits and automated deployment engineering for enterprise ops leaders.</p>
              <div className="flex items-center pt-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full font-mono text-xs bg-status-velocity-bg text-status-velocity-text font-semibold">
                  SYSTEM: OPERATIONAL
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-on-surface font-bold block">Practices</span>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="text-on-surface-variant hover:text-on-surface transition-colors"><a data-path="audit" href="#product-audit">Bottleneck Audit</a></li>
                <li className="text-on-surface-variant hover:text-on-surface transition-colors"><a data-path="solutions" href="#how-it-works">Agent Scaffolding</a></li>
                <li className="text-on-surface-variant hover:text-on-surface transition-colors"><a data-path="features" href="#use-cases">Stack Modernization</a></li>
                <li className="text-on-surface-variant hover:text-on-surface transition-colors"><a data-path="solutions" href="#how-it-works">Pipeline Integration</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-on-surface font-bold block">Architecture</span>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="text-on-surface-variant hover:text-on-surface transition-colors"><a data-path="features" href="#product-audit">Enterprise LLM Governance</a></li>
                <li className="text-on-surface-variant hover:text-on-surface transition-colors"><a data-path="audit" href="#product-audit">Latency Profiling</a></li>
                <li className="text-on-surface-variant hover:text-on-surface transition-colors"><a data-path="pricing" href="#consultation">Engagement Tiers</a></li>
                <li className="text-on-surface-variant hover:text-on-surface transition-colors"><a data-path="solutions" href="#how-it-works">Case Audits</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-on-surface font-bold block">Inquiries</span>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">Direct line to principal automation architects.</p>
              <div className="font-mono text-xs sm:text-sm text-on-surface font-semibold pt-1">advisory@strafuse.internal</div>
            </div>
          </div>

          <div className="pt-6 border-t border-border-slate-subtle flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
            <div className="flex flex-wrap items-center gap-2 font-mono">
              <span>© 2025 Strafuse Systems Ltd.</span>
              <span>•</span>
              <span>Analytical Rigor Guaranteed</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
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
