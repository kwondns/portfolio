'use client';

import { HTMLProps, useEffect, useRef, useState } from 'react';
import { useObserver } from '@/hooks/useObserver';

type SkillProficiencyProps = HTMLProps<HTMLProgressElement>;

export default function SkillProficiency(props: SkillProficiencyProps) {
  const { value } = props;
  const [percent, setPercent] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const isShown = useObserver(elementRef);
  const hasAnimated = useRef(false);
  useEffect(() => {
    if (isShown && !hasAnimated.current)
      setTimeout(() => {
        hasAnimated.current = true;
        setPercent(value as number);
      }, 300);
  }, [isShown]);
  return (
    <div className="bg-secondary-active w-full h-2 rounded-full" ref={elementRef}>
      <div className="bg-timeline-marker h-2 z-100 rounded-full transition-all" style={{ width: `${percent}%` }} />
    </div>
  );
}
