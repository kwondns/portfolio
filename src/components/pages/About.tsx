import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { QueryClient } from '@tanstack/react-query';

import { AboutTemplate, ProfileTemplate, StackTemplate } from '@/templates';
import { Div, Link } from '@/atoms';
import { NavStore } from '@/stores';
import { generateObserver } from '@/libs';
import { useStack } from '@/hooks';
import { StackType } from '@/types';

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
    <Div className="flex flex-col">
      <AboutTemplate />
      <ProfileTemplate />
      <StackTemplate />
      <Link to="/project" className="my-20 self-center text-2xl font-bold">
        To My Project
      </Link>
    </Div>
  );
}

export const stackLoader = (queryClient: QueryClient) => async () => {
  const query = useStack();
  return queryClient.getQueryData<StackType.StackLoaderType>(query.queryKey) ?? (await queryClient.fetchQuery(query));
};
