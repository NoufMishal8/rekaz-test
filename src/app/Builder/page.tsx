'use client';
import { useState } from 'react';
import PreviewArea from '../components/PreviewArea';
import SectionLibrary from '../components/SectionLibrary';
import SectionEditor from '../components/SectionEditor';
import { SectionData } from '@/types/section';
import { toast } from 'react-toastify';

export default function Home() {
  const [sections, setSections] = useState<SectionData[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleAddSection = (section: SectionData) => {
    setSections([...sections, section]);
  };

  const handleEdit = (section: SectionData) => {
    const index = sections.findIndex((s) => s.id === section.id);
    if (index !== -1) {
      setSelectedIndex(index);
    }
  };

  const handleUpdateSection = (updated: SectionData) => {
    setSections((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
  };

  const handleDelete = (id: string) => {
    setSections(sections.filter((s) => s.id !== id));
    setSelectedIndex(null);
  };

  return (
    <main className="min-h-screen p-6 md:p-10 bg-gradient-to-br from-[#FFE9DA] to-[#FFF7F0] text-[#3C2A1E]">

  <div className="flex items-center gap-4 mb-8">

    <img
      src="/favicon.png"
      alt="Rekaz Logo"
      className="w-14 h-12"
    />

    <div>
      <h1 className="text-4xl font-extrabold text-[#f4a261]">Rekaz</h1>
      <p className="text-l font-medium text-[#3C2A1E]">Mini Website Builder</p>
    </div>
</div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-6">
          <div className="bg-[#FFF3EB] border border-[#F8D5BE] rounded-xl p-6 shadow-lg max-h-[300px] overflow-y-auto">
            <h2 className="text-lg font-bold mb-4">Section Library</h2>
            <SectionLibrary onAdd={handleAddSection} />
          </div>

          {selectedIndex !== null && sections[selectedIndex] && (
            <div className="glass-card p-6 space-y-6 bg-[#f5b89d] rounded-xl">
              <h2 className="text-lg font-bold mb-4">Edit Section</h2>
              <SectionEditor
                section={sections[selectedIndex]}
                onUpdate={handleUpdateSection}
              />
              <div className="pt-2 text-right">
                <button
                  className="bg-[#f5b89d] text-white px-4 py-2 rounded hover:bg-[#3C2A1E]"
                  onClick={() => {
                    console.log("Saved data:", sections);
toast.success('All changes saved!');                  }}
                >
                  Save All Changes
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="md:col-span-2 glass-card min-h-[200px] max-h-[80vh] overflow-y-auto p-6 rounded-xl bg-white/30">
          <h2 className="text-lg font-bold mb-4">Live Preview</h2>
          {sections.length === 0 ? (
            <p className="text-sm text-[#7C5D4A]">No sections added. Use the library to get started.</p>
          ) : (
            <PreviewArea
              sections={sections}
              onEdit={handleEdit}
              onReorder={setSections}
              onDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </main>
  );
}
