"use client";

import React from "react";

interface MobileHeaderProps {
  selectedCount: number;
}

export default function MobileHeader({ selectedCount }: MobileHeaderProps) {
  return (
    <div className="flex lg:hidden flex-col p-6 pb-2 shrink-0">
      <div className="flex items-center justify-between mb-4 text-slate-800">
        <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-medium">
          &lt;
        </button>
        <span className="text-sm font-semibold">{selectedCount}/2</span>
        <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-medium">
          i
        </button>
      </div>

      <div className="bg-[#7A93B4] rounded-[24px] p-4 text-white flex items-center justify-between relative shadow-sm">
        <div className="flex flex-col">
          <span className="text-2xl font-bold">MUC</span>
          <span className="text-xs text-slate-200">Munich</span>
        </div>
        
        {/* Route Line */}
        <div className="flex-1 mx-4 flex items-center relative">
          <div className="w-full h-[1px] border-t border-dashed border-white/50 relative"></div>
          <span className="absolute left-1/2 -translate-x-1/2 bg-[#7A93B4] px-2 text-white">
            ✈️
          </span>
        </div>

        <div className="flex flex-col text-right">
          <span className="text-2xl font-bold">LXR</span>
          <span className="text-xs text-slate-200">London</span>
        </div>
      </div>
    </div>
  );
}
