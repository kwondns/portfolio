'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const NavLink = ({ target }: { target: string }) => {
  return (
    <Link href={`/#${target.toLowerCase()}`} className="hover:text-primary-hover focus:ring focus:ring-primary">
      {target}
    </Link>
  );
};
const THRESHOLD = 15;

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const lastY = useRef(0);
  const flag = useRef(false);
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    lastY.current = window.scrollY;

    const updateHeader = () => {
      const currentY = window.scrollY;

      if (currentY > lastY.current + THRESHOLD) {
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
        <NavLink target="Home" />
        <NavLink target="About" />
        <NavLink target="Project" />
        <NavLink target="Contact" />
      </nav>
    </header>
  );
}
