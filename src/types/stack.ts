export type StackType = {
  name: string;
  img: string;
  url?: string;
};

export type StackTechType = 'front' | 'back' | 'etc';

export type StackCategoryType = {
  category: string;
  name: string[];
  img: string[];
  url: string[];
};
