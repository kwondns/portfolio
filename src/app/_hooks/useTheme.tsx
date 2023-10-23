'use client';

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { darkTheme, lightTheme } from '@/styles/theme.css';

type Ttheme = 'light' | 'dark';
interface ThemeContextType {
  theme: Ttheme;
  setTheme: Dispatch<SetStateAction<Ttheme>>;
}

export const InitThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContext = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Ttheme>('light');
  useEffect(() => {
    const themeLocalStorage = localStorage.getItem('theme') as Ttheme;
    const themeSystem = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    if (themeLocalStorage) setTheme(themeLocalStorage);
    else {
      setTheme(themeSystem);
      localStorage.setItem('theme', themeSystem);
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      setTheme(event.matches ? 'dark' : 'light');
    });
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {});
    };
  }, []);
  useEffect(() => {
    if (theme === 'light') document.body.className = lightTheme;
    else document.body.className = darkTheme;
  }, [theme]);

  const contextValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);
  return <InitThemeContext.Provider value={contextValue || null}>{children}</InitThemeContext.Provider>;
};

export function useThemeContext() {
  const state = useContext(InitThemeContext);
  if (!state) throw new Error('Cannot find Provider');
  return state;
}
