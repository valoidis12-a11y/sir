import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Handshake, ShieldCheck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />

        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-background rounded-lg shadow-sm">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">Book Meeting</h3>
                <p className="text-muted-foreground mb-4">Schedule a consultation</p>
                <Button asChild>
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">Book Now</a>
                </Button>
              </div>

              <div className="text-center p-8 bg-background rounded-lg shadow-sm">
                <Handshake className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">Maintenance Partner</h3>
                <p className="text-muted-foreground">Partner with us for maintenance and spare parts delivery</p>
              </div>

              <div className="text-center p-8 bg-background rounded-lg shadow-sm">
                <ShieldCheck className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">Original German Parts</h3>
                <p className="text-muted-foreground">We supply genuine German spare parts</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
