"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "./SeatSelectionCard";

interface DesktopLeftColumnProps {
  selectedSeats?: string[];
  totalPrice?: number;
}

export default function DesktopLeftColumn({ selectedSeats = [], totalPrice = 0 }: DesktopLeftColumnProps) {
  const { t } = useContext(LanguageContext);
  
  const formatSeat = (id: string) => {
    if (!id) return "—";
    const parts = id.split('-');
    return parts[parts.length - 1]; // e.g. "1A"
  };

  const seat1 = formatSeat(selectedSeats[0]);
  const seat2 = formatSeat(selectedSeats[1]);

  const getClassName = () => {
    if (selectedSeats.length === 0) return t.businessClass;
    const firstSeat = selectedSeats[0];
    if (firstSeat.startsWith("first")) return t.firstClass;
    if (firstSeat.startsWith("business")) return t.businessClass;
    return t.economyClass;
  };
  const displayClass = getClassName();

  return (
    <div className="hidden lg:flex flex-col p-8 lg:p-12 shrink-0">
      <div className="flex items-center gap-3 mb-12 text-slate-500">
        <button className="w-8 h-8 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-sm transition-colors">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <span className="text-sm font-medium">{t.flightDetails}</span>
      </div>

      {/* Selected Seat Info Box */}
      <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-5 mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-[#FDF7F5] flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-[2px] bg-orange-400"></div>
          </div>
          <span className="font-bold text-slate-800 text-sm leading-tight whitespace-pre-line">
            {displayClass.replace(" ", "\n")}
          </span>
        </div>
        
        <div className="flex gap-8 mb-6 text-slate-800 font-bold">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-slate-400 font-medium">{t.seat}</span>
            <span className="text-sm">{seat1}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-slate-400 font-medium">{t.seat}</span>
            <span className="text-sm">{seat2}</span>
          </div>
        </div>

        <div className="text-[13px] font-semibold">
          <span className="text-slate-400">{t.price}: </span>
          <span className="text-orange-500">${totalPrice}</span>
        </div>
      </div>

      {/* Flight Route Graphic */}
      <div className="flex flex-col">
        <div className="flex flex-col mb-2">
          <span className="text-[28px] font-bold text-slate-800 tracking-tight leading-none mb-1">MUC</span>
          <span className="text-xs text-slate-400 font-medium">Munich</span>
        </div>

        {/* SVG Arc Animation */}
        <div className="h-20 w-full relative mb-2">
          <svg viewBox="0 0 200 80" className="w-full h-full overflow-visible">
            {/* Background dashed line */}
            <path 
              d="M 10 70 Q 100 -20 190 70" 
              fill="none" 
              stroke="#fed7aa" 
              strokeWidth="2" 
              strokeDasharray="4 4" 
            />
            {/* Animated drawing line */}
            <motion.path
              d="M 10 70 Q 100 -20 190 70"
              fill="none"
              stroke="#fb923c"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            {/* Starting dot */}
            <circle cx="10" cy="70" r="3" fill="#fb923c" />

            {/* Airplane icon following the path */}
            {/* Since Framer Motion can't easily animate an element *along* a path without an external library, 
                we can approximate it by translating x and y, or simply animating the icon from left to right while translating Y in a curve.
                Alternatively, we just place the icon at the end (LXR) and animate its opacity/scale, or animate it linearly.
                Let's make it fly from left to right using a simple motion.g */}
            <motion.g
              initial={{ x: 10, y: 70, opacity: 0 }}
              animate={{ x: 190, y: 70, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              {/* Airplane SVG */}
              <svg x="-8" y="-8" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-45">
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 5-4 4-3-1-1 1 3 3 3 3 1-1-1-3 4-4 5 6l1.2-.7c.4-.2.7-.6.6-1.1z"/>
              </svg>
            </motion.g>
          </svg>
          <div className="absolute right-0 bottom-0 text-[10px] text-slate-300 font-medium">2h 10m</div>
        </div>

        <div className="flex flex-col mb-10">
          <span className="text-[28px] font-bold text-slate-800 tracking-tight leading-none mb-1">LXR</span>
          <span className="text-xs text-slate-400 font-medium">London</span>
        </div>
      </div>

      {/* Date and Flight No */}
      <div className="flex gap-4 mt-auto">
        <div className="flex-1 bg-slate-50 rounded-2xl p-4 flex flex-col gap-1">
          <span className="text-[10px] uppercase font-bold text-slate-400">{t.date}</span>
          <span className="text-xs font-bold text-slate-800">Dec 1, 2026</span>
        </div>
        <div className="flex-1 bg-slate-50 rounded-2xl p-4 flex flex-col gap-1">
          <span className="text-[10px] uppercase font-bold text-slate-400">{t.flight}</span>
          <span className="text-xs font-bold text-slate-800">No 25</span>
        </div>
      </div>
    </div>
  );
}
