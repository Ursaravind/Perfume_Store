import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message. We will get back to you soon!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      action: 'tel:+15551234567'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['info@luxescents.com', 'support@luxescents.com'],
      action: 'mailto:info@luxescents.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      details: ['123 Luxury Avenue', 'New York, NY 10001'],
      action: 'https://maps.google.com'
    },
    {
      icon: <FaClock />,
      title: 'Business Hours',
      details: ['Mon - Sat: 10AM - 8PM', 'Sunday: 12PM - 6PM'],
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-black via-[#1a1a1a] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-accent text-luxury-gold mb-6">Contact Us</h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            We're here to assist you with any questions about our products or services. 
            Reach out to us through any of the following channels or fill out the contact form below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-luxury-gold/20"
                >
                  <div className="text-2xl text-luxury-gold mb-4">{info.icon}</div>
                  <h3 className="text-xl font-accent text-luxury-gold mb-2">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-300">{detail}</p>
                    ))}
                  </div>
                  {info.action && (
                    <a
                      href={info.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-luxury-gold hover:text-primary-light transition-colors"
                    >
                      Contact →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-luxury-gold/20"
          >
            <h2 className="text-2xl font-accent text-luxury-gold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 placeholder-gray-500 focus:border-luxury-gold focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 placeholder-gray-500 focus:border-luxury-gold focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 placeholder-gray-500 focus:border-luxury-gold focus:outline-none"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 placeholder-gray-500 focus:border-luxury-gold focus:outline-none resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-luxury-gold to-primary-light text-black rounded-full font-semibold hover:shadow-[0_0_25px_rgba(184,134,11,0.3)] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 