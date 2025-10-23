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

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Calendar className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h2 className="text-4xl font-bold mb-6">Book a Meeting</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule a consultation with our experts to discuss your equipment needs, maintenance requirements, or any technical challenges you're facing. Our team is ready to provide tailored solutions for your business.
              </p>
              <Button size="lg" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">Schedule on Calendly</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Handshake className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h2 className="text-4xl font-bold mb-6">Become a Maintenance Partner</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Partner with us for comprehensive maintenance services and reliable spare parts delivery. We offer complete support for your heavy equipment fleet, ensuring minimal downtime and maximum productivity.
              </p>
              <p className="text-lg text-muted-foreground">
                Our maintenance partnership program includes scheduled servicing, emergency repairs, and priority access to spare parts inventory. Let us handle your equipment maintenance while you focus on your core operations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <ShieldCheck className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h2 className="text-4xl font-bold mb-6">Original German Spare Parts</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We supply only genuine German spare parts for all major heavy equipment brands. Our commitment to quality ensures your machinery operates at peak performance with parts that meet the highest manufacturing standards.
              </p>
              <p className="text-lg text-muted-foreground">
                Authentic German engineering guarantees durability, precision, and reliability. We maintain extensive inventory to ensure quick delivery and minimize equipment downtime for your operations.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
