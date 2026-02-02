import { MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background pt-24 pb-12 text-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          
          <div className="md:col-span-2 space-y-6">
            <a href="/" className="font-serif text-3xl font-bold tracking-tighter">
              Back Bay Chord
            </a>
            <p className="max-w-xs text-muted-foreground">
              Where the grind meets the groove. <br />
              Coffee house by day, live music venue by night.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Visit Us</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>142 Newbury Street,<br />Boston, MA 02116</span>
              </p>
              <p className="pt-2">hello@backbaychord.com</p>
              <p>+1 (617) 555-0198</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Hours</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Mon - Wed</span>
                <span>7am - 8pm</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Thu - Sat</span>
                <span>7am - 2am</span>
              </div>
              <div className="flex justify-between">
                <span>Sun</span>
                <span>8am - 6pm</span>
              </div>
            </div>
          </div>

        </div>
        
        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted-foreground md:flex-row">
          <p>&copy; 2024 Back Bay Chord. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
