'use client';

import { themeTriggerButtonCss } from '@/components/atoms/themeTriggerButton.css';
import { useThemeContext } from '@/hooks/useTheme';

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
  return <button type="button" id="theme-trigger" className={themeTriggerButtonCss[theme]} onClick={onClickButton} />;
}
