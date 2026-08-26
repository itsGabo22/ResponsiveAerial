"use client";

import React, { useContext } from "react";
import { LanguageContext } from "./SeatSelectionCard";

interface MobileStickyFooterProps {
  totalPrice: number;
  hasSelection: boolean;
}

export default function MobileStickyFooter({ totalPrice, hasSelection }: MobileStickyFooterProps) {
  const { t } = useContext(LanguageContext);
  return (
    <div className="flex lg:hidden items-center justify-between p-6 border-t border-slate-100 bg-white shrink-0">
      <div className="flex flex-col w-[80px]">
        <span className="text-xs text-slate-400 font-medium pb-1">{t.total}</span>
        <span className="text-[28px] leading-none font-bold text-slate-800">${totalPrice}</span>
      </div>
      <button 
        className={`flex-1 ml-4 py-[18px] rounded-full font-bold transition-colors text-[16px] ${
          hasSelection 
            ? "bg-[#1f2937] text-white hover:bg-slate-700" 
            : "bg-[#E6E1DC] text-slate-400 cursor-not-allowed"
        }`}
      >
        {t.selectSeat}
      </button>
    </div>
  );
}
