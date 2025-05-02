import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-primary-100/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-lg shadow-medium overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-primary-700 to-primary-600/0 rounded-lg"></div>
              <img 
                src="/conor-image.jpg" 
                alt="Conor from Local Web Refresh" 
                className="relative z-10 rounded-lg w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-700 rounded-full opacity-20"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 font-medium rounded-full text-sm">
              About Me
            </span>
            <h2 className="text-balance">Your Local Web Development Partner</h2>
            <p className="text-lg">
              After serving 10 years in the Air Force, I transitioned to studying software development full-time, combining discipline with technical expertise.
            </p>
            <p>
              For the past 2 years, I've worked as a tech advisor for a software company that builds apps and websites for influencers in the nutrition and fitness space. I also support a national sport federation with web solutions, event filming, and social media content management.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-start">
                <CheckCircle className="text-primary-700 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <p>Dedicated to helping small businesses build a strong web presence</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary-700 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <p>Available for in-person or phone consultations across North, West, and Central Auckland</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary-700 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <p>Transparent pricing with no hidden costs - all agreed upon before work begins</p>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="inline-block"
            >
              <a href="#contact" className="btn btn-primary mt-4">
                Schedule a Free Consultation
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;