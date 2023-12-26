'use client';

import { themeTriggerButtonCss } from '@/components/atoms/themeTriggerButton/themeTriggerButton.css';
import { useThemeContext } from '@/hooks/useTheme';
import ButtonBase from '@/components/atoms/base/buttonBase';

export default function ThemeTriggerButton() {
  const { theme, setTheme } = useThemeContext();

  const onClickButton = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  // eslint-disable-next-line jsx-a11y/control-has-associated-label
  return <ButtonBase id="theme-trigger" className={themeTriggerButtonCss[theme]} onClick={onClickButton} />;
}
