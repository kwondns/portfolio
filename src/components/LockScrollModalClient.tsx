'use client';

import { ReactNode, useEffect } from 'react';
import DynamicIcon from '@/components/DynamicIcon';

interface Props {
  open: boolean;
  action: () => void;
  children: ReactNode;
}

export default function LockingModal({ open, action, children }: Props) {
  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.documentElement.style.scrollBehavior = 'auto';

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
    };
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-background/50 flex items-center justify-center" onClick={action}>
      <div
        className="relative border-[1px] border-focus-ring bg-surface rounded-lg w-11/12 max-w-[1400px] max-h-[85dvh] overflow-y-scroll modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute text-center top-4 right-4 z-50 leading-0 text-white/60 hover:text-white:80 active:text-white hover:bg-info/80 active:bg-info rounded-full p-1"
          onClick={action}
        >
          <DynamicIcon name="close" />
        </button>
        {children}
      </div>
    </div>
  );
}
