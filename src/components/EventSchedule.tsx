import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LiveTicker from "./LiveTicker";

const EVENTS = [
  {
    date: "Tonight",
    time: "8:00 PM",
    artist: "The Velvet Trio",
    genre: "Modern Jazz",
    status: "Selling Fast",
    image: "/images/jazz-band.jpg"
  },
  {
    date: "Tonight",
    time: "10:30 PM",
    artist: "Sarah & The Strings",
    genre: "Indie Folk",
    status: "Available",
    image: "/images/folk-singer.jpg"
  },
  {
    date: "Tomorrow",
    time: "7:00 PM",
    artist: "Vinyl Night: 70s Soul",
    genre: "Listening Party",
    status: "Free Entry",
    image: "/images/vinyl.jpg"
  },
  {
    date: "Sat, Oct 24",
    time: "9:00 PM",
    artist: "Electric Blue",
    genre: "Neo-Soul",
    status: "Sold Out",
    image: "/images/neo-soul.jpg"
  }
];

export default function EventSchedule() {
  return (
    <section className="relative bg-background py-24 text-foreground">
      <div className="container px-4 md:px-6">
        
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              The Stage
            </h2>
            <p className="max-w-md text-muted-foreground">
              Intimate performances. World-class acoustics. 
              A curated lineup of local legends and touring acts.
            </p>
          </div>
          <Button variant="outline" className="w-fit rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View Full Calendar
          </Button>
        </div>

        {/* Signature Feature Insertion */}
        <div className="mb-12 border border-white/10">
           <LiveTicker />
        </div>

        <div className="flex flex-col">
          {EVENTS.map((event, idx) => (
            <div 
              key={idx}
              className="group relative flex flex-col gap-6 border-t border-white/10 py-8 transition-colors hover:bg-white/5 md:flex-row md:items-center"
            >
              {/* Date & Time */}
              <div className="w-32 flex-shrink-0">
                <p className="text-sm font-bold uppercase tracking-wider text-primary">{event.date}</p>
                <p className="text-lg text-muted-foreground">{event.time}</p>
              </div>

              {/* Artist Info */}
              <div className="flex-1 space-y-1">
                <h3 className="font-serif text-2xl md:text-3xl group-hover:text-primary transition-colors">
                  {event.artist}
                </h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">{event.genre}</p>
              </div>

              {/* Status & Action */}
              <div className="flex items-center justify-between gap-4 md:justify-end md:w-64">
                 <Badge variant="outline" className={`rounded-none border-white/20 px-3 py-1 ${event.status === 'Sold Out' ? 'text-red-500 border-red-900/30' : 'text-muted-foreground'}`}>
                    {event.status}
                 </Badge>
                 <Button size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity rounded-none bg-white text-black hover:bg-white/90">
                    Tickets
                 </Button>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>

      </div>
    </section>
  );
}
