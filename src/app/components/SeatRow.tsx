"use client";

import React from "react";
import Seat from "./Seat";
import { SeatState } from "./SeatSelectionCard";

interface SeatData {
  col: string;
  state: SeatState;
}

interface SeatRowProps {
  rowNum: number;
  layout: "business" | "first"; // business: A B (gap) 1 (gap) C D, first: A B C (gap) 1 (gap) D E
  prefix?: string;
  seats: Record<string, SeatState>; // map col -> state
  onSeatClick: (id: string, state: SeatState) => void;
}

export default function SeatRow({ rowNum, layout, prefix = "", seats, onSeatClick }: SeatRowProps) {
  const renderSeat = (col: string) => {
    const id = prefix ? `${prefix}-${rowNum}${col}` : `${rowNum}${col}`;
    const state = seats[col] || "available";
    return <Seat key={id} id={id} label={col} state={state} onClick={onSeatClick} />;
  };

  return (
    <div className="flex items-center justify-center gap-6 mb-4">
      {/* Left Block */}
      <div className="flex gap-2">
        {renderSeat("A")}
        {renderSeat("B")}
        {layout === "first" && renderSeat("C")}
      </div>
      
      {/* Center Number */}
      <div className="w-6 flex justify-center">
        <span className="text-xs font-semibold text-slate-300">{rowNum}</span>
      </div>

      {/* Right Block */}
      <div className="flex gap-2">
        {layout === "business" && renderSeat("C")}
        {renderSeat("D")}
        {layout === "first" && renderSeat("E")}
      </div>
    </div>
  );
}
