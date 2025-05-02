import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';

// Tech platforms with icons 
const technologies = [
  { name: 'WordPress', icon: 'https://s.w.org/style/images/about/WordPress-logotype-standard.png' },
  { name: 'Wix', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Wix.com_website_logo.svg/2560px-Wix.com_website_logo.svg.png' },
  { name: 'Squarespace', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Squarespace_logo.svg/2560px-Squarespace_logo.svg.png' },
  { name: 'Shopify', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png' },
  { name: 'Google Workspace', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png' },
  { name: 'Microsoft 365', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' },
  { name: 'HubSpot', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/HubSpot_Logo.svg/2560px-HubSpot_Logo.svg.png' },
  { name: 'Freshdesk', icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Freshworks_logo.svg/1200px-Freshworks_logo.svg.png' },
  { name: 'Canva', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png' },
  { name: 'GitHub', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 font-medium rounded-full text-sm mb-4">
            Expertise & Qualifications
          </span>
          <h2 className="mb-4">Technical Skills & Certifications</h2>
          <p className="text-lg text-primary-800">
            As a trained software developer, I bring expertise across various platforms and technologies to provide comprehensive solutions for your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Qualifications */}
          <motion.div 
            className="card h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <GraduationCap className="text-primary-700 w-8 h-8" />
              <h3 className="text-2xl font-semibold">Qualifications</h3>
            </div>
            <ul className="space-y-6">
              <li className="space-y-1">
                <h4 className="font-semibold text-lg">Certificate in Technology Product Development Foundations</h4>
                <p className="text-primary-800">Comprehensive training in software development principles and practices</p>
              </li>
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            className="card h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <Award className="text-primary-700 w-8 h-8" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            <ul className="space-y-6">
              <li className="space-y-1">
                <h4 className="font-semibold text-lg">Google Cloud Certified</h4>
                <p className="text-primary-800">Associate Google Workspace Administrator</p>
              </li>
              <li className="space-y-1">
                <p className="text-primary-700 italic">Additional industry certifications in web development and digital solutions</p>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Technologies */}
        <h3 className="text-2xl font-semibold text-center mb-10">Platforms & Technologies</h3>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {technologies.map((tech, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col items-center p-4 border border-primary-100 rounded-lg hover:shadow-soft transition-all duration-300"
            >
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="h-12 object-contain mb-3" 
              />
              <p className="font-medium text-center text-primary-800">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center mt-10 text-primary-800">
          As a trained software developer, I can efficiently work with virtually any website builder or content management system.
        </p>
      </div>
    </section>
  );
};

export default Technologies;