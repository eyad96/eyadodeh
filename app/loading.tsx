export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        {/* Ambient Glow */}
        <div className="absolute h-24 w-24 rounded-full bg-indigo-500/20 blur-xl animate-pulse" />
        
        {/* Spinner Rings */}
        <div className="h-16 w-16 rounded-full border-2 border-zinc-800 border-t-indigo-500 animate-spin" />
        
        {/* Glowing inner core */}
        <div className="absolute h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 animate-ping" />
      </div>
      <p className="mt-6 text-xs text-zinc-500 font-mono tracking-widest uppercase animate-pulse">
        Loading Assets...
      </p>
    </div>
  );
}
