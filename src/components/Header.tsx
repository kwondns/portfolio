'use client';

import { useEffect, useRef, useState } from 'react';
import NavLinkSectionObserverClient from '@/components/NavLinkSectionObserverClient';

const THRESHOLD = 15;
const NAV = ['Home', 'About', 'Project', 'Contact'];

export default function Header() {
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

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 inset-x-0 z-50 py-3 backdrop-blur-md bg-background/80 border-b border-border transition-transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
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
