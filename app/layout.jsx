import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  title: "Strafuse // AI Workflow Audit & Automation Consultancy",
  description: "Turn manual work into your biggest advantage. We audit your product and operations, find what's slowing you down, and build AI automation to save time, reduce costs, and unlock growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#faf9ff] font-['Plus_Jakarta_Sans',sans-serif] text-[#334155] antialiased min-h-screen flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
