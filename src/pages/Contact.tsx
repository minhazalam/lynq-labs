import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "hello@lynqlabs.com",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Remote-First, Global Coverage",
      color: "bg-orange-500/10 text-orange-600"
    }
  ];

  const expectations = [
    {
      icon: Clock,
      title: "Initial consultation within 24 hours",
      color: "text-blue-600"
    },
    {
      icon: CheckCircle,
      title: "Detailed project proposal within 1 week",
      color: "text-green-600"
    },
    {
      icon: DollarSign,
      title: "Transparent pricing and timeline",
      color: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Contact Header */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your data infrastructure? Tell us about your project and we'll help
            you achieve your data engineering goals.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Let's Start a Conversation</CardTitle>
                  <CardDescription>
                    Whether you're looking to build a new data pipeline, migrate to the cloud, or
                    optimize existing systems, we're here to help. Reach out to discuss your needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full group">
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Expectations */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${info.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{info.title}</h3>
                        <p className="text-muted-foreground">{info.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* What to Expect */}
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {expectations.map((expectation, index) => {
                      const IconComponent = expectation.icon;
                      return (
                        <li key={index} className="flex items-start space-x-3">
                          <IconComponent className={`h-5 w-5 mt-0.5 ${expectation.color}`} />
                          <span className="text-muted-foreground">{expectation.title}</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;