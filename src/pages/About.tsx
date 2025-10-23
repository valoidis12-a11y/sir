import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide world-class maintenance and repair services that maximize equipment uptime and customer satisfaction.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the most trusted and preferred heavy equipment maintenance provider in the UAE and beyond.",
    },
    {
      icon: Award,
      title: "Quality Commitment",
      description: "We are committed to delivering excellence in every service, backed by certified technicians and genuine parts.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do. We build lasting relationships through reliable service.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Page Header */}
        <section className="bg-secondary text-secondary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-primary">Us</span></h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Leading the industry in heavy equipment maintenance and repair services
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                NextGen Heavy Equipments and Maintenance has been serving the UAE construction industry 
                for over 15 years. We specialize in the maintenance, repair, and overhaul of all types 
                of heavy construction machinery, including excavators, loaders, cranes, bulldozers, and more.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of highly skilled and certified technicians uses state-of-the-art diagnostic 
                equipment and genuine parts to ensure your machinery operates at peak efficiency. We pride 
                ourselves on our quick response times, transparent pricing, and commitment to excellence.
              </p>
            </div>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="border-2 hover:border-primary transition-all">
                    <CardContent className="p-8">
                      <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Why Choose Us */}
            <div className="bg-muted/30 rounded-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Choose NextGen?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">15+</div>
                  <div className="text-lg font-semibold mb-2">Years Experience</div>
                  <p className="text-muted-foreground">Industry expertise you can trust</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">500+</div>
                  <div className="text-lg font-semibold mb-2">Projects Completed</div>
                  <p className="text-muted-foreground">Proven track record of success</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-lg font-semibold mb-2">Support Available</div>
                  <p className="text-muted-foreground">Always here when you need us</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
