import { Database, Cloud, GitBranch, Link, Shield, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Data Pipeline Engineering",
      description: "Build scalable ETL/ELT pipelines using Python, PySpark, and modern data processing frameworks.",
      tags: ["Python", "PySpark", "SQL"]
    },
    {
      icon: Cloud,
      title: "Cloud Data Architecture",
      description: "Design and implement cloud-native data solutions on AWS with best practices for security and cost optimization.",
      tags: ["AWS", "S3", "Redshift", "EMR"]
    },
    {
      icon: GitBranch,
      title: "Workflow Orchestration",
      description: "Implement robust workflow management and scheduling using Airflow and Control-M for reliable automation.",
      tags: ["Airflow", "Control-M"]
    },
    {
      icon: Link,
      title: "Data Integration",
      description: "Seamless data integration and virtualization solutions connecting disparate data sources across your organization.",
      tags: ["Denodo", "APIs", "Streaming"]
    },
    {
      icon: Shield,
      title: "Data Quality & Monitoring",
      description: "Implement comprehensive data quality checks and monitoring systems to ensure data reliability and integrity.",
      tags: ["Monitoring", "Quality", "Alerts"]
    },
    {
      icon: BarChart3,
      title: "Analytics Platform Development",
      description: "Build end-to-end analytics platforms from data ingestion to visualization and reporting.",
      tags: ["dbt", "Visualization", "BI"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Services Header */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive data engineering solutions tailored to your business needs,
            from initial architecture design to ongoing maintenance and optimization.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;