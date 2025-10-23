import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import workshopImage from "@/assets/workshop.jpg";

const AboutSection = () => {
  const features = [
    "Certified and experienced technicians",
    "State-of-the-art workshop facilities",
    "Genuine parts and quality assurance",
    "24/7 emergency response",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Trusted Partner in <span className="text-primary">Heavy Equipment Solutions</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              NextGen Heavy Equipments and Maintenance is a leading provider of comprehensive maintenance, 
              repair, and support services for heavy construction machinery in the UAE. With years of experience 
              and a team of highly skilled technicians, we ensure your equipment operates at peak efficiency.
            </p>
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            <Link to="/about">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Learn More About Us
              </Button>
            </Link>
          </div>

          <div className="relative">
            <img 
              src={workshopImage} 
              alt="Workshop" 
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden md:block">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
