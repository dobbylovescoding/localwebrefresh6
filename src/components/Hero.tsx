import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown, CheckCircle, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white pt-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-[800px] h-[800px] bg-gradient-to-tr from-primary-700/30 to-transparent rounded-full -top-1/2 -left-1/4 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-bl from-accent-500/20 to-transparent rounded-full -bottom-1/4 -right-1/4 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [45, 0, 45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.2)_70%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==')] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] opacity-[0.03]" />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                className="inline-flex items-center px-4 py-1 rounded-full bg-primary-700/30 text-primary-100 text-sm font-medium mb-4 backdrop-blur-sm border border-primary-700/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Professional Web Solutions in Auckland
              </motion.span>
              <h1 className="text-balance">Bringing Local Businesses Online with Expert Web Solutions</h1>
              <p className="mt-6 text-lg text-primary-100 max-w-xl">
                Specialized web development and tech solutions for small businesses in Auckland. 
                From building stunning websites to fixing technical issues, we're your local digital partner.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn btn-primary backdrop-blur-sm"
              >
                Get Free Consultation
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn btn-outline backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>

          <motion.div 
            className="md:col-span-2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative w-full max-w-md">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-primary-700 to-transparent opacity-20 rounded-xl transform rotate-3 scale-105"
                animate={{
                  rotate: [3, 5, 3],
                  scale: [1.05, 1.07, 1.05],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative bg-primary-800/80 backdrop-blur-md p-8 rounded-xl shadow-xl border border-primary-700/50">
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center mr-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Sparkles className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold">Local Business Web Partner</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Professional Website Development',
                    'Business Email Setup',
                    'Web Presence Management',
                    'Technical Support'
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary-700" />
                      <span className="text-primary-100">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div 
                  className="mt-6 pt-6 border-t border-primary-700/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-primary-100 text-sm">
                    Serving North, West, and Central Auckland with personalized web solutions
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="services"
          smooth={true}
          duration={500}
          offset={-80}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-sm mb-2 text-primary-100">Scroll to learn more</span>
          <ArrowDown size={20} className="text-primary-100" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;