'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

interface Props {
  data: any;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function HeaderSection({ data, onEdit, onDelete }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-4 border border-white/10 bg-white/5 rounded-lg"
    >
      <header className="flex justify-between items-center bg-gradient-to-r from-[#fcd5b5] to-[#f3a683] text-[#3C2A1E] p-5 rounded-xl shadow-md backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <img src="/favicon.png" alt="Logo" className="w-12 h-10 rounded-full" />
          <div>
           <h1 className="text-2xl font-extrabold font-playfair tracking-wide">
  {data.title || 'Welcome to Rekaz'}
</h1>
            {data.description && (
              <p className="text-sm text-[#7b4f2c]">{data.description}</p>
            )}
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold">
          <a href="#" className="flex items-center gap-1 hover:text-white transition"><FaHome /> Home</a>
          <a href="#" className="flex items-center gap-1 hover:text-white transition"><FaInfoCircle /> About</a>
          <a href="#" className="flex items-center gap-1 hover:text-white transition"><FaEnvelope /> Contact</a>
        </nav>
      </header>

      {data.imageUrl && (
        <img
          src={data.imageUrl}
          alt="Header"
          className="mt-4 rounded-md max-h-48 object-cover w-full"
        />
      )}

      <div className="mt-4 flex justify-end gap-2">
        <button onClick={onEdit} className="text-[#f4a261] border-none px-4 py-2 rounded hover:underline">
          Edit
        </button>
        <button onClick={onDelete} className="text-red-500 border-none px-4 py-2 rounded hover:underline">
          Delete
        </button>
      </div>
    </motion.div>
  );
}
