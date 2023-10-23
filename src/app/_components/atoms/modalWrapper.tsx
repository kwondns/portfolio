'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect } from 'react';
import { modalWrapperCss } from '@/components/atoms/modalWrapper.css';

export default function ModalWrapper({ children }: { children: React.ReactNode }) {
  const route = useRouter();

  const onClose = useCallback(() => {
    route.back();
  }, [route]);

  const onClickBackground = useCallback(() => route.back(), [onClose]);

  const onPressEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );
  useEffect(() => {
    document.addEventListener('keydown', onPressEscape);
    return () => document.removeEventListener('keydown', onPressEscape);
  }, [onPressEscape]);

  return (
    <div className={modalWrapperCss} onClick={onClickBackground} role="presentation">
      {children}
    </div>
  );
}
