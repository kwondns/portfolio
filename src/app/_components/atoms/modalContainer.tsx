'use client';

import React, { MouseEvent, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { modalCloseButtonCss, modalContainerCss, modalFullButtonCss } from '@/components/atoms/modalContainer.css';

export default function ModalContainer({ children }: { children: React.ReactNode }) {
  const route = useRouter();
  const currentPath = usePathname();

  const onClickStopPropagation = (event: MouseEvent) => event.stopPropagation();

  const onClickClose = useCallback(() => {
    route.back();
  }, [route]);

  return (
    <div className={modalContainerCss} onClick={onClickStopPropagation} role="presentation">
      <button className={modalCloseButtonCss} type="button" onClick={onClickClose}>
        <span className="material-symbols-outlined">close</span>
      </button>
      <Link className={modalFullButtonCss} href={currentPath} target="_parent">
        <span className="material-symbols-outlined">fullscreen</span>
      </Link>
      {children}
    </div>
  );
}
