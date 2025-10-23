import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Products = () => {
  const categories = [
    {
      name: "Excavators",
      items: [
        "Hydraulic Excavators",
        "Mini Excavators",
        "Long Reach Excavators",
        "Wheeled Excavators",
      ],
    },
    {
      name: "Loaders",
      items: [
        "Wheel Loaders",
        "Skid Steer Loaders",
        "Backhoe Loaders",
        "Track Loaders",
      ],
    },
    {
      name: "Cranes",
      items: [
        "Mobile Cranes",
        "Tower Cranes",
        "Crawler Cranes",
        "Rough Terrain Cranes",
      ],
    },
    {
      name: "Bulldozers",
      items: [
        "Crawler Dozers",
        "Wheel Dozers",
        "Mini Dozers",
      ],
    },
    {
      name: "Parts & Accessories",
      items: [
        "Engine Parts",
        "Hydraulic Components",
        "Undercarriage Parts",
        "Filters & Fluids",
        "Electrical Components",
        "Wear Parts",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Page Header */}
        <section className="bg-secondary text-secondary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-primary">Products</span></h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Quality heavy equipment and genuine parts for all your construction needs
            </p>
          </div>
        </section>

        {/* Products Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
                <TabsTrigger value="all">All Products</TabsTrigger>
                <TabsTrigger value="excavators">Excavators</TabsTrigger>
                <TabsTrigger value="loaders">Loaders</TabsTrigger>
                <TabsTrigger value="cranes">Cranes</TabsTrigger>
                <TabsTrigger value="bulldozers">Bulldozers</TabsTrigger>
                <TabsTrigger value="parts">Parts</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories.map((category, index) => (
                    <Card key={index} className="border-2 hover:border-primary transition-all">
                      <CardHeader>
                        <CardTitle className="text-2xl text-primary">{category.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {category.items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {categories.map((category, index) => (
                <TabsContent key={index} value={category.name.toLowerCase()}>
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="text-3xl text-primary">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.items.map((item, idx) => (
                          <div key={idx} className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                            <h3 className="font-semibold text-lg">{item}</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              High-quality {item.toLowerCase()} available for sale and rental
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>

            {/* Product Features */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Genuine Parts</h3>
                  <p className="text-muted-foreground">All parts are sourced directly from manufacturers</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Warranty Coverage</h3>
                  <p className="text-muted-foreground">Comprehensive warranty on all products</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                  <p className="text-muted-foreground">Quick delivery across UAE</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
