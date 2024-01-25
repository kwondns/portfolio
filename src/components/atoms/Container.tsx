import React from 'react';

import { Div } from '@/atoms';

type ContainerProps = {
  className?: string;
  type: 'profile' | 'tag';
  children: React.ReactNode;
};

const profile =
  'backdrop-blur-md bg-neutral-300/30 hover:bg-gray-500/25 dark:hover:bg-neutral-600  transition  border-2 border-stone-700/50 dark:border-stone-300/50 min-w-[60%] my-4 p-4 gap-y-10 opacity-0 rounded-2xl';
const tag = 'flex flex-wrap gap-1 md:gap-2 mb-2';
const style = { profile, tag };
export default function Container(props: ContainerProps) {
  const { children, className = '', type } = props;

  return <Div className={`${style[type]} ${className}`}>{children}</Div>;
}

Container.defaultProps = {
  className: '',
};
