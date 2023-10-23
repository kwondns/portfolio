import Link from 'next/link';
import { linkButtonBase, linkButtonCss } from '@/components/atoms/navButton.css';

type NavButtonProps = { value: 'about' | 'profile' | 'stack' | 'project'; isActive: boolean };
export default function NavButton(props: NavButtonProps) {
  const { value, isActive } = props;
  return (
    <Link
      key={value}
      className={isActive ? linkButtonCss.active : linkButtonBase}
      href={`/${value === 'about' ? '' : value}`}
    >
      {value}
    </Link>
  );
}
