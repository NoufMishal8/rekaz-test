'use client';

import React from 'react';
import { SectionData } from '@/types/section';
import HeaderSection from './sections/HeaderSection';
import HeroSection from './sections/HeroSection';
import FooterSection from './sections/FooterSection';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

interface Props {
  sections: SectionData[];
  onEdit: (section: SectionData) => void;
  onReorder: (sections: SectionData[]) => void;
  onDelete: (id: string) => void;
}

function SortableItem({
  section,
  onEdit,
  onDelete,
}: {
  section: SectionData;
  onEdit: (s: SectionData) => void;
  onDelete: (id: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'grab',
  };

const renderSection = () => {
  const commonProps = {
    data: section.content,
    onEdit: () => onEdit(section),
    onDelete: () => onDelete(section.id),
  };

  switch (section.type) {
    case 'header':
      return <HeaderSection {...commonProps} />;
    case 'hero':
      return <HeroSection {...commonProps} />;
    case 'footer':
      return <FooterSection {...commonProps} />;
    default:
      return null;
  }
};


  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="border border-white/10 rounded-lg p-4 bg-white/5 mb-4 hover:bg-white/10 transition"
    >
      <div className="max-w-3xl mx-auto w-full">{renderSection()}</div>
    </div>
  );
}

export default function PreviewArea({ sections, onEdit, onReorder, onDelete }: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = sections.findIndex((s) => s.id === active.id);
      const newIndex = sections.findIndex((s) => s.id === over?.id);
      const reordered = arrayMove(sections, oldIndex, newIndex);
      onReorder(reordered);
    }
  };

  return (
    <div className="w-full">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext items={sections.map((s) => s.id)} strategy={verticalListSortingStrategy}>
          {sections.map((section) => (
            <SortableItem
              key={section.id}
              section={section}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </SortableContext>
      </DndContext>
      
    </div>
  );
}
