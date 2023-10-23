'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { useState } from 'react';
import { collapseCss, navCss } from '@/components/molecules/nav.css';
import isMobile from '@/hooks/useDevice';
import NavButton from '@/components/atoms/navButton';

export default function Nav() {
  const menu = ['about', 'profile', 'stack', 'project'] as const;
  const currentSegment = useSelectedLayoutSegment();
  const isActive = currentSegment ?? 'about';

  const [collapse, setCollapse] = useState<boolean>(false);

  const onClickCollapse = () => {
    setCollapse(!collapse);
  };

  const NavContent = () => {
    return (
      <nav className={navCss}>
        {menu.map((value) => {
          return <NavButton key={value} value={value} isActive={isActive === value} />;
        })}
      </nav>
    );
  };

  return isMobile() ? (
    <button type="button" onClick={onClickCollapse}>
      <span className="material-symbols-outlined">menu</span>
      {collapse && <div className={collapseCss}>{NavContent()}</div>}
    </button>
  ) : (
    NavContent()
  );
}
