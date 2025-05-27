'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '../animation/TextReveal';
import MagneticButton from '../animation/MagneticButton';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 'cafepoint',
    title: 'CafePoint',
    subtitle: 'Online Food Ordering Website',
    description: 'A Django-powered platform for a local café to manage orders, menus, and customer data.',
    tech: ['Django', 'SQLite', 'HTML', 'CSS'],
    image: 'https://ext.same-assets.com/3450762501/3001657059.avif',
  },
  {
    id: 'gogreen',
    title: 'Go Green, Go Clean',
    subtitle: 'Smart Waste Management',
    description: 'A web app built with React and Node.js to monitor and suggest optimized waste disposal methods.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    image: 'https://ext.same-assets.com/3450762501/1664768085.avif',
  },
  {
    id: 'airesume',
    title: 'AI Resume Analyzer',
    subtitle: 'Smart Resume Processing',
    description: 'Smart resume checker powered by NLP, giving users insights and improvement suggestions.',
    tech: ['Streamlit', 'Python', 'MySQL'],
    image: 'https://ext.same-assets.com/3450762501/1436887613.avif',
  },
  {
    id: 'healthmate',
    title: 'HealthMate',
    subtitle: 'Fitness Recommendation System',
    description: 'An AI-based web app recommending diet and workouts tailored to user preferences.',
    tech: ['FastAPI', 'Streamlit', 'Scikit-learn'],
    image: 'https://ext.same-assets.com/3450762501/2545843542.avif',
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate projects on scroll with a staggered effect
    if (projectRefs.current.length) {
      gsap.fromTo(
        projectRefs.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom-=100',
            end: 'center center',
            scrub: false,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40 bg-white text-black relative overflow-hidden"
    >
      <div className="container mx-auto px-5 max-w-6xl">
        <TextReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Our Work
          </h2>
        </TextReveal>

        <TextReveal delay={0.2}>
          <p className="text-lg md:text-xl max-w-2xl mb-20 opacity-80">
            Featured projects that showcase our expertise and creativity.
          </p>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className="project-card group"
            >
              <div className="relative overflow-hidden rounded-md mb-6 aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-medium">{project.title}</h3>
                  <p className="text-sm opacity-70">{project.subtitle}</p>
                </div>

                <p className="mb-4 opacity-80">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <MagneticButton>
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-sm uppercase tracking-wider border-b border-black pb-1 inline-block hover:opacity-70 transition-opacity"
                  >
                    View Project
                  </Link>
                </MagneticButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <MagneticButton>
            <Link
              href="/projects"
              className="text-lg px-8 py-4 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 inline-block"
            >
              View All Projects
            </Link>
          </MagneticButton>
        </div>
      </div>

      <motion.div
        className="absolute right-0 top-1/4 w-32 h-32 bg-gray-100 rounded-full"
        animate={{
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ filter: 'blur(50px)' }}
      />
    </section>
  );
}
