'use client';

import { useOnMouseWithDelay } from '@/hooks/useOnMouseWithDelay';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

type ProjectPrefetchOnHoverClientProps = {
  projectId: string;
  children: React.ReactNode;
};
export default function ProjectPrefetchOnHoverClient(props: ProjectPrefetchOnHoverClientProps) {
  const { children, projectId } = props;
  const called = useRef<boolean>(false);
  const router = useRouter();
  const prefetchWithData = async () => {
    if (!called.current) {
      router.prefetch(`/project/${projectId}`);
      await fetch(`/api/project/${projectId}`);
      called.current = true;
    }
  };
  const { onMouseEnter, onMouseLeave } = useOnMouseWithDelay(prefetchWithData);

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
}
