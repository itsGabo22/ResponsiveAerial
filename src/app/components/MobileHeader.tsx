"use client";

import React from "react";
import { motion } from "framer-motion";

interface MobileHeaderProps {
  selectedCount: number;
}

export default function MobileHeader({ selectedCount }: MobileHeaderProps) {
  return (
    <div className="flex lg:hidden flex-col p-4 pb-2 shrink-0">
      <div className="flex items-center justify-between mb-4 text-slate-800">
        <button className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-sm font-medium">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <span className="text-[13px] font-bold text-slate-800">{selectedCount}/2</span>
        <button className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-sm font-medium">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </button>
      </div>

      <div className="bg-[#7A93B4] rounded-[24px] p-5 text-white flex items-center justify-between relative shadow-sm">
        <div className="flex flex-col">
          <span className="text-[28px] font-bold leading-none mb-1">MUC</span>
          <span className="text-[11px] text-white/70 font-medium">Munich</span>
        </div>
        
        {/* Route Line */}
        <div className="flex-1 mx-4 flex items-center relative h-6">
          <div className="w-full h-[1px] border-t border-dashed border-white/30 absolute top-1/2 -translate-y-1/2"></div>
          
          <motion.div 
            className="absolute top-1/2 -translate-y-1/2 bg-[#7A93B4] px-1"
            initial={{ left: "0%" }}
            animate={{ left: "50%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{ x: "-50%" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-45">
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 5-4 4-3-1-1 1 3 3 3 3 1-1-1-3 4-4 5 6l1.2-.7c.4-.2.7-.6.6-1.1z"/>
            </svg>
          </motion.div>
        </div>

        <div className="flex flex-col text-right">
          <span className="text-[28px] font-bold leading-none mb-1">LXR</span>
          <span className="text-[11px] text-white/70 font-medium">London</span>
        </div>
      </div>
    </div>
  );
}
