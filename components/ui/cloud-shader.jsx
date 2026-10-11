"use client";
import React from "react";

export const CloudShader = ({ className = "", children }) => {
  return (
    <div 
      className={`w-full h-full overflow-hidden ${className}`}
      style={{ background: 'linear-gradient(180deg, #1E40AF 0%, #3B82F6 45%, #60A5FA 100%)' }}
    >
      {/* Soft Sun Radial Glow */}
      <div 
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40" 
        style={{ background: 'radial-gradient(circle, rgba(255, 243, 199, 0.9) 0%, rgba(255, 243, 199, 0) 70%)' }} 
      />

      {/* Cloud Layer 1 - Deep Background Drifting Clouds */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <svg className="absolute -top-12 left-[-10%] w-[700px] md:w-[950px]" viewBox="0 0 500 200">
          <path 
            fill="#FFFFFF" 
            fillOpacity="0.85" 
            d="M50 150 C 20 150, 0 130, 10 100 C 0 70, 40 40, 90 60 C 130 20, 210 20, 250 60 C 290 30, 360 40, 380 80 C 430 80, 460 110, 440 150 Z" 
          />
        </svg>
        <svg className="absolute top-20 right-[-10%] w-[750px] md:w-[1000px]" viewBox="0 0 500 200">
          <path 
            fill="#FFFFFF" 
            fillOpacity="0.75" 
            d="M50 150 C 20 150, 0 130, 10 100 C 0 70, 40 40, 90 60 C 130 20, 210 20, 250 60 C 290 30, 360 40, 380 80 C 430 80, 460 110, 440 150 Z" 
          />
        </svg>
      </div>

      {/* Cloud Layer 2 - Foreground Fluffy White Clouds */}
      <div className="absolute inset-0 pointer-events-none opacity-95">
        <svg className="absolute top-4 left-[5%] w-[600px] md:w-[850px]" viewBox="0 0 600 220">
          <path 
            fill="#FFFFFF" 
            fillOpacity="0.95" 
            d="M60 170 C 30 170, 10 150, 20 120 C 10 80, 60 50, 120 70 C 170 30, 270 30, 320 70 C 380 40, 460 50, 490 100 C 550 100, 580 140, 550 170 Z" 
          />
        </svg>
        <svg className="absolute bottom-[-20px] right-[2%] w-[750px] md:w-[1050px]" viewBox="0 0 600 220">
          <path 
            fill="#FFFFFF" 
            fillOpacity="0.92" 
            d="M60 170 C 30 170, 10 150, 20 120 C 10 80, 60 50, 120 70 C 170 30, 270 30, 320 70 C 380 40, 460 50, 490 100 C 550 100, 580 140, 550 170 Z" 
          />
        </svg>
      </div>

      {/* Bottom Sky Fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(96, 165, 250, 0.4), transparent)' }}
      />

      {children}
    </div>
  );
};
