'use client';

import { useTypingEffect } from '@/hooks/useTypingEffect';

export function TypingRole() {
  const roles = ['Full-Stack Developer', 'AWS 클라우드 개발자', 'DevOps 엔지니어'];
  const displayText = useTypingEffect(roles);

  return (
    <span className="text-2xl font-medium text-primary">
      {displayText}
      <span className="animate-blink ">|</span>
    </span>
  );
}
