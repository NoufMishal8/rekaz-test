'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function StartButton({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  const colors = ['#37190c', '#d97c53', '#f3bba2', '#ffbe91', '#f4a261'];

  return (
    <motion.button
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6, type: 'spring' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className="relative text-[#3d2717] text-lg font-semibold px-16 py-3 transition duration-800 ease-in-out group overflow-visible"
    >
      <span className="relative z-10">Let’s Start</span>

      <span className="absolute left-1/2 -bottom-1 w-32 h-2 bg-[#f4a261]/40 rounded-full blur-md opacity-80 -translate-x-1/2 group-hover:scale-110 transition-all duration-500" />

      <span className="absolute inset-0 bg-[#ffad89]/10 rounded-lg blur-xl opacity-90 group-hover:opacity-100 transition duration-500" />

    {hovered &&
  Array.from({ length: 20 }).map((_, i) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const offset = 100; 

    return (
      <motion.span
        key={i}
        className="absolute w-2 h-2 rounded-full opacity-90"
        style={{ backgroundColor: randomColor }}
        initial={{
          top: '50%',
          left: '50%',
          scale: 0,
          opacity: 0,
        }}
        animate={{
          top: `${50 + Math.random() * offset - offset / 2}%`,
          left: `${50 + Math.random() * offset - offset / 2}%`,
          scale: [1, 1.4, 1],
          opacity: [0.9, 0.4, 0.2],
        }}
        transition={{
          duration: 1 + Math.random() * 1.5,
          repeat: Infinity,
          delay: Math.random(),
        }}
      />
    );
  })}

    </motion.button>
  );
}
