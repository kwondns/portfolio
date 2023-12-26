'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { useEffect, useState } from 'react';
import { collapseCss, navCss } from '@/components/molecules/nav.css';
import isMobile from '@/hooks/useDevice';
import NavButton from '@/components/atoms/navButton/navButton';
import Container from '@/components/atoms/base/container';
import IconBase from '@/components/atoms/base/iconBase';
import ButtonBase from '@/components/atoms/base/buttonBase';

type NavContentProps = {
  menu: readonly ['about', 'profile', 'stack', 'project'];
  isActive: 'about' | 'project';
  currentLocation: string;
  onClickCollapse: () => void;
};
const NavContent = ({ menu, isActive, currentLocation, onClickCollapse }: NavContentProps) => {
  return (
    <nav className={navCss}>
      {menu.map((value) => {
        return (
          <NavButton
            key={value}
            value={value}
            isActive={
              (isActive === value && value === 'project') || (isActive !== 'project' && currentLocation === value)
            }
            onClick={onClickCollapse}
          />
        );
      })}
    </nav>
  );
};

export default function Nav() {
  const menu = ['about', 'profile', 'stack', 'project'] as const;
  const currentSegment = useSelectedLayoutSegment();
  const isActive = currentSegment === '(about)' ? 'about' : 'project';
  const [currentLocation, setCurrentLocation] = useState('');
  const [collapse, setCollapse] = useState<boolean>(false);
  const onClickCollapse = () => {
    setCollapse(!collapse);
  };

  useEffect(() => {
    const aboutElement = document.getElementById('about');
    const profileElement = document.getElementById('profile');
    const stackElement = document.getElementById('stack');

    const elements = [
      { ref: aboutElement, action: () => setCurrentLocation('about') },
      { ref: profileElement, action: () => setCurrentLocation('profile') },
      { ref: stackElement, action: () => setCurrentLocation('stack') },
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetElement = elements.find((el) => el.ref === entry.target);
            if (targetElement) {
              targetElement.action();
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      },
    );

    if (aboutElement) {
      observer.observe(aboutElement);
    }
    if (profileElement) {
      observer.observe(profileElement);
    }
    if (stackElement) {
      observer.observe(stackElement);
    }
    return () => {
      if (aboutElement) {
        observer.unobserve(aboutElement);
      }
      if (profileElement) {
        observer.unobserve(profileElement);
      }
      if (stackElement) {
        observer.unobserve(stackElement);
      }
    };
  }, [currentSegment]);

  return isMobile() ? (
    <>
      <ButtonBase onClick={onClickCollapse}>
        <IconBase>menu</IconBase>
      </ButtonBase>
      <Container className={collapseCss[collapse ? 'active' : 'deactivate']}>
        <NavContent
          menu={menu}
          isActive={isActive}
          currentLocation={currentLocation}
          onClickCollapse={onClickCollapse}
        />
      </Container>
    </>
  ) : (
    <NavContent menu={menu} isActive={isActive} currentLocation={currentLocation} onClickCollapse={onClickCollapse} />
  );
}
