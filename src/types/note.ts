import { DefaultColors } from 'tailwindcss/types/generated/colors';

export type NoteType = {
  id: string;
  img: string;
  link: string;
  tags: string[];
  tags_color: [keyof DefaultColors];
  title: string;
  created_at: string;
};

export type NoteTagType = {
  tag: string;
  color: keyof DefaultColors;
};

export type NoteTagColorType = {
  [key: string]: keyof DefaultColors;
};
