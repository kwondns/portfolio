'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { useSelectedLayoutSegments } from 'next/navigation';

export default function NavLinkSectionObserverClient({
  section,
  isActive,
  action,
}: {
  section: string;
  isActive: boolean;
  action: (section: string) => void;
}) {
  const childrenSegments = useSelectedLayoutSegments('children');
  useEffect(() => {
    const id = section.toLowerCase();
    const sectionElement = document.getElementById(id);
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          action(section);
        }
      },
      { rootMargin: '0px', threshold: 0.3 },
    );

    observer.observe(sectionElement);
    return () => {
      observer.disconnect();
    };
  }, [childrenSegments]);
  return (
    <Link
      href={`/#${section.toLowerCase()}`}
      className={`hover:text-primary-hover text-sm sm:text-lg sm:px-2 focus:ring-4 focus:ring-primary/40 focus:outline-none rounded-lg ${isActive ? 'text-primary' : ''}`}
    >
      {section}
    </Link>
  );
}
