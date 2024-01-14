'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { useEffect, useState } from 'react';
import { collapseCss, navCss } from '@/components/molecules/nav/nav.css';
import isMobile from '@/hooks/useDevice';
import NavButton from '@/components/atoms/navButton/navButton';
import Container from '@/components/atoms/base/container';
import IconBase from '@/components/atoms/base/iconBase';
import ButtonBase from '@/components/atoms/base/buttonBase';
import { generateObserver } from '@/components/molecules/nav/generateObserver';

type NavContentProps = {
  menu: readonly ['about', 'profile', 'stack', 'project', 'note'];
  isActive: 'about' | 'project' | 'note';
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
              (isActive === value && value === 'project') ||
              (isActive === value && value === 'note') ||
              (isActive !== 'project' && isActive !== 'note' && currentLocation === value)
            }
            onClick={onClickCollapse}
          />
        );
      })}
    </nav>
  );
};

export default function Nav() {
  const menu = ['about', 'profile', 'stack', 'project', 'note'] as const;
  const currentSegment = useSelectedLayoutSegment();
  let isActive: 'about' | 'note' | 'project' = 'about';
  switch (currentSegment) {
    case 'note':
      isActive = 'note';
      break;
    case 'project':
      isActive = 'project';
      break;
    default:
      break;
  }
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

    generateObserver(elements);
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
