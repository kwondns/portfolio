import { TagType } from '@/types/tagType';

export type ProjectPreviewType = {
  id: string;
  previewImage: string;
  title: string;
  contents: string;
  date: string;
  frontTag: TagType[];
  backTag: TagType[];
  DBTag: string;
  // progress: 'closed' | 'aborted' | 'opened';
};
