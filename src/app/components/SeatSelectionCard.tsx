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

export const translations = {
  en: {
    flightDetails: "Flight details",
    businessClass: "Business Class",
    firstClass: "First Class",
    economyClass: "Economy Class",
    seat: "Seat",
    price: "Price",
    date: "Date",
    flight: "Flight",
    yourSelection: "Your selection",
    selected: "Selected",
    pickUpTo: "Pick up to 2 seats\nfrom the cabin map",
    seats: "Seats",
    taxes: "Taxes & fees",
    none: "None",
    total: "Total",
    selectSeat: "Select a seat",
    available: "Available",
    taken: "Taken",
  },
  es: {
    flightDetails: "Detalles del vuelo",
    businessClass: "Clase Ejecutiva",
    firstClass: "Primera Clase",
    economyClass: "Clase Económica",
    seat: "Asiento",
    price: "Precio",
    date: "Fecha",
    flight: "Vuelo",
    yourSelection: "Tu selección",
    selected: "Seleccionado",
    pickUpTo: "Elige hasta 2 asientos\ndel mapa de cabina",
    seats: "Asientos",
    taxes: "Impuestos y cargos",
    none: "Ninguno",
    total: "Total",
    selectSeat: "Elegir asiento",
    available: "Disponible",
    taken: "Ocupado",
  }
};

export type Lang = "en" | "es";
export const LanguageContext = React.createContext<{ lang: Lang, t: typeof translations.en }>({
  lang: "en",
  t: translations.en
});

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

  // Pricing logic based on class
  const totalPrice = selectedSeats.reduce((acc, id) => {
    if (id.startsWith("first")) return acc + 600;
    if (id.startsWith("business")) return acc + 300;
    return acc + 100; // economy
  }, 0);

  const [lang, setLang] = useState<Lang>("en");
  const t = translations[lang];

  const toggleLang = () => setLang(l => l === "en" ? "es" : "en");

  return (
    <LanguageContext.Provider value={{ lang, t }}>
      <div className="w-full h-[100dvh] bg-white flex flex-col lg:grid lg:grid-cols-[320px_1fr_320px] relative">
        
        {/* Language Toggle Button */}
        <button 
          onClick={toggleLang}
          className="absolute z-50 top-4 right-4 lg:bottom-4 lg:top-auto lg:left-4 lg:right-auto bg-orange-500 text-white font-bold text-xs px-3 py-1.5 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
        >
          {lang === "en" ? "ESPAÑOL" : "ENGLISH"}
        </button>

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
    </LanguageContext.Provider>
  );
}
