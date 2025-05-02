import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Mail, PenTool as Tool, Database, Lightbulb, Monitor, AlertCircle } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Website Development',
    description: 'Custom-built websites tailored to your business needs, from simple landing pages to complex e-commerce solutions.'
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: 'Domain Setup',
    description: 'Professional domain registration, configuration, and management to establish your online presence.'
  },
  {
    icon: <AlertCircle className="w-6 h-6" />,
    title: 'Website Troubleshooting',
    description: 'Expert diagnosis and fixes for broken websites, error pages, and performance issues.'
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'DNS Management',
    description: 'Technical DNS configuration and optimization to ensure your website and email services work flawlessly.'
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Business Email',
    description: 'Professional email setup with your business domain to enhance your brand credibility.'
  },
  {
    icon: <Tool className="w-6 h-6" />,
    title: 'Technical Support',
    description: 'Ongoing support and maintenance to keep your digital presence running smoothly.'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Digital Strategy',
    description: 'Custom digital strategies to help your business thrive online and reach more customers.'
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: 'CMS Setup & Training',
    description: 'Setup and training for content management systems so you can manage your website with confidence.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 font-medium rounded-full text-sm mb-4">
            Our Services
          </span>
          <h2 className="mb-4">Comprehensive Web Solutions for Your Business</h2>
          <p className="text-lg text-primary-800">
            From building stunning websites to solving technical problems, we provide all the digital services your local business needs to thrive online.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item} className="card group">
              <div className="service-icon group-hover:bg-primary-700 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-primary-800">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 bg-primary-100 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Need a custom solution?</h3>
              <p className="text-primary-800">
                Contact us for a free consultation to discuss your specific business needs.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href="#contact" className="btn btn-primary whitespace-nowrap">
                Get Free Consultation
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;