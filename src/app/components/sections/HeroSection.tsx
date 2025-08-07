'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  data: any;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function HeroSection({ data, onEdit, onDelete }: Props) {
  const layout = data.layout || 'split';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-lg shadow-md"
    >
      {layout === 'centered' ? (
        <div className="flex flex-col items-center text-center bg-gradient-to-r from-[#fcd5b5] to-[#f3a683] text-[#3C2A1E] p-6 rounded-lg space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
            {data.title?.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="bg-gradient-to-r from-[#fcbb87] to-[#e0985c] bg-clip-text text-transparent">
              {data.title?.split(' ').slice(-1)[0] || 'Explore Our Features'}
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#5a3e2b]">
            {data.description || 'We help you build beautiful websites easily.'}
          </p>
          <button className="px-6 py-2 bg-[#faaf79] text-white rounded hover:bg-[#e07b39] transition">
            Learn More
          </button>
          {data.imageUrl && (
            <img
              src={data.imageUrl}
              alt="Hero"
              className="rounded-lg w-full max-h-64 object-cover shadow-lg"
            />
          )}
        </div>
      ) : layout === 'background' ? (
        <div
          className="relative text-center text-white p-10 rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${data.imageUrl})` }}
        >
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-md inline-block">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              {data.title || 'Explore Our Features'}
            </h2>
            <p className="text-sm sm:text-base md:text-lg mt-2">
              {data.description || 'We help you build beautiful websites easily.'}
            </p>
            <button className="mt-4 px-6 py-2 bg-[#faaf79] text-white rounded hover:bg-[#e07b39] transition">
              Learn More
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 items-center bg-gradient-to-r from-[#fcd5b5] to-[#f3a683] text-[#3C2A1E] p-6 rounded-lg">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              {data.title?.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="bg-gradient-to-r from-[#fcbb87] to-[#e0985c] bg-clip-text text-transparent">
                {data.title?.split(' ').slice(-1)[0] || 'Explore Our Features'}
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#5a3e2b]">
              {data.description || 'We help you build beautiful websites easily.'}
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="mt-2 px-6 py-2 bg-[#faaf79] text-white rounded hover:bg-[#e07b39] transition">
                Learn More
              </button>
            </div>
          </div>
          {data.imageUrl && (
            <img
              src={data.imageUrl}
              alt="Hero"
              className="rounded-lg w-full max-h-64 object-cover shadow-lg"
            />
          )}
        </div>
      )}

      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={onEdit}
          className="text-[#f4a261] px-4 py-2 rounded hover:underline"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="text-red-500 px-4 py-2 rounded hover:underline"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
}