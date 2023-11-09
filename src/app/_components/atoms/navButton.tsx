import Link from 'next/link';
import { linkButtonBase, linkButtonCss } from '@/components/atoms/navButton.css';

type NavButtonProps = { value: 'about' | 'profile' | 'stack' | 'project'; isActive: boolean; onClick: () => void };
export default function NavButton(props: NavButtonProps) {
  const { value, isActive, onClick } = props;
  let link = '/project';
  if (value === 'about') link = '/#about';
  else if (value === 'profile') link = '/#profile';
  else if (value === 'stack') link = '/#stack';
  return (
    <Link key={value} className={isActive ? linkButtonCss.active : linkButtonBase} href={link} onClick={onClick}>
      {value}
    </Link>
  );
}
