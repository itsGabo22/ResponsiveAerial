"use client";

import React, { useContext } from "react";
import SeatLegend from "./SeatLegend";
import CabinSection from "./CabinSection";
import { SeatState, LanguageContext } from "./SeatSelectionCard";

interface SeatMapProps {
  selectedSeats: string[];
  onSeatClick: (id: string, state: SeatState) => void;
}

export default function SeatMap({ selectedSeats, onSeatClick }: SeatMapProps) {
  const { t } = useContext(LanguageContext);
  return (
    <div className="flex flex-col w-full h-full relative min-h-0">
      
      {/* Top Header / Progress Bar */}
      <div className="hidden lg:flex flex-col items-center justify-center py-6 shrink-0">
        <span className="text-xs font-semibold text-slate-500 mb-2">{selectedSeats.length}/2</span>
        <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-slate-300 transition-all" 
            style={{ width: `${(selectedSeats.length / 2) * 100}%` }}
          ></div>
        </div>
      </div>

      <SeatLegend />

      {/* Scrollable Map Area */}
      <div className="flex-1 min-h-0 overflow-y-auto px-4 pb-12 custom-scrollbar">
        {/* Subtle curved background to mimic airplane cabin. */}
        <div className="w-full max-w-[400px] mx-auto bg-[#F8F9FA] rounded-t-[200px] rounded-b-[60px] p-6 pt-16 relative overflow-hidden">
          <CabinSection 
            title={t.businessClass} 
            rows={[1, 2, 3, 4]} 
            layout="business" 
            selectedSeats={selectedSeats} 
            onSeatClick={onSeatClick} 
          />
          
          <CabinSection 
            title={t.firstClass} 
            rows={[5, 6, 7, 8]} 
            layout="first" 
            selectedSeats={selectedSeats} 
            onSeatClick={onSeatClick} 
          />
          
          <CabinSection 
            title={t.economyClass} 
            rows={[9, 10, 11, 12, 13]} 
            layout="economy" 
            selectedSeats={selectedSeats} 
            onSeatClick={onSeatClick} 
          />
        </div>
      </div>
    </div>
  );
}
