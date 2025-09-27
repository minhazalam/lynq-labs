import { ArrowRight, Database, Cloud, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroIllustration from "@/assets/hero-illustration.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Build Scalable{" "}
                <span className="text-primary">Data Pipelines</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                We're Lynq Labs, a specialized data engineering agency that
                designs and builds enterprise-grade data pipelines, enabling your
                organization to unlock actionable insights from complex data at
                scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group" asChild>
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/projects">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <img
                src={heroIllustration}
                alt="Data Engineering Visualization"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Data Engineering</h3>
                <p className="text-muted-foreground">
                  Build scalable ETL/ELT pipelines using modern frameworks
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Cloud Infrastructure</h3>
                <p className="text-muted-foreground">
                  Design cloud-native solutions on AWS with best practices
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Custom Solutions</h3>
                <p className="text-muted-foreground">
                  Tailored data solutions for your specific business needs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
