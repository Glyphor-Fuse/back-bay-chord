import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background text-foreground">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-stage.jpg" 
          alt="Dimly lit stage with microphone" 
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl space-y-6">
          <span className="inline-block border-l-2 border-primary pl-4 text-sm font-medium tracking-[0.2em] text-primary uppercase">
            Est. 2024 • Back Bay, Boston
          </span>
          <h1 className="font-serif text-6xl font-medium leading-tight tracking-tight md:text-8xl lg:text-9xl">
            Brewed <br />
            <span className="text-muted-foreground italic">for the</span> <br />
            Soul.
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
            A sanctuary for the audiophile and the caffeine purist. 
            Experience the intersection of high-fidelity sound and single-origin craft.
          </p>
          <div className="flex flex-col gap-4 pt-8 sm:flex-row">
            <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
              View Tonight's Lineup
            </Button>
            <Button variant="outline" size="lg" className="group rounded-none border-white/20 bg-transparent text-white hover:border-white hover:bg-white/5">
              Explore The Menu
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
}
