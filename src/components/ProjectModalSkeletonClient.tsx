'use client';

import React from 'react';

export default function ProjectModalSkeleton() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/50">
      <div className="w-11/12 max-w-[1400px] h-[85dvh] bg-surface rounded-lg animate-pulse border-[1px] border-focus-ring"></div>
    </div>
  );
}
