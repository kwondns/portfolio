import React from 'react';
import ModalWrapper from '@/components/atoms/modalWrapper';
import ModalContainer from '@/components/atoms/modalContainer';

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <ModalWrapper>
      <ModalContainer>{children}</ModalContainer>
    </ModalWrapper>
  );
}
