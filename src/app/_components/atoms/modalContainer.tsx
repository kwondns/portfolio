'use client';

import React, { MouseEvent, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { modalCloseButtonCss, modalContainerCss } from '@/components/atoms/modalContainer.css';

export default function ModalContainer({ children }: { children: React.ReactNode }) {
  const route = useRouter();
  const onClickStopPropagation = (event: MouseEvent) => event.stopPropagation();

  const onClickClose = useCallback(() => {
    route.back();
  }, [route]);

  return (
    <div className={modalContainerCss} onClick={onClickStopPropagation} role="presentation">
      <button className={modalCloseButtonCss} type="button" onClick={onClickClose}>
        <span className="material-symbols-outlined">close</span>
      </button>
      {children}
    </div>
  );
}
