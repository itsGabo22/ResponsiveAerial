"use client";

import React from "react";

export default function SeatLegend() {
  return (
    <div className="flex items-center justify-center gap-6 py-6 mb-4 shrink-0">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded bg-white border border-orange-300"></div>
        <span className="text-xs font-medium text-slate-500">Available</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded bg-orange-500"></div>
        <span className="text-xs font-medium text-slate-500">Selected</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded bg-slate-200"></div>
        <span className="text-xs font-medium text-slate-500">Taken</span>
      </div>
    </div>
  );
}
