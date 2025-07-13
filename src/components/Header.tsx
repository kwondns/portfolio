'use client';

import { useEffect, useRef, useState } from 'react';
import NavLinkSectionObserverClient from '@/components/NavLinkSectionObserverClient';
import { useSelectedLayoutSegments } from 'next/navigation';

const THRESHOLD = 15;
const NAV = ['Home', 'About', 'Project', 'Contact'];

export default function Header() {
  // modal 슬롯 아래 활성 세그먼트만 읽기
  const modalSegments = useSelectedLayoutSegments('modal');
  // children 슬롯 아래 활성 세그먼트만 읽기
  const childrenSegments = useSelectedLayoutSegments('children');

  const [isVisible, setIsVisible] = useState(true);
  const lastY = useRef(0);
  const flag = useRef(false);
  const headerRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState('Home');
  const updateActiveSection = (section: string) => {
    setActive(section);
  };
  useEffect(() => {
    lastY.current = window.scrollY;

    const updateHeader = () => {
      const currentY = window.scrollY;

      if (currentY > lastY.current + THRESHOLD * 3) {
        // 아래로 스크롤 → 헤더 숨김
        setIsVisible(false);
      } else if (currentY < lastY.current - THRESHOLD) {
        // 위로 스크롤 → 헤더 표시
        setIsVisible(true);
      }
      lastY.current = currentY;
      flag.current = false;
    };

    const onScroll = () => {
      if (!flag.current) {
        window.requestAnimationFrame(updateHeader);
        flag.current = true;
      }
    };

    // Project Detail 페이지에선 항상 열리도록 추가
    if (childrenSegments[0] !== 'project') window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // 모달이 열리면 무조건 숨김
  useEffect(() => {
    if (modalSegments.length > 1) {
      setIsVisible(false);
    }
  }, [modalSegments]);

  useEffect(() => {
    if (childrenSegments[0] === 'project') {
      setActive('Project');
    }
  }, [childrenSegments]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 inset-x-0 z-50 py-3 backdrop-blur-md bg-background/80 border-b border-border transition-transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      role="banner"
      aria-label="Main navigation"
    >
      <nav className="container mx-auto flex gap-4 justify-center text-lg text-text">
        {NAV.map((section) => (
          <NavLinkSectionObserverClient
            key={section}
            section={section}
            isActive={active === section}
            action={updateActiveSection}
          />
        ))}
      </nav>
    </header>
  );
}
