import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  title: "Strafuse // AI Workflow Audit & Automation Consultancy",
  description: "Turn manual work into your biggest advantage. We audit your product and operations, find what's slowing you down, and build AI automation.",
};

const tailwindConfigScript = `
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "on-primary-fixed": "#0f0069",
          "status-velocity-badge": "#D1FAE5",
          "surface-bright": "#faf9ff",
          "border-slate-subtle": "#E2E8F0",
          "status-velocity-bg": "#ECFDF5",
          "surface-bg": "#FFFFFF",
          "primary-fixed": "#e2dfff",
          "surface-dark": "#090D16",
          "surface": "#faf9ff",
          "surface-dark-card": "#0F172A",
          "status-friction-bg": "#FFF1F2",
          "secondary-fixed-dim": "#adc6ff",
          "on-error-container": "#93000a",
          "inverse-primary": "#c3c0ff",
          "secondary-fixed": "#d8e2ff",
          "on-background": "#181b25",
          "surface-container": "#ebedfb",
          "inverse-on-surface": "#eef0fe",
          "status-friction-text": "#E11D48",
          "on-tertiary": "#ffffff",
          "secondary": "#0058be",
          "outline-variant": "#c7c4d8",
          "text-body": "#334155",
          "surface-container-highest": "#dfe2ef",
          "primary-fixed-dim": "#c3c0ff",
          "on-secondary-fixed": "#001a42",
          "inverse-surface": "#2c303a",
          "surface-subtle": "#F8FAFC",
          "on-secondary": "#ffffff",
          "background": "#faf9ff",
          "tertiary-container": "#006e4b",
          "on-tertiary-fixed-variant": "#005236",
          "on-tertiary-fixed": "#002113",
          "surface-tint": "#4d44e3",
          "primary-container": "#4f46e5",
          "secondary-container": "#2170e4",
          "border-slate-dark": "#1E293B",
          "on-secondary-fixed-variant": "#004395",
          "on-primary-fixed-variant": "#3323cc",
          "border-slate-medium": "#CBD5E1",
          "on-secondary-container": "#fefcff",
          "status-friction-badge": "#FFE4E6",
          "surface-dim": "#d7d9e7",
          "surface-container-low": "#f1f3ff",
          "surface-container-lowest": "#ffffff",
          "electric-indigo-subtle": "#EEF2FF",
          "error-container": "#ffdad6",
          "on-error": "#ffffff",
          "surface-variant": "#dfe2ef",
          "outline": "#777587",
          "on-primary-container": "#dad7ff",
          "surface-container-high": "#e5e8f5",
          "on-tertiary-container": "#67f4b7",
          "tertiary-fixed": "#6ffbbe",
          "text-muted": "#64748B",
          "tertiary": "#005338",
          "status-velocity-text": "#059669",
          "tertiary-fixed-dim": "#4edea3",
          "error": "#ba1a1a",
          "on-surface": "#181b25",
          "on-primary": "#ffffff",
          "primary": "#3525cd",
          "on-surface-variant": "#464555"
        },
        borderRadius: {
          DEFAULT: "0.25rem",
          lg: "0.5rem",
          xl: "0.75rem",
          full: "9999px"
        },
        spacing: {
          "space-2xl": "4rem",
          "space-md": "1rem",
          "margin-mobile": "1.25rem",
          "margin-desktop": "5rem",
          "space-sm": "0.5rem",
          "space-xl": "2.5rem",
          margin: "2rem",
          "space-xs": "0.25rem",
          gutter: "1.5rem",
          "gutter-sm": "1rem",
          "space-lg": "1.5rem",
          "space-3xl": "6rem"
        },
        fontFamily: {
          "body-md": ["Plus Jakarta Sans"],
          "label-badge": ["Plus Jakarta Sans"],
          "headline-xl": ["Plus Jakarta Sans"],
          "body-lg": ["Plus Jakarta Sans"],
          "label-eyebrow": ["Plus Jakarta Sans"],
          "body-sm": ["Plus Jakarta Sans"],
          "headline-xl-mobile": ["Plus Jakarta Sans"],
          "display-hero": ["Plus Jakarta Sans"],
          "display-hero-mobile": ["Plus Jakarta Sans"],
          "code-stat": ["JetBrains Mono"],
          "headline-lg": ["Plus Jakarta Sans"],
          "headline-md": ["Plus Jakarta Sans"]
        },
        fontSize: {
          "body-md": ["15px", { lineHeight: "24px", letterSpacing: "-0.005em", fontWeight: "400" }],
          "label-badge": ["12px", { lineHeight: "16px", letterSpacing: "0.01em", fontWeight: "600" }],
          "headline-xl": ["40px", { lineHeight: "48px", letterSpacing: "-0.025em", fontWeight: "700" }],
          "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "400" }],
          "label-eyebrow": ["11px", { lineHeight: "16px", letterSpacing: "0.08em", fontWeight: "700" }],
          "body-sm": ["13px", { lineHeight: "20px", fontWeight: "400" }],
          "headline-xl-mobile": ["30px", { lineHeight: "38px", letterSpacing: "-0.02em", fontWeight: "700" }],
          "display-hero": ["56px", { lineHeight: "64px", letterSpacing: "-0.03em", fontWeight: "800" }],
          "display-hero-mobile": ["38px", { lineHeight: "44px", letterSpacing: "-0.025em", fontWeight: "800" }],
          "code-stat": ["14px", { lineHeight: "18px", letterSpacing: "-0.02em", fontWeight: "600" }],
          "headline-lg": ["28px", { lineHeight: "36px", letterSpacing: "-0.02em", fontWeight: "700" }],
          "headline-md": ["20px", { lineHeight: "28px", letterSpacing: "-0.015em", fontWeight: "600" }]
        }
      }
    }
  };
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        
        {/* Tailwind CDN & Complete Runtime Configuration */}
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" async={false}></script>
        <script
          id="tailwind-config"
          dangerouslySetInnerHTML={{ __html: tailwindConfigScript }}
        ></script>
      </head>
      <body className="bg-surface font-body-md text-body antialiased min-h-screen flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
