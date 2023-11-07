export type TagStackType = 'front' | 'back' | 'etc' | 'DB';

export type SimpleTagType = string;

export type TagType = { value: SimpleTagType };

export type StackButtonType = TagType & { link: string; img: string };

export type StackType = { [key: string]: StackButtonType[] };
