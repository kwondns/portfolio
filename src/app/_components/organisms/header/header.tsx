import { headerCss } from '@/components/organisms/header/header.css';
import Nav from '@/components/molecules/nav/nav';
import ThemeTriggerButton from '@/components/atoms/themeTriggerButton/themeTriggerButton';

export default function Header() {
  return (
    <header className={headerCss}>
      <ThemeTriggerButton />
      <Nav />
    </header>
  );
}
