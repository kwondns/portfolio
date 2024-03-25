import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

type LinkProps = {
  // eslint-disable-next-line react/require-default-props
  className?: string;
  children: React.ReactNode;
  to: string;
};
export default function Link(props: LinkProps) {
  const { className = '', children, to } = props;
  return (
    <RouterLink
      className={`relative flex items-center after:absolute after:inset-x-0 after:-bottom-2 after:h-1 after:origin-bottom after:scale-0 after:bg-stone-700/50 after:transition-all after:content-[''] hover:after:scale-100 hover:after:bg-stone-700 dark:text-stone-300/80 dark:after:bg-stone-300/50 dark:hover:text-stone-300 dark:hover:after:bg-stone-300 ${className}`}
      to={to}
    >
      {children}
    </RouterLink>
  );
}
