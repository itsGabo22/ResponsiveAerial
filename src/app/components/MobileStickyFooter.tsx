"use client";

import React from "react";

interface MobileStickyFooterProps {
  totalPrice: number;
  hasSelection: boolean;
}

export default function MobileStickyFooter({ totalPrice, hasSelection }: MobileStickyFooterProps) {
  return (
    <div className="flex lg:hidden items-center justify-between p-6 border-t border-slate-100 bg-white shrink-0">
      <div className="flex flex-col w-[80px]">
        <span className="text-xs text-slate-400 font-medium pb-1">Total</span>
        <span className="text-[28px] leading-none font-bold text-slate-800">${totalPrice}</span>
      </div>
      <button 
        className={`flex-1 ml-6 py-4 rounded-full font-semibold transition-colors text-[15px] ${
          hasSelection 
            ? "bg-slate-800 text-white hover:bg-slate-700" 
            : "bg-[#E6E1DC] text-slate-400 cursor-not-allowed"
        }`}
      >
        Select a seat
      </button>
    </div>
  );
}
