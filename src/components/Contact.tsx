import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle, Loader } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // In a real implementation, you would send the form data to a server
      console.log('Form submitted:', formState);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-primary-100/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary-700 text-white font-medium rounded-full text-sm mb-4">
            Get in Touch
          </span>
          <h2 className="mb-4">Book Your Free Consultation</h2>
          <p className="text-lg text-primary-800">
            Schedule a no-obligation consultation to discuss your business needs. Services available across North, West, and Central Auckland.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-lg shadow-medium p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <Mail className="text-primary-700 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:conor@localwebrefresh.co.nz" className="text-primary-700 hover:underline">
                      conor@localwebrefresh.co.nz
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <Phone className="text-primary-700 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>Available upon request</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <MapPin className="text-primary-700 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Service Areas</p>
                    <p>North, West, and Central Auckland</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h4 className="font-semibold mb-4">Our Commitment to You</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary-700 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <p>Free, no-obligation initial consultation</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary-700 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <p>Fair and transparent pricing</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary-700 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <p>No hidden costs or surprise fees</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary-700 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <p>All work agreed upon before commencement</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-medium p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-500/20 mb-4">
                    <CheckCircle className="text-success-500 w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Message Sent Successfully!</h4>
                  <p className="text-primary-800">
                    Thank you for reaching out. I'll get back to you as soon as possible to discuss your web needs.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 btn btn-outline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-800 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-800 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary-800 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-800 mb-1">
                      How Can I Help You?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className="form-input resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary w-full flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="animate-spin mr-2" size={20} />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                  
                  <p className="text-sm text-center text-primary-800 mt-4">
                    By submitting this form, you're taking the first step towards improving your business's web presence.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;