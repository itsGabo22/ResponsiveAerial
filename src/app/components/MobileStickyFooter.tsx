"use client";

import React from "react";

interface MobileStickyFooterProps {
  totalPrice: number;
  hasSelection: boolean;
}

export default function MobileStickyFooter({ totalPrice, hasSelection }: MobileStickyFooterProps) {
  return (
    <div className="flex lg:hidden items-center justify-between p-6 border-t border-slate-100 bg-white shrink-0">
      <div className="flex flex-col">
        <span className="text-xs text-slate-500 font-medium">Total</span>
        <span className="text-2xl font-bold text-slate-800">${totalPrice}</span>
      </div>
      <button 
        className={`px-8 py-3 rounded-full font-medium transition-colors ${
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
