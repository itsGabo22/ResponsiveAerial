"use client";

import React from "react";
import { SeatState } from "./SeatSelectionCard";

interface SeatProps {
  id: string;
  state: SeatState;
  onClick: (id: string, currentState: SeatState) => void;
  label: string;
}

export default function Seat({ id, state, onClick, label }: SeatProps) {
  const baseStyles = "w-9 h-11 rounded-lg flex items-center justify-center text-xs font-semibold transition-all cursor-pointer";
  
  let stateStyles = "";
  if (state === "available") {
    stateStyles = "bg-white border-2 border-orange-200 text-orange-400 hover:border-orange-400";
  } else if (state === "selected") {
    stateStyles = "bg-orange-500 border-2 border-orange-500 text-white shadow-md shadow-orange-500/30";
  } else if (state === "taken") {
    stateStyles = "bg-slate-100 text-slate-300 cursor-not-allowed";
  }

  return (
    <button 
      onClick={() => onClick(id, state)}
      disabled={state === "taken"}
      className={`${baseStyles} ${stateStyles}`}
    >
      {label}
    </button>
  );
}
