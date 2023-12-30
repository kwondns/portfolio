import React from 'react';
import ModalWrapper from '@/components/atoms/modalWrapper/modalWrapper';
import ModalContainer from '@/components/atoms/modalContainer/modalContainer';

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <ModalWrapper>
      <ModalContainer>{children}</ModalContainer>
    </ModalWrapper>
  );
}
