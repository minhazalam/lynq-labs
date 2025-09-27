import { Code, Database, Cloud, GitBranch, Link, BarChart3, Settings, Zap, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Technologies = () => {
  const techCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      technologies: [
        { name: "Python", description: "Primary language for data processing and ML" },
        { name: "SQL", description: "Advanced queries and database optimization" },
        { name: "Scala", description: "High-performance Spark applications" }
      ]
    },
    {
      icon: Database,
      title: "Big Data Processing",
      technologies: [
        { name: "PySpark", description: "Distributed data processing at scale" },
        { name: "Apache Kafka", description: "Real-time data streaming" },
        { name: "Hadoop Ecosystem", description: "HDFS, Hive, and related tools" }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      technologies: [
        { name: "AWS", description: "Complete cloud data solutions" },
        { name: "Azure", description: "Microsoft cloud ecosystem" },
        { name: "GCP", description: "Google Cloud Platform services" }
      ]
    },
    {
      icon: GitBranch,
      title: "Orchestration",
      technologies: [
        { name: "Apache Airflow", description: "Workflow management platform" },
        { name: "Control-M", description: "Enterprise workload automation" },
        { name: "Kubernetes", description: "Container orchestration" }
      ]
    },
    {
      icon: Link,
      title: "Data Integration",
      technologies: [
        { name: "Denodo", description: "Data virtualization platform" },
        { name: "Apache NiFi", description: "Data flow automation" },
        { name: "Talend", description: "Data integration suite" }
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics & BI",
      technologies: [
        { name: "dbt", description: "Data transformation framework" },
        { name: "Tableau", description: "Business intelligence platform" },
        { name: "Power BI", description: "Microsoft analytics platform" }
      ]
    }
  ];

  const benefits = [
    {
      icon: Settings,
      title: "Scalable",
      description: "Built for enterprise-scale data processing"
    },
    {
      icon: Shield,
      title: "Reliable",
      description: "Production-tested and battle-hardened"
    },
    {
      icon: Zap,
      title: "Modern",
      description: "Latest tools and best practices"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Technologies Header */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Technology Stack</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We work with industry-leading technologies to deliver robust, scalable, and
            maintainable data solutions that grow with your business.
          </p>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {techCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="border-l-2 border-primary/20 pl-4">
                        <h4 className="font-semibold text-foreground">{tech.name}</h4>
                        <p className="text-sm text-muted-foreground">{tech.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Why Choose Our Tech Stack */}
          <div className="bg-muted/50 rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Tech Stack?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technologies;