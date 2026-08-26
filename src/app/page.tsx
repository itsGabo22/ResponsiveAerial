import SeatSelectionCard from "./components/SeatSelectionCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDF7F5] flex items-center justify-center p-4 lg:p-8">
      {/* Background blobs would go here if we were building them, but user said ignore them */}
      <SeatSelectionCard />
    </main>
  );
}
