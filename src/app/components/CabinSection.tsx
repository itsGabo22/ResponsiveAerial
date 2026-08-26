"use client";

import React from "react";
import SeatRow from "./SeatRow";
import { SeatState } from "./SeatSelectionCard";

interface CabinSectionProps {
  title: string;
  rows: number[];
  layout: "business" | "first" | "economy";
  selectedSeats: string[];
  onSeatClick: (id: string, state: SeatState) => void;
}

export default function CabinSection({ title, rows, layout, selectedSeats, onSeatClick }: CabinSectionProps) {
  // A mock function to determine if a seat is taken or not based on its ID.
  // In a real app this would come from a backend.
  // For the UI clone, we'll just hardcode some as taken.
  const getSeatState = (id: string): SeatState => {
    if (selectedSeats.includes(id)) return "selected";
    
    // Hardcode some seats as taken to match the visual variety in the mockup
    const takenSeats = [
      "business-1C", "business-1D", "business-2A", "business-2C", "business-2D", "business-3B", "business-4A", "business-4B",
      "first-1A", "first-2C", "first-3A", "first-4B", "first-5D", "first-5E", "first-6D",
      "economy-1C", "economy-2A", "economy-2E", "economy-3B", "economy-4D"
    ];
    if (takenSeats.includes(id)) return "taken";
    
    return "available";
  };

  return (
    <div className="flex flex-col items-center mb-10 w-full">
      <h3 className="text-sm font-bold text-slate-800 mb-6">{title}</h3>
      <div className="flex flex-col w-full px-4">
        {rows.map(rowNum => {
          // Build the seats map for this row
          const cols = layout === "business" ? ["A", "B", "C", "D"] : ["A", "B", "C", "D", "E"];
          const rowSeats: Record<string, SeatState> = {};
          cols.forEach(col => {
            rowSeats[col] = getSeatState(`${layout}-${rowNum}${col}`);
          });

          return (
            <SeatRow 
              key={`${layout}-${rowNum}`}
              rowNum={rowNum}
              layout={layout}
              prefix={layout}
              seats={rowSeats}
              onSeatClick={onSeatClick}
            />
          );
        })}
      </div>
    </div>
  );
}
