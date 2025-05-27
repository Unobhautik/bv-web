'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory management and AI-powered recommendations.',
    category: 'Web Development',
    image: '/projects/ecommerce.jpg'
  },
  {
    title: 'Healthcare App',
    description: 'Mobile application for healthcare providers to manage patient records and appointments efficiently.',
    category: 'Mobile Development',
    image: '/projects/healthcare.jpg'
  },
  {
    title: 'Financial Dashboard',
    description: 'Interactive dashboard for real-time financial data visualization and analysis.',
    category: 'Data Analytics',
    image: '/projects/finance.jpg'
  },
  {
    title: 'Smart Home System',
    description: 'IoT-based home automation system with mobile app control and energy monitoring.',
    category: 'IoT Solutions',
    image: '/projects/smarthome.jpg'
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">Our Projects</h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Explore our portfolio of innovative solutions that have helped businesses transform their digital presence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg bg-secondary/50"
            >
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">{project.category}</span>
                  <h3 className="text-2xl font-light mt-1">{project.title}</h3>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mt-6"
                >
                  <button className="px-6 py-2 rounded-full border border-current text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    View Project
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-lg">
            Want to start your own project with us?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-6"
          >
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
            >
              Start a Project
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
} 