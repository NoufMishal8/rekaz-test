import React from 'react';
import { SectionData } from '@/types/section';

interface Props {
  onAdd: (section: SectionData) => void;
}

export default function SectionLibrary({ onAdd }: Props) {
  const addHeader = () => {
    onAdd({ id: Date.now().toString(), type: 'header', content: { title: 'Welcome to Rekaz' } });
  };

  const addHero = () => {
    onAdd({ id: Date.now().toString(), type: 'hero', content: { heading: 'Explore Our Features', subheading: 'We help you build beautiful websites easily.' } });
  };

  const addFooter = () => {
    onAdd({ id: Date.now().toString(), type: 'footer', content: { text: '© 2025 Rekaz. All rights reserved.' } });
  };

  return (
    <div className="flex flex-col gap-2">
      <button onClick={addHeader} className="btn">Add Header</button>
      <button onClick={addHero} className="btn">Add Hero</button>
      <button onClick={addFooter} className="btn">Add Footer</button>
    </div>
  );
}
