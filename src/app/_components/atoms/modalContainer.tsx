'use client';

import React, { MouseEvent, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { modalCloseButtonCss, modalContainerCss, modalFullButtonCss } from '@/components/atoms/modalContainer.css';
import Container from '@/components/atoms/container';
import IconBase from '@/components/atoms/iconBase';

export default function ModalContainer({ children }: { children: React.ReactNode }) {
  const route = useRouter();
  const currentPath = usePathname();

  const onClickStopPropagation = (event: MouseEvent) => event.stopPropagation();

  const onClickClose = useCallback(() => {
    route.back();
  }, [route]);

  return (
    <Container className={modalContainerCss} onClick={onClickStopPropagation} role="presentation">
      <button className={modalCloseButtonCss} type="button" onClick={onClickClose}>
        <IconBase>close</IconBase>
      </button>
      <Link className={modalFullButtonCss} href={currentPath} target="_parent">
        <IconBase>fullscreen</IconBase>
      </Link>
      {children}
    </Container>
  );
}
