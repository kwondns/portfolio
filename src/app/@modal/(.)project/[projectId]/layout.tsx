'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import LockScrollModalClient from '@/components/LockScrollModalClient';

interface ModalLayoutProps {
  children: ReactNode;
}

export default function ProjectModalLayout({ children }: ModalLayoutProps) {
  const router = useRouter();

  const close = () => {
    // 닫기 시 scroll-behavior 임시 변경 후 뒤로가기
    // 1) CSS smooth 스크롤 해제
    document.documentElement.style.scrollBehavior = 'auto';
    // 2) 뒤로 가기 수행 (모달 닫기 & URL 복원)
    router.back();
    // 3) 원래 CSS 상태로 복원
    // delay를 약간 주어 레이스 컨디션 방지
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 10);
  };
  return (
    <LockScrollModalClient open action={close}>
      {children}
    </LockScrollModalClient>
  );
}
