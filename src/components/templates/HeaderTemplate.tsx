import { Menu } from '@/molecules';
import { ThemeButton } from '@/atoms';

export default function HeaderTemplate() {
  return (
    <header className="fixed inset-x-0 top-0 z-[10000] mb-4 flex items-center justify-around px-1 py-2 backdrop-blur-2xl md:px-4 md:py-3">
      <ThemeButton />
      <Menu />
    </header>
  );
}
