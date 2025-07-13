'use client';

import { useObserver } from '@/hooks/useObserver';
import { useEffect, useRef, useState } from 'react';

type FadeInComponentClientProps = {
  children: React.ReactNode;
};
export default function FadeInComponentClient(props: FadeInComponentClientProps) {
  const { children } = props;
  const [flag, setFlag] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const isShown = useObserver(divRef, 0.2);
  useEffect(() => {
    if (isShown) setFlag(true);
  }, [isShown]);
  return (
    <div
      className={`transition-all ${flag ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} hover:-translate-y-1`}
      ref={divRef}
    >
      {children}
    </div>
  );
}
