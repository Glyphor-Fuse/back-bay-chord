import { Star, Clock } from 'lucide-react';

export default function LiveTicker() {
  return (
    <div className="w-full bg-secondary/10 border-y border-white/10 py-3 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        
        {/* NOW PLAYING INDICATOR */}
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
          </span>
          <span className="text-xs font-bold tracking-widest text-red-500 uppercase">Now Playing</span>
        </div>

        {/* SCROLLING TEXT (Simulated Ticker) */}
        <div className="hidden md:flex flex-1 mx-8 overflow-hidden relative h-6 items-center">
          <div className="absolute w-full whitespace-nowrap animate-slide-left text-sm font-medium text-muted-foreground">
            <span className="mx-4">The Jazz Collective (Live Set)</span>
            <span className="mx-4 text-primary">•</span>
            <span className="mx-4">Next: Midnight Acoustic Session @ 10PM</span>
            <span className="mx-4 text-primary">•</span>
            <span className="mx-4">Happy Hour: 50% off Espresso Martinis until 8PM</span>
          </div>
        </div>

        {/* SHORT INFO */}
        <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>Open til 2AM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
