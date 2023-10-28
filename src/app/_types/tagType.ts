export type TagStackType = 'front' | 'back' | 'etc' | 'DB';

export type SimpleTagType = string;

export type TagType = { value: SimpleTagType; link?: string | null };

export type StackType = { [key: string]: TagType[] };
