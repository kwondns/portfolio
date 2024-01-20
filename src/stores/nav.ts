import { atom, selector } from 'recoil';

export const NavAtom = atom<string>({
  key: 'navAtom',
  default: 'about',
});

export const NavSelector = selector<string>({
  key: 'navSelector',
  get: ({ get }) => {
    const currentLocation = get(NavAtom);
    if (currentLocation === '/') return 'about';
    return currentLocation.replace('/', '');
  },
  set: ({ set }, newValue) => {
    if (newValue === 'profile' || newValue === 'stack') set(NavAtom, 'about');
    else set(NavAtom, newValue);
  },
});

export const LocationAtom = atom<string>({
  key: 'locationAtom',
  default: 'about',
});

export const NavLocationAtom = atom<string>({
  key: 'navLocationAtom',
  default: 'about',
});

export const NavLocationSelector = selector({
  key: 'navLocationSelector',
  get: ({ get }) => {
    const nav = get(NavAtom);
    const location = get(LocationAtom);
    let returnValue = nav;
    if (nav === '') {
      if (location === 'about') returnValue = 'about';
      if (location === 'profile') returnValue = 'profile';
      if (location === 'stack') returnValue = 'stack';
    }
    return returnValue;
  },
});
