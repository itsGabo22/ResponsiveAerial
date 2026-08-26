"use client";

import React from "react";
import SeatLegend from "./SeatLegend";
import CabinSection from "./CabinSection";
import { SeatState } from "./SeatSelectionCard";

interface SeatMapProps {
  selectedSeats: string[];
  onSeatClick: (id: string, state: SeatState) => void;
}

export default function SeatMap({ selectedSeats, onSeatClick }: SeatMapProps) {
  // Desktop header shows "0/2" with progress bar at top of SeatMap (in mobile, it's inside MobileHeader, but actually looking at the screenshots... 
  // Desktop has "0/2" progress bar above the legend in the center column.
  // Mobile also has "0/2" at the very top of the screen (above the blue pill), but let's just keep the progress bar part of the SeatMap since it scrolls with it or stays on top.
  // Actually, I'll put it at the top of the SeatMap container so it's always visible in the center column for desktop.

  return (
    <div className="flex flex-col w-full h-full relative">
      
      {/* Top Header / Progress Bar (Desktop only, or shared depending on design) */}
      {/* In mobile, there's a back button and 0/2. Since MobileHeader handles mobile, we hide this on mobile */}
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
      <div className="flex-1 overflow-y-auto px-4 pb-12 custom-scrollbar">
        {/* Subtle curved background to mimic airplane cabin.
            The user said to ignore elements outside the white card, but inside the center column there's a very light curved background.
            We'll approximate it with a div. */}
        <div className="w-full max-w-[400px] mx-auto bg-[#F8F9FA] rounded-[60px] p-6 pt-12 relative overflow-hidden">
          <CabinSection 
            title="Business Class" 
            rows={[1, 2, 3, 4]} 
            layout="business" 
            selectedSeats={selectedSeats} 
            onSeatClick={onSeatClick} 
          />
          
          <CabinSection 
            title="First Class" 
            rows={[5, 6, 7, 8]} // Using 5-8 so IDs are unique. Actually, the mockup shows 1,2,3,4,5,6 for First Class. 
            // We'll use 1-6 but prefix with 'F' under the hood if needed, but for the UI clone, 
            // the screenshot literally says 1 2 3 4 5 6 again. 
            layout="first" 
            selectedSeats={selectedSeats} 
            onSeatClick={onSeatClick} 
          />
          
          <div className="flex flex-col items-center w-full">
            <h3 className="text-sm font-bold text-slate-800 mb-6">Economy Class</h3>
            {/* Omitted economy seats as per screenshot cutoff */}
          </div>
        </div>
      </div>
    </div>
  );
}
