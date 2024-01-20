import { Menu } from '@/molecules';
import { ThemeButton } from '@/atoms';

export default function HeaderTemplate() {
  return (
    <header className="col-start-2 col-end-3 mb-4 flex items-center justify-between px-1 py-2 md:px-4 md:py-3 ">
      <ThemeButton />
      <Menu />
    </header>
  );
}
