'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MagneticButton from '../animation/MagneticButton';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const menuItems = [
  { text: 'Home', href: '/' },
  { text: 'Services', href: '/services' },
  { text: 'About', href: '/about' },
  { text: 'Projects', href: '/projects' },
  { text: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const menuItemVariants = {
    closed: (i: number) => ({
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.05 * i,
      },
    }),
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.05 * i,
      },
    }),
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 py-7 px-7 md:px-10 transition-all duration-500',
          scrolled || isMenuOpen ? 'bg-black text-white' : 'bg-transparent'
        )}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-3xl font-light z-50">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            >
              BVYTE
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-lg hover:opacity-60 transition-opacity duration-300"
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 * index }}
                >
                  {item.text}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <MagneticButton className="hidden md:block z-50">
            <Link
              href="/contact"
              className="text-lg px-6 py-3 border rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                Let&apos;s talk
              </motion.div>
            </Link>
          </MagneticButton>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-lg focus:outline-none"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div
              className="flex flex-col gap-8 items-center"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    href={item.href}
                    className="text-3xl text-white hover:opacity-60 transition-opacity duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                custom={menuItems.length}
                variants={menuItemVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="text-xl px-6 py-3 mt-6 border rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Let&apos;s talk
                  </Link>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
