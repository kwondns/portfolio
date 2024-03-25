import { useRecoilValue } from 'recoil';

import { NavButton } from '@/atoms';
import { NavStore } from '@/stores';

const MenuList = ['about', 'profile', 'stack', 'project'] as const;
export default function Menu() {
  const isActive = useRecoilValue(NavStore.NavLocationSelector);
  return (
    <nav className="flex gap-x-2 md:gap-x-3 lg:gap-x-5">
      {MenuList.map((menu) => (
        <NavButton key={menu} target={menu} isActive={menu === isActive} />
      ))}
    </nav>
  );
}
