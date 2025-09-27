import { Github, ExternalLink, Code, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Data Lake Migration",
      description: "Migrated a Fortune 500 company's legacy data warehouse to a modern cloud-native data lake architecture on AWS, processing 10TB+ daily.",
      technologies: ["Python", "PySpark", "AWS S3", "Glue", "Redshift"],
      icon: Database,
      githubPlaceholder: true
    },
    {
      title: "Real-Time Analytics Pipeline",
      description: "Built a real-time streaming data pipeline for IoT sensor data processing, supporting 1M+ events per second with sub-second latency.",
      technologies: ["Apache Kafka", "PySpark Streaming", "Apache Airflow", "Elasticsearch"],
      icon: Server,
      githubPlaceholder: true
    },
    {
      title: "Multi-Cloud Data Integration",
      description: "Designed and implemented a unified data integration platform connecting AWS, Azure, and on-premise systems using Denodo virtualization.",
      technologies: ["Denodo", "SQL", "REST APIs", "Azure Data Factory"],
      icon: Code,
      githubPlaceholder: true
    },
    {
      title: "Automated ETL Framework",
      description: "Created a reusable ETL framework with automated testing, monitoring, and deployment pipelines, reducing development time by 60%.",
      technologies: ["Python", "Control-M", "Docker", "Jenkins", "PostgreSQL"],
      icon: Database,
      githubPlaceholder: true
    },
    {
      title: "Data Quality Monitoring System",
      description: "Implemented comprehensive data quality monitoring and alerting system with automated remediation workflows for critical business datasets.",
      technologies: ["Python", "Apache Airflow", "Great Expectations", "Grafana"],
      icon: Server,
      githubPlaceholder: true
    },
    {
      title: "Customer 360 Data Platform",
      description: "Built a unified customer data platform integrating CRM, marketing, and transaction data to provide 360-degree customer insights.",
      technologies: ["PySpark", "AWS EMR", "Snowflake", "dbt", "Tableau"],
      icon: Code,
      githubPlaceholder: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Projects Header */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore some of our recent data engineering projects and see how we've helped
            organizations transform their data infrastructure and unlock business value.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-4">
                      {project.githubPlaceholder ? (
                        <Button variant="outline" size="sm" disabled className="flex-1">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub (Coming Soon)
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" className="flex-1">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build scalable data infrastructure
            that drives real business value.
          </p>
          <Button size="lg" asChild>
            {/* <a href="/contact">Get In Touch</a> */}
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;