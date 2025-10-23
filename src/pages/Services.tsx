import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Cog, Package, Clock, Truck, Headphones, Settings, Shield, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Equipment Maintenance",
      description: "Comprehensive preventive maintenance programs designed to keep your equipment running at peak performance. Our scheduled maintenance includes thorough inspections, fluid changes, filter replacements, and system checks.",
      features: ["Regular inspections", "Scheduled servicing", "Performance optimization", "Preventive care"],
    },
    {
      icon: Cog,
      title: "Repair & Overhaul",
      description: "Expert repair services for all types of heavy machinery. From minor repairs to complete engine overhauls, our certified technicians handle it all with precision and care.",
      features: ["Engine overhaul", "Hydraulic repairs", "Transmission service", "Component replacement"],
    },
    {
      icon: Package,
      title: "Parts Supply",
      description: "Access to genuine OEM parts and high-quality aftermarket alternatives. We maintain a comprehensive inventory to ensure quick turnaround times for your repairs.",
      features: ["Genuine OEM parts", "Quality aftermarket options", "Fast delivery", "Warranty coverage"],
    },
    {
      icon: Clock,
      title: "Emergency Services",
      description: "24/7 emergency response team ready to assist you. Minimize downtime with our rapid response and on-site repair capabilities for urgent situations.",
      features: ["24/7 availability", "Rapid response", "On-site repairs", "Mobile service units"],
    },
    {
      icon: Truck,
      title: "Equipment Rental",
      description: "Wide selection of well-maintained heavy equipment available for rent. Perfect for short-term projects or when your equipment is under maintenance.",
      features: ["Various equipment types", "Flexible rental terms", "Fully maintained units", "Operator services"],
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Expert technical consultation and support for all your equipment needs. Our team provides guidance on maintenance schedules, equipment selection, and operational efficiency.",
      features: ["Expert consultation", "Training programs", "Documentation", "Remote diagnostics"],
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description: "Tailored maintenance programs designed to meet your specific operational requirements and budget constraints.",
      features: ["Custom packages", "Fleet management", "Cost optimization", "Performance tracking"],
    },
    {
      icon: Shield,
      title: "Warranty Services",
      description: "Comprehensive warranty coverage and support for all our services and parts. Peace of mind with every repair.",
      features: ["Service warranty", "Parts guarantee", "Quality assurance", "Claim support"],
    },
    {
      icon: Zap,
      title: "Performance Upgrades",
      description: "Upgrade your equipment with the latest technology and performance enhancements to improve efficiency and productivity.",
      features: ["Technology upgrades", "Efficiency improvements", "Safety enhancements", "System modernization"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Page Header */}
        <section className="bg-secondary text-secondary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-primary">Services</span></h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Comprehensive solutions for all your heavy equipment maintenance and repair needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
