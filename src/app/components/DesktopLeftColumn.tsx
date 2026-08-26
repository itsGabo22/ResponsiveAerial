"use client";

import React from "react";

export default function DesktopLeftColumn() {
  return (
    <div className="hidden lg:flex flex-col p-8 lg:p-12 shrink-0">
      <div className="flex items-center gap-3 mb-12 text-slate-500">
        <button className="w-8 h-8 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-sm transition-colors">
          &lt;
        </button>
        <span className="text-sm font-medium">Flight details</span>
      </div>

      {/* Selected Seat Info Box (dummy) */}
      <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-5 mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-6 rounded bg-[#FDF7F5] flex items-center justify-center">
            <div className="w-2 h-2 rounded bg-orange-400"></div>
          </div>
          <span className="font-semibold text-slate-800 text-sm leading-tight">
            Business<br />Class
          </span>
        </div>
        
        <div className="flex gap-8 mb-6 text-slate-800 font-bold">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-slate-400 font-medium">Seat</span>
            <span>—</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-slate-400 font-medium">Seat</span>
            <span>—</span>
          </div>
        </div>

        <div className="text-sm font-medium">
          <span className="text-slate-500">Price: </span>
          <span className="text-orange-500">$0</span>
        </div>
      </div>

      {/* Flight Route Graphic */}
      <div className="flex flex-col">
        <div className="flex flex-col mb-4">
          <span className="text-3xl font-bold text-slate-800 tracking-tight">MUC</span>
          <span className="text-sm text-slate-400">Munich</span>
        </div>

        {/* Arc map representation */}
        <div className="h-16 relative flex items-center mb-4">
          <div className="absolute w-full h-[150%] top-0 left-0 border-t-2 border-dashed border-orange-200 rounded-[100%]"></div>
          <div className="w-2 h-2 rounded-full bg-orange-400 absolute left-0 top-[20%]"></div>
          <div className="absolute right-0 top-[20%] flex flex-col items-end">
            <span className="text-orange-400 text-sm rotate-45 mb-1">✈️</span>
            <span className="text-[10px] text-slate-300 font-medium">2h 10m</span>
          </div>
        </div>

        <div className="flex flex-col mb-10">
          <span className="text-3xl font-bold text-slate-800 tracking-tight">LXR</span>
          <span className="text-sm text-slate-400">London</span>
        </div>
      </div>

      {/* Date and Flight No */}
      <div className="flex gap-4 mt-auto">
        <div className="flex-1 bg-slate-50 rounded-2xl p-4 flex flex-col gap-1">
          <span className="text-[10px] uppercase font-bold text-slate-400">Date</span>
          <span className="text-xs font-semibold text-slate-800">Dec 1, 2026</span>
        </div>
        <div className="flex-1 bg-slate-50 rounded-2xl p-4 flex flex-col gap-1">
          <span className="text-[10px] uppercase font-bold text-slate-400">Flight</span>
          <span className="text-xs font-semibold text-slate-800">No 25</span>
        </div>
      </div>
    </div>
  );
}
