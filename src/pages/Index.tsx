import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Handshake, ShieldCheck, Clock, CheckCircle, Wrench, Package, TrendingUp, Award, Phone, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />

        <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Schedule Your Consultation Today</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Connect with our experienced technical team to discuss your heavy equipment requirements. Whether you need machinery servicing, spare parts, or technical guidance, our experts are ready to help.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Personalized Equipment Assessment</h3>
                      <p className="text-muted-foreground">Get expert evaluation of your machinery needs and requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Technical Solutions Planning</h3>
                      <p className="text-muted-foreground">Receive customized maintenance and service recommendations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Cost-Effective Strategies</h3>
                      <p className="text-muted-foreground">Optimize your equipment lifecycle and reduce operational costs</p>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://calendly.com/valoidis12" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Meeting on Calendly
                  </a>
                </Button>
              </div>
              <div className="grid gap-6">
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <Clock className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">Choose a time that works best for you with our easy-to-use booking system</p>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <Phone className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Virtual or In-Person</h3>
                    <p className="text-muted-foreground">Meet with our team via video call or schedule an on-site visit</p>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <Mail className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Follow-Up Support</h3>
                    <p className="text-muted-foreground">Receive detailed consultation notes and continued assistance</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
                  <Handshake className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Maintenance Partnership Program</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Join forces with industry leaders who trust us for complete heavy equipment maintenance and spare parts management
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <Card className="border-2 hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <Wrench className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-2xl font-semibold mb-3">Comprehensive Maintenance</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Scheduled preventive maintenance, emergency repairs, and complete overhaul services for your entire equipment fleet
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <Package className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-2xl font-semibold mb-3">Priority Parts Delivery</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Fast-track access to our spare parts inventory with guaranteed availability and express delivery options
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <Clock className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-2xl font-semibold mb-3">24/7 Technical Support</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Round-the-clock technical assistance and emergency response team for critical equipment issues
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <TrendingUp className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-2xl font-semibold mb-3">Performance Monitoring</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Advanced diagnostics and regular equipment performance tracking to maximize efficiency and lifespan
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <CheckCircle className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-2xl font-semibold mb-3">Cost Optimization</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Reduce total cost of ownership with preventive strategies that minimize unexpected breakdowns
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <Award className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-2xl font-semibold mb-3">Dedicated Account Manager</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your personal point of contact for all maintenance needs and service coordination
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-6">Partnership Benefits</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Reduced Equipment Downtime</p>
                      <p className="text-muted-foreground">Maximize operational hours with proactive maintenance schedules</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Extended Equipment Life</p>
                      <p className="text-muted-foreground">Professional care ensures your machinery lasts longer</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Predictable Maintenance Budget</p>
                      <p className="text-muted-foreground">Fixed monthly rates with no surprise repair costs</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Safety Compliance Assurance</p>
                      <p className="text-muted-foreground">Stay compliant with all safety regulations and standards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
                  <ShieldCheck className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Authentic German Spare Parts</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Premium quality, precision-engineered components from Germany's finest manufacturers
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Why German Engineering?</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Uncompromising Quality Standards</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          German manufacturers adhere to the strictest quality control processes, ensuring every part meets exact specifications
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <ShieldCheck className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Superior Durability</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Built to withstand extreme conditions and heavy workloads, German parts outlast generic alternatives
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <CheckCircle className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Perfect Compatibility</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Original equipment manufacturer (OEM) parts guarantee seamless integration with your machinery
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <TrendingUp className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Enhanced Performance</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Maintain optimal equipment efficiency and productivity with precision-engineered components
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-6">Our Spare Parts Inventory</h3>
                  <div className="space-y-4">
                    <Card className="border-2">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-2">Engine Components</h4>
                        <p className="text-muted-foreground">Pistons, cylinders, fuel systems, turbochargers, and complete engine assemblies</p>
                      </CardContent>
                    </Card>
                    <Card className="border-2">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-2">Hydraulic Systems</h4>
                        <p className="text-muted-foreground">Pumps, valves, cylinders, hoses, and complete hydraulic power units</p>
                      </CardContent>
                    </Card>
                    <Card className="border-2">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-2">Transmission Parts</h4>
                        <p className="text-muted-foreground">Gears, clutches, torque converters, and drivetrain components</p>
                      </CardContent>
                    </Card>
                    <Card className="border-2">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-2">Electrical Systems</h4>
                        <p className="text-muted-foreground">Starters, alternators, sensors, control modules, and wiring harnesses</p>
                      </CardContent>
                    </Card>
                    <Card className="border-2">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-2">Undercarriage & Tracks</h4>
                        <p className="text-muted-foreground">Track shoes, rollers, idlers, sprockets, and suspension components</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <Package className="h-12 w-12 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold mb-2">5000+</h4>
                    <p className="text-primary-foreground/90">Parts in Stock</p>
                  </div>
                  <div>
                    <Clock className="h-12 w-12 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold mb-2">24-48 Hours</h4>
                    <p className="text-primary-foreground/90">Delivery Time</p>
                  </div>
                  <div>
                    <Award className="h-12 w-12 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold mb-2">100%</h4>
                    <p className="text-primary-foreground/90">Genuine Parts Guarantee</p>
                  </div>
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

export default Index;
