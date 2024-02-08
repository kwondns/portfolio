import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import { HeaderTemplate } from '@/templates';
import { Div, TopButton } from '@/atoms';
import { NavStore } from '@/stores';

export default function Layout() {
  const mainRef = useRef<HTMLElement>(null);
  const onClickTopButton = () => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0 });
    }
  };
  const location = useLocation();
  const setNav = useSetRecoilState(NavStore.NavSelector);
  useEffect(() => {
    setNav(location.pathname.split('/')[1]);
  }, [location]);

  return (
    <Div className="h-screen">
      <HeaderTemplate />
      <main className="x-screen scroll-smooth px-6 pt-14 md:px-12 md:pt-[4.5rem]" ref={mainRef}>
        <Outlet />
      </main>
      <TopButton onClickTopButton={onClickTopButton} />
    </Div>
  );
}
