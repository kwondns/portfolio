import Link from 'next/link';
import { linkButtonBase, linkButtonCss } from '@/components/atoms/navButton/navButton.css';

type NavButtonProps = {
  value: 'about' | 'profile' | 'stack' | 'project' | 'note';
  isActive: boolean;
  onClick: () => void;
};
export default function NavButton(props: NavButtonProps) {
  const { value, isActive, onClick } = props;
  let link = '/project';
  if (value === 'about') link = '/#about';
  else if (value === 'profile') link = '/#profile';
  else if (value === 'stack') link = '/#stack';
  else if (value === 'note') link = '/note';
  return (
    <Link key={value} className={isActive ? linkButtonCss.active : linkButtonBase} href={link} onClick={onClick}>
      {value}
    </Link>
  );
}
