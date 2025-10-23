import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Dubai Marina Construction Site",
      category: "Commercial",
      description: "Complete maintenance and repair services for a fleet of 25 excavators and loaders during the Dubai Marina extension project.",
      scope: "Equipment fleet management, preventive maintenance, emergency repairs",
      duration: "18 months",
      status: "Completed",
    },
    {
      title: "Abu Dhabi Highway Development",
      category: "Infrastructure",
      description: "Provided round-the-clock maintenance support for heavy machinery involved in the Abu Dhabi highway expansion project.",
      scope: "24/7 on-site support, parts supply, technical consultation",
      duration: "24 months",
      status: "Completed",
    },
    {
      title: "Sharjah Industrial Complex",
      category: "Industrial",
      description: "Comprehensive overhaul and upgrade of aging construction equipment for a major industrial facility development.",
      scope: "Engine overhaul, hydraulic system upgrades, safety enhancements",
      duration: "12 months",
      status: "Completed",
    },
    {
      title: "Ajman Residential Development",
      category: "Residential",
      description: "Equipment rental and maintenance services for a large-scale residential construction project.",
      scope: "Equipment rental, maintenance, operator training",
      duration: "15 months",
      status: "Completed",
    },
    {
      title: "RAK Mining Operations",
      category: "Mining",
      description: "Specialized maintenance and repair services for heavy mining equipment in the RAK quarry operations.",
      scope: "Heavy-duty repairs, parts supply, performance optimization",
      duration: "Ongoing",
      status: "Active",
    },
    {
      title: "Fujairah Port Expansion",
      category: "Maritime",
      description: "Maintenance support for cranes and heavy lifting equipment during the port expansion project.",
      scope: "Crane maintenance, hydraulic repairs, emergency support",
      duration: "20 months",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Page Header */}
        <section className="bg-secondary text-secondary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-primary">Projects</span></h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Delivering excellence across diverse construction and industrial projects in UAE
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant={project.status === "Active" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-semibold">Scope: </span>
                        <span className="text-muted-foreground">{project.scope}</span>
                      </div>
                      <div>
                        <span className="font-semibold">Duration: </span>
                        <span className="text-muted-foreground">{project.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-16 bg-muted/30 rounded-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Track Record</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
                  <div className="text-lg font-semibold mb-1">Projects Completed</div>
                  <p className="text-sm text-muted-foreground">Across UAE</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2000+</div>
                  <div className="text-lg font-semibold mb-1">Equipment Serviced</div>
                  <p className="text-sm text-muted-foreground">All major brands</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
                  <div className="text-lg font-semibold mb-1">Client Satisfaction</div>
                  <p className="text-sm text-muted-foreground">Repeat customers</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-lg font-semibold mb-1">Support Available</div>
                  <p className="text-sm text-muted-foreground">Emergency response</p>
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

export default Projects;
