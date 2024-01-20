import { HashLink } from 'react-router-hash-link';
import { useSetRecoilState } from 'recoil';

import { NavStore } from '@/stores';

type NavProps = {
  target: string;
  isActive: boolean;
};

const NavButtonBase =
  'text-base capitalize transition ease-linear hover:-translate-x-0.5 hover:translate-y-0.5 lg:text-xl  hover:text-rose-500 dark:hover:text-red-300 md:text-lg';

const NavButtonActive = `${NavButtonBase} text-rose-500 dark:text-red-300`;
export default function NavButton(props: NavProps) {
  const { target, isActive } = props;
  const setNav = useSetRecoilState(NavStore.NavSelector);
  const link = target !== 'project' && target !== 'note' ? `#${target}` : target;
  const onClick = () => setNav(target);
  return (
    <HashLink className={isActive ? NavButtonActive : NavButtonBase} to={`/${link}`} onClick={onClick}>
      {target}
    </HashLink>
  );
}
