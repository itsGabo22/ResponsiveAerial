"use client";

import React from "react";

interface DesktopRightColumnProps {
  selectedSeats: string[];
  totalPrice: number;
}

export default function DesktopRightColumn({ selectedSeats, totalPrice }: DesktopRightColumnProps) {
  const hasSelection = selectedSeats.length > 0;
  
  return (
    <div className="hidden lg:flex flex-col p-8 shrink-0 w-[280px]">
      <h2 className="text-lg font-bold text-slate-800 mb-6">Your selection</h2>
      
      <div className="border border-dashed border-orange-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center text-sm text-slate-400 mb-auto">
        {hasSelection ? (
           <div className="flex flex-col items-center gap-2">
             <span className="text-orange-500 font-bold text-lg">
               {selectedSeats.join(", ")}
             </span>
             <span>Selected</span>
           </div>
        ) : (
          <span>Pick up to 2 seats<br/>from the cabin map</span>
        )}
      </div>

      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between text-sm font-medium">
            <span className="text-slate-400">Seats</span>
            <span className="text-slate-800">{hasSelection ? selectedSeats.join(", ") : "None"}</span>
          </div>
          <div className="flex justify-between text-sm font-medium">
            <span className="text-slate-400">Taxes & fees</span>
            <span className="text-slate-800">$0</span>
          </div>
        </div>
        
        <div className="h-[1px] w-full bg-slate-100"></div>

        <div className="flex justify-between items-end mb-6">
          <span className="text-sm font-medium text-slate-400">Total</span>
          <span className="text-3xl font-bold text-slate-800">${totalPrice}</span>
        </div>

        <button 
          className={`w-full py-4 rounded-full font-medium transition-colors ${
            hasSelection 
              ? "bg-slate-800 text-white hover:bg-slate-700" 
              : "bg-[#E6E1DC] text-slate-400 cursor-not-allowed"
          }`}
        >
          Select a seat
        </button>
      </div>
    </div>
  );
}
