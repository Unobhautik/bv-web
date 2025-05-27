'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '../animation/MagneticButton';

const menuItems = [
  { text: 'Home', href: '/' },
  { text: 'Services', href: '/services' },
  { text: 'About', href: '/about' },
  { text: 'Projects', href: '/projects' },
  { text: 'Contact', href: '/contact' },
];

const socials = [
  { text: 'Instagram', href: 'https://instagram.com' },
  { text: 'LinkedIn', href: 'https://linkedin.com' },
  { text: 'Twitter', href: 'https://twitter.com' },
];

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const bigTextRef = useRef<HTMLHeadingElement>(null);

  // Add parallax scroll effect to the footer
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (bigTextRef.current) {
      gsap.fromTo(
        bigTextRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom',
            end: 'top center',
            scrub: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-black text-white pt-32 pb-12 px-6 md:px-10">
      <div className="container mx-auto">
        {/* Big slogan text */}
        <h2
          ref={bigTextRef}
          className="text-4xl md:text-6xl lg:text-8xl font-light text-center mb-24"
        >
          Let&apos;s shape the future — <br />
          one solution at a time.
        </h2>

        {/* CTA buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-32">
          <MagneticButton>
            <Link
              href="/contact"
              className="text-xl px-8 py-4 border rounded-full hover:bg-white hover:text-black transition-colors duration-300 inline-block"
            >
              Get a Free Consultation
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link
              href="/services"
              className="text-xl px-8 py-4 border rounded-full hover:bg-white hover:text-black transition-colors duration-300 inline-block"
            >
              Explore Our Services
            </Link>
          </MagneticButton>
        </div>

        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {/* Menu */}
          <div>
            <h3 className="text-lg mb-6 opacity-60">Menu</h3>
            <ul className="space-y-4">
              {menuItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={item.href} className="text-lg hover:opacity-60 transition-opacity">
                    {item.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg mb-6 opacity-60">Connect</h3>
            <ul className="space-y-4">
              {socials.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:opacity-60 transition-opacity"
                  >
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-6 opacity-60">Contact</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <p className="text-lg">hello@bvyte.in</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <p className="text-lg">+91-XXXXXXX</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg">Gujarat, India</p>
            </motion.div>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mb-20 border-t border-white/20 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <h3 className="text-xl">Sign up for our newsletter (No spam)</h3>
            <div className="flex items-stretch w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border border-white/20 px-4 py-3 w-full md:w-64 focus:outline-none focus:border-white"
              />
              <button className="bg-white text-black px-4 py-3 hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright and bottom links */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-12">
          <p className="text-sm opacity-60 mb-6 md:mb-0">
            © {new Date().getFullYear()} BVYTE Solutions. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/terms" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
              Terms of Use
            </Link>
            <Link href="/privacy" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
