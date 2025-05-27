'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '../animation/TextReveal';
import MagneticButton from '../animation/MagneticButton';
import Link from 'next/link';

const services = [
  {
    id: 'web-dev',
    title: 'Web Development',
    icon: '🌐',
    description: 'Crafting responsive, high-performing websites tailored to your brand and goals.',
    features: ['Custom Website Development', 'E-commerce Solutions', 'Progressive Web Apps', 'UI/UX Design'],
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    icon: '📱',
    description: 'Building cross-platform mobile apps that deliver seamless user experiences.',
    features: ['iOS & Android Development', 'Cross-platform Solutions', 'App Maintenance', 'Performance Optimization'],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: '🧠',
    description: 'Harness the power of AI to automate, analyze, and scale smarter.',
    features: ['NLP Solutions', 'Predictive Analytics', 'Computer Vision', 'AI Integration'],
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    icon: '⚙️',
    description: 'From idea to execution — we develop software that solves real-world problems.',
    features: ['Business Process Automation', 'SaaS Products', 'Legacy System Modernization', 'Scalable Solutions'],
  },
  {
    id: 'backend-dev',
    title: 'Backend Development',
    icon: '🧰',
    description: 'Robust, secure, and scalable backend architecture for every business size.',
    features: ['API Development', 'Database Design', 'Server Configuration', 'Security Implementation'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    icon: '☁️',
    description: 'Ensure speed, security, and scalability with our cloud-based DevOps practices.',
    features: ['Cloud Migration', 'CI/CD Implementation', 'Infrastructure as Code', 'Monitoring & Logging'],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeService, setActiveService] = useState<string | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate services on scroll
    if (serviceRefs.current.length) {
      serviceRefs.current.forEach((el, index) => {
        if (el) {
          gsap.fromTo(
            el,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top bottom-=100',
                toggleActions: 'play none none none',
              },
              delay: index * 0.1,
            }
          );
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40 bg-black text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-5 max-w-6xl">
        <TextReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Services
          </h2>
        </TextReveal>

        <TextReveal delay={0.2}>
          <p className="text-lg md:text-xl max-w-2xl mb-20 opacity-80">
            Clearly explained solutions that solve real problems. This is where your digital transformation begins.
          </p>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => serviceRefs.current[index] = el}
              className="service-card"
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="text-3xl md:text-4xl mb-5">{service.icon}</div>
              <h3 className="text-2xl md:text-3xl font-light mb-4">{service.title}</h3>
              <p className="opacity-80 mb-6 leading-relaxed">{service.description}</p>

              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: activeService === service.id ? '200px' : '0px',
                }}
              >
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 opacity-70">
                      <span className="w-1 h-1 bg-white rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <MagneticButton>
                <Link
                  href={`/services#${service.id}`}
                  className="inline-block text-sm uppercase tracking-wider border-b pb-1 hover:opacity-70 transition-opacity"
                >
                  Learn more
                </Link>
              </MagneticButton>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <MagneticButton>
            <Link
              href="/services"
              className="text-lg px-8 py-4 border rounded-full hover:bg-white hover:text-black transition-colors duration-300 inline-block"
            >
              View All Services
            </Link>
          </MagneticButton>
        </div>
      </div>

      {/* Background decoration */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(60, 60, 60, 0.8) 0%, transparent 40%)',
        }}
      ></div>
    </section>
  );
}
