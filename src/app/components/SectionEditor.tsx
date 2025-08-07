'use client';

import React, { useState, useEffect } from 'react';
import { SectionData } from '@/types/section';

interface Props {
  section: SectionData | null;
  onUpdate: (section: SectionData) => void;
}

export default function SectionEditor({ section, onUpdate }: Props) {
  const [local, setLocal] = useState<SectionData | null>(section);

  useEffect(() => {
    setLocal(section);
  }, [section]);

  if (!local) return <div className="text-sm text-gray-400">Select a section to edit</div>;

  const handleChange = (field: keyof SectionData['content'], value: string) => {
    const updated = {
      ...local,
      content: {
        ...local.content,
        [field]: value,
      },
    };
    setLocal(updated);
    onUpdate(updated);
  };

  return (
    <div className="bg-gradient-to-r from-[#f3a683] to-[#fcd5b5] border border-[#e38b58] rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-white">
        Edit {local.type.charAt(0).toUpperCase() + local.type.slice(1)}
      </h2>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-white">
          Title
          <input
            type="text"
            className="mt-1 w-full rounded-md bg-white/10 border border-white/20 p-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            value={local.content.title ?? ''}
            onChange={(e) => handleChange('title', e.target.value)}
          />
        </label>

        <label className="block text-sm font-medium text-white">
          Description
          <textarea
            rows={3}
            className="mt-1 w-full rounded-md bg-white/10 border border-white/20 p-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            value={local.content.description ?? ''}
            onChange={(e) => handleChange('description', e.target.value)}
          />
        </label>

        <label className="block text-sm font-medium text-white">
          Image URL
          <input
            type="text"
            className="mt-1 w-full rounded-md bg-white/10 border border-white/20 p-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            value={local.content.imageUrl ?? ''}
            onChange={(e) => handleChange('imageUrl', e.target.value)}
          />
        </label>

        <label className="block text-sm font-medium text-white">
          Layout Style
          <select
            className="mt-1 w-full rounded-md bg-white/10 text-white border border-white/20 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={local.content.layout || 'split'}
            onChange={(e) => handleChange('layout', e.target.value)}
          >
            <option className="text-black" value="centered">Centered</option>
            <option className="text-black" value="split">Split</option>
            <option className="text-black" value="background">Background Image</option>
          </select>
        </label>

        {local.content.imageUrl && (
          <div className="pt-2">
            <p className="block text-sm font-medium text-white">Image Preview</p>
            <img
              src={local.content.imageUrl}
              alt="Preview"
              className="rounded-md max-h-40 object-cover border border-white/20"
            />
          </div>
        )}
      </div>
    </div>
  );
}