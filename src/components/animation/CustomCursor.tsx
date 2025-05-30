'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(true); // Default to true to avoid hydration mismatch

  useEffect(() => {
    setIsDesktop(
      !navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
    );
  }, []);

  return isDesktop;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 }); // Start cursor off-screen
  const [cursorVariant, setCursorVariant] = useState('default');
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // Track when mouse is over interactive elements
    const handleMouseEnter = () => setCursorVariant('hover');
    const handleMouseLeave = () => setCursorVariant('default');

    if (isDesktop) {
      // Add mouse move event listener
      window.addEventListener('mousemove', mouseMove);

      // Add event listeners for all buttons and links
      const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
      interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      });

      return () => {
        window.removeEventListener('mousemove', mouseMove);
        interactiveElements.forEach((element) => {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }
  }, [isDesktop]);

  // Cursor variants for different states
  const variants = {
    default: {
      x: mousePosition.x - 2.5, // Center the cursor dot
      y: mousePosition.y - 2.5,
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 800,
        damping: 30,
      },
    },
    hover: {
      x: mousePosition.x - 2.5,
      y: mousePosition.y - 2.5,
      scale: 1.5,
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 800,
        damping: 30,
      },
    },
  };

  // Cursor outline variants
  const outlineVariants = {
    default: {
      x: mousePosition.x - 20, // Center the cursor outline
      y: mousePosition.y - 20,
      transition: {
        type: 'spring',
        mass: 0.3,
        stiffness: 200,
        damping: 20,
      },
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      width: 60,
      height: 60,
      transition: {
        type: 'spring',
        mass: 0.3,
        stiffness: 200,
        damping: 20,
      },
    },
  };

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        variants={variants}
        animate={cursorVariant}
        style={{ zIndex: 9999 }}
      />
      <motion.div
        className="cursor-outline"
        variants={outlineVariants}
        animate={cursorVariant}
        style={{ zIndex: 9998 }}
      />
    </>
  );
}
