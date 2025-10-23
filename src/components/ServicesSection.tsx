import { Wrench, Cog, Package, Clock, Truck, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "Equipment Maintenance",
    description: "Comprehensive preventive and corrective maintenance services for all heavy machinery.",
  },
  {
    icon: Cog,
    title: "Repair & Overhaul",
    description: "Expert repair and complete overhaul services to restore equipment to peak performance.",
  },
  {
    icon: Package,
    title: "Parts Supply",
    description: "Genuine and high-quality replacement parts for all major equipment brands.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Services",
    description: "Round-the-clock emergency support to minimize your equipment downtime.",
  },
  {
    icon: Truck,
    title: "Equipment Rental",
    description: "Wide range of heavy equipment available for short and long-term rental.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Expert technical consultation and support for all your equipment needs.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            WHAT WE <span className="text-primary">DO...</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for all your heavy equipment maintenance and repair needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
