import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/90 backdrop-blur-md border-white/10 py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        <a href="/" className="text-2xl font-serif font-bold text-white tracking-tighter z-50">
          BBC.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Events", "Menu", "Gallery", "About", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/80 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <Button size="sm" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
            Book Table
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={cn(
          "fixed inset-0 bg-background flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
           {["Events", "Menu", "Gallery", "About", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-serif text-3xl text-white hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>

      </div>
    </header>
  );
}
