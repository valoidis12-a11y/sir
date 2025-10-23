import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Briefcase, GraduationCap } from "lucide-react";

const Teams = () => {
  const teamMembers = [
    {
      name: "Ahmed Al Mansoori",
      role: "Operations Director",
      experience: "20+ years in heavy equipment management",
      specialization: "Fleet Management & Operations",
    },
    {
      name: "Mohammed Hassan",
      role: "Chief Technician",
      experience: "18+ years in equipment maintenance",
      specialization: "Hydraulic Systems & Engine Overhaul",
    },
    {
      name: "Khalid Rahman",
      role: "Service Manager",
      experience: "15+ years in customer service",
      specialization: "Client Relations & Service Delivery",
    },
    {
      name: "Ali Saeed",
      role: "Parts Department Head",
      experience: "12+ years in parts management",
      specialization: "Inventory & Supply Chain",
    },
    {
      name: "Omar Abdullah",
      role: "Senior Mechanic",
      experience: "16+ years in heavy machinery",
      specialization: "Excavators & Loaders",
    },
    {
      name: "Rashid Sultan",
      role: "Senior Mechanic",
      experience: "14+ years in construction equipment",
      specialization: "Cranes & Lifting Equipment",
    },
  ];

  const departments = [
    {
      icon: Users,
      title: "Technical Team",
      description: "Certified technicians with extensive experience in all types of heavy equipment",
      count: "25+",
    },
    {
      icon: Briefcase,
      title: "Management Team",
      description: "Experienced professionals managing operations, quality, and customer service",
      count: "8+",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Dedicated team ensuring every service meets our high standards",
      count: "5+",
    },
    {
      icon: GraduationCap,
      title: "Training Division",
      description: "Continuous training programs to keep our team updated with latest technologies",
      count: "3+",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Page Header */}
        <section className="bg-secondary text-secondary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-primary">Team</span></h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Meet the experts behind NextGen's success in heavy equipment maintenance
            </p>
          </div>
        </section>

        {/* Team Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our People Make the Difference</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At NextGen, our team is our greatest asset. We bring together certified technicians, 
                experienced managers, and dedicated support staff who are passionate about delivering 
                exceptional service. Every team member is committed to maintaining the highest standards 
                of quality and professionalism.
              </p>
            </div>

            {/* Departments */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {departments.map((dept, index) => {
                const Icon = dept.icon;
                return (
                  <Card key={index} className="border-2 hover:border-primary transition-all text-center">
                    <CardContent className="p-6">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">{dept.count}</div>
                      <h3 className="text-lg font-bold mb-2">{dept.title}</h3>
                      <p className="text-sm text-muted-foreground">{dept.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Key Team Members */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Key Team Members</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="border-2 hover:border-primary transition-all">
                    <CardContent className="p-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold text-primary">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                      <p className="text-primary text-center font-semibold mb-3">{member.role}</p>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">
                          <span className="font-semibold">Experience:</span> {member.experience}
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-semibold">Specialization:</span> {member.specialization}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-16 bg-muted/30 rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Certified Professionals</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                All our technicians are certified by leading equipment manufacturers and undergo 
                continuous training to stay updated with the latest technologies and repair techniques.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-background px-6 py-3 rounded-lg border-2 border-primary/20">
                  <span className="font-semibold">OEM Certified</span>
                </div>
                <div className="bg-background px-6 py-3 rounded-lg border-2 border-primary/20">
                  <span className="font-semibold">Safety Trained</span>
                </div>
                <div className="bg-background px-6 py-3 rounded-lg border-2 border-primary/20">
                  <span className="font-semibold">Technical Experts</span>
                </div>
                <div className="bg-background px-6 py-3 rounded-lg border-2 border-primary/20">
                  <span className="font-semibold">Quality Assured</span>
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

export default Teams;
