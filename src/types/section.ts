export type SectionType = 'header' | 'hero' | 'footer';

export interface SectionData {
  id: string;
  type: SectionType;
  content: any; }
