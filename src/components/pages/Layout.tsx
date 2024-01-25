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
    <Div className="grid max-h-full grid-cols-[5%_1fr_5%] grid-rows-[auto_1fr] md:grid-cols-[10%_1fr_10%]">
      <HeaderTemplate />
      <main className="col-start-2 row-start-2 max-w-full overflow-y-scroll scroll-smooth" ref={mainRef}>
        <Outlet />
      </main>
      <TopButton onClickTopButton={onClickTopButton} />
    </Div>
  );
}
