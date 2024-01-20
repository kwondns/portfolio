import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';

import { Main, Profile, Stack } from '@/templates';
import { Div } from '@/atoms';
import { NavStore } from '@/stores';
import { generateObserver } from '@/libs';

export default function About() {
  const setLocation = useSetRecoilState(NavStore.LocationAtom);
  useEffect(() => {
    const aboutElement = document.getElementById('about');
    const profileElement = document.getElementById('profile');
    const stackElement = document.getElementById('stack');

    const elements = [
      { ref: aboutElement, action: () => setLocation('about') },
      { ref: profileElement, action: () => setLocation('profile') },
      { ref: stackElement, action: () => setLocation('stack') },
    ];

    generateObserver(elements);
  }, []);
  return (
    <Div className="grid grid-rows-[0.5fr_1fr_1fr]">
      <Main />
      <Profile />
      <Stack />
    </Div>
  );
}
