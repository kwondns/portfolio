import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Button } from '@/atoms';
import { ThemeStore } from '@/stores';

export default function ThemeButton() {
  const theme = useRecoilValue(ThemeStore.themeSelector);
  const setTheme = useSetRecoilState(ThemeStore.themeAtom);
  const onClick = () =>
    setTheme((prevState) => {
      if (prevState === 'light') return 'dark';
      return 'light';
    });
  return <Button onClick={onClick}>{theme}</Button>;
}
