import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-semibold">Lynq Labs</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Transforming businesses through intelligent data engineering solutions. We build
              the infrastructure that powers your data-driven decisions.
            </p>
            <div className="flex space-x-4">
              <Github className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/services" className="hover:text-white transition-colors">Data Engineering</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cloud Migration</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Pipeline Development</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Data Integration</Link></li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/technologies" className="hover:text-white transition-colors">Python & PySpark</Link></li>
              <li><Link to="/technologies" className="hover:text-white transition-colors">AWS & Cloud</Link></li>
              <li><Link to="/technologies" className="hover:text-white transition-colors">Airflow & Control-M</Link></li>
              <li><Link to="/technologies" className="hover:text-white transition-colors">Denodo</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Lynq Labs. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;