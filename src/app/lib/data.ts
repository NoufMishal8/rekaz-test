export type SectionType = 'header' | 'hero' | 'footer';

export interface SectionData {
  id: string;
  type: SectionType;
  content: {
    title?: string;
    description?: string;
    imageUrl?: string;
  };
}

export const defaultSections: Record<SectionType, () => SectionData> = {
  header: () => ({
    id: crypto.randomUUID(),
    type: 'header',
    content: {
      title: 'Welcome to My Site',
    },
  }),
  hero: () => ({
    id: crypto.randomUUID(),
    type: 'hero',
    content: {
      title: 'Explore Our Features',
      description: 'We help you build beautiful websites easily.',
    },
  }),
  footer: () => ({
    id: crypto.randomUUID(),
    type: 'footer',
    content: {
      title: '© 2025 Rekaz',
    },
  }),
};
