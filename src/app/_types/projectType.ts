import { SimpleTagType } from '@/types/stackType';

export type ProjectType = {
  id: string;
  previewImage: string;
  title: string;
  shortenContent: string;
  content: string;
  date: string;
  frontTag: SimpleTagType[];
  backTag: SimpleTagType[];
  DBTag: string;
};

export type ProjectDetailType = Omit<ProjectType, 'shortenContent' | 'previewImage' | 'date' | 'id'>;
