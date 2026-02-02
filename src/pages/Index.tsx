import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventSchedule from "@/components/EventSchedule";
import MenuHighlight from "@/components/MenuHighlight";
import Footer from "@/components/Footer";

import LiveTicker from "@/components/LiveTicker";
const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <EventSchedule />
      <MenuHighlight />
      <Footer />
      <LiveTicker />
    </div>
  );
};

export default Index;