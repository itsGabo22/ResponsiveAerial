"use client";

import React, { useContext } from "react";
import { LanguageContext } from "./SeatSelectionCard";

interface DesktopRightColumnProps {
  selectedSeats: string[];
  totalPrice: number;
}

export default function DesktopRightColumn({ selectedSeats, totalPrice }: DesktopRightColumnProps) {
  const { t } = useContext(LanguageContext);
  const formatSeat = (id: string) => id.split('-').pop();
  const formattedSeats = selectedSeats.map(formatSeat).join(", ");
  const hasSelection = selectedSeats.length > 0;
  
  return (
    <div className="hidden lg:flex flex-col p-8 lg:p-12 shrink-0">
      <h2 className="text-lg font-bold text-slate-800 mb-6">{t.yourSelection}</h2>
      
      <div className="border border-dashed border-orange-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center text-[13px] text-slate-400 mb-auto min-h-[120px]">
        {hasSelection ? (
           <div className="flex flex-col items-center gap-1">
             <span className="text-orange-500 font-bold text-lg">
               {formattedSeats}
             </span>
             <span className="font-medium">{t.selected}</span>
           </div>
        ) : (
          <span className="leading-relaxed whitespace-pre-line">{t.pickUpTo}</span>
        )}
      </div>

      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between text-[13px] font-semibold">
            <span className="text-slate-400">{t.seats}</span>
            <span className="text-slate-800">{hasSelection ? formattedSeats : t.none}</span>
          </div>
          <div className="flex justify-between text-[13px] font-semibold">
            <span className="text-slate-400">{t.taxes}</span>
            <span className="text-slate-800">$0</span>
          </div>
        </div>
        
        <div className="h-[1px] w-full bg-slate-100"></div>

        <div className="flex justify-between items-end mb-6">
          <span className="text-xs font-semibold text-slate-400 pb-1">{t.total}</span>
          <span className="text-[32px] font-bold text-slate-800 leading-none">${totalPrice}</span>
        </div>

        <button 
          className={`w-full py-4 rounded-full font-semibold transition-colors text-[15px] ${
            hasSelection 
              ? "bg-[#E6E1DC] hover:bg-[#D5D0CB] text-slate-800"
              : "bg-[#E6E1DC] text-slate-400 cursor-not-allowed"
          }`}
        >
          {t.selectSeat}
        </button>
      </div>
    </div>
  );
}
