"use client";

import React, { useState } from "react";
import MobileHeader from "./MobileHeader";
import MobileStickyFooter from "./MobileStickyFooter";
import DesktopLeftColumn from "./DesktopLeftColumn";
import DesktopRightColumn from "./DesktopRightColumn";
import SeatMap from "./SeatMap";

export type SeatState = "available" | "selected" | "taken";

export interface SeatData {
  id: string; // e.g., "1A"
  row: number;
  col: string;
  classType: "business" | "first" | "economy";
  state: SeatState;
  price: number;
}

export default function SeatSelectionCard() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatClick = (seatId: string, currentState: SeatState) => {
    if (currentState === "taken") return;

    if (currentState === "selected") {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
      return;
    }

    if (currentState === "available") {
      if (selectedSeats.length >= 2) {
        // Cap at 2 seats. Could replace the last one, or just alert/ignore.
        // Let's replace the oldest one for better UX, or just ignore.
        return; 
      }
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  // Mock pricing logic
  const totalPrice = selectedSeats.length * 150; // $150 per seat

  return (
    <div className="w-full h-screen bg-white flex flex-col lg:grid lg:grid-cols-[320px_1fr_320px]">
      
      {/* Mobile Header (Hidden on lg) */}
      <MobileHeader selectedCount={selectedSeats.length} />

      {/* Desktop Left Column (Hidden on < lg) */}
      <DesktopLeftColumn selectedSeats={selectedSeats} totalPrice={totalPrice} />

      {/* Center Column: Seat Map (Scrollable) */}
      <div className="flex-1 lg:border-x border-slate-100 flex flex-col overflow-hidden">
        <SeatMap selectedSeats={selectedSeats} onSeatClick={handleSeatClick} />
      </div>

      {/* Desktop Right Column (Hidden on < lg) */}
      <DesktopRightColumn selectedSeats={selectedSeats} totalPrice={totalPrice} />

      {/* Mobile Sticky Footer (Hidden on lg) */}
      <MobileStickyFooter totalPrice={totalPrice} hasSelection={selectedSeats.length > 0} />
      
    </div>
  );
}
