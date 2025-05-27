'use client';

import { motion } from 'framer-motion';
import MagneticButton from '@/components/animation/MagneticButton';

const services = [
  {
    title: 'Web Development',
    description: 'Create stunning, responsive websites and web applications using cutting-edge technologies.',
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'API Development'
    ]
  },
  {
    title: 'Mobile Development',
    description: 'Build native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-platform Solutions',
      'Mobile UI/UX Design'
    ]
  },
  {
    title: 'Cloud Solutions',
    description: 'Leverage cloud technologies to scale your business and optimize operations.',
    features: [
      'Cloud Migration',
      'DevOps Services',
      'Cloud Architecture',
      'Serverless Solutions'
    ]
  },
  {
    title: 'Digital Transformation',
    description: 'Transform your business with innovative digital solutions and strategies.',
    features: [
      'Digital Strategy',
      'Process Automation',
      'Legacy System Modernization',
      'Digital Integration'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">Our Services</h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          We offer comprehensive digital solutions to help businesses thrive in the modern digital landscape.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-8 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors duration-300"
            >
              <h2 className="text-2xl font-light mb-4">{service.title}</h2>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                    className="flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 p-8 rounded-lg bg-primary/5"
        >
          <h2 className="text-2xl font-light mb-4">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how our services can help you achieve your digital goals.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
