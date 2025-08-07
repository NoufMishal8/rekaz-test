'use client';

import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

interface Props {
  data: {
    title: string;
    description?: string;
    imageUrl?: string;
  };
  onEdit: () => void;
  onDelete: () => void;
}

export default function FooterSection({ data, onEdit, onDelete }: Props) {
  return (
    <div className="p-4 border border-white/10 bg-white/5 rounded-lg">
      <footer className="bg-gradient-to-r from-[#f3a683] to-[#fcd5b5] text-[#3C2A1E] p-6 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side: Text + Icons */}
          <div className="text-center md:text-left space-y-2">
            {data.title && <h2 className="text-lg font-bold">{data.title}</h2>}
            {data.description && <p className="text-sm">{data.description}</p>}
            <div className="flex justify-center md:justify-start gap-4 mt-2 text-xl">
              <a href="#" className="hover:text-[#b8753a] transition"><FaTwitter /></a>
              <a href="#" className="hover:text-[#b8753a] transition"><FaLinkedin /></a>
              <a href="#" className="hover:text-[#b8753a] transition"><FaGithub /></a>
            </div>
            <p className="text-sm text-[#3C2A1E]/70">© 2025 Rekaz. All rights reserved.</p>
          </div>

          {/* Right side: Uploaded image */}
          {data.imageUrl && (
            <img
              src={data.imageUrl}
              alt="Footer"
              className="max-h-20 w-auto rounded-md object-contain"
            />
          )}
        </div>
      </footer>

      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={onEdit}
          className="text-[#f4a261] border-none px-4 py-2 rounded hover:underline"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="text-red-500 border-none px-4 py-2 rounded hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
