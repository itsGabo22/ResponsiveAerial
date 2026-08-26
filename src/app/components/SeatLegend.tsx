"use client";

import React, { useContext } from "react";
import { LanguageContext } from "./SeatSelectionCard";

export default function SeatLegend() {
  const { t } = useContext(LanguageContext);
  return (
    <div className="flex items-center justify-center gap-6 py-6 mb-4 shrink-0">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded bg-white border border-orange-300"></div>
        <span className="text-xs font-medium text-slate-500">{t.available}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded bg-orange-500"></div>
        <span className="text-xs font-medium text-slate-500">{t.selected}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded bg-slate-200"></div>
        <span className="text-xs font-medium text-slate-500">{t.taken}</span>
      </div>
    </div>
  );
}
