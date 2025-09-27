import { Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const highlights = [
    {
      icon: Users,
      title: "Expert Founders",
      description: "Experienced data engineers with proven track records at leading tech companies"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of delivering enterprise-scale data solutions that drive business value"
    },
    {
      icon: TrendingUp,
      title: "Growth Focus",
      description: "Solutions designed to scale with your business and adapt to changing requirements"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* About Header */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center">About Lynq</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-xl leading-relaxed">
                Founded by two experienced data engineers, Lynq specializes in
                building enterprise-grade data infrastructure that scales with your
                business. We combine deep technical expertise with practical business
                understanding to deliver solutions that work.
              </p>
              
              <p className="leading-relaxed">
                Our founders have worked with Fortune 500 companies and fast-growing
                startups, giving us unique insights into both the technical challenges
                and business requirements of modern data engineering. We understand
                that data infrastructure isn't just about technology—it's about
                enabling your organization to make better decisions faster.
              </p>
              
              <p className="leading-relaxed">
                At Lynq, we believe in building solutions that are not only technically
                excellent but also maintainable, scalable, and aligned with your
                business goals. We work closely with our clients to understand their
                unique challenges and design solutions that grow with their needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower organizations with robust, scalable data infrastructure
                that transforms raw data into actionable business insights. We're
                committed to delivering solutions that not only meet current needs
                but anticipate future growth and challenges.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed">
                We start by understanding your business objectives and data
                challenges. Then we design and implement solutions using
                industry-proven technologies and best practices. Our approach
                emphasizes collaboration, transparency, and delivering measurable
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;