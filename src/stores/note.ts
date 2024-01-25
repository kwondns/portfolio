import { atom } from 'recoil';

export const SelectedTagAtom = atom<string>({
  key: 'selectedTagAtom',
  default: '',
});
