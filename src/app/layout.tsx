import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import '@/styles/globalStyle.css';
import '@/styles/globalTheme.css';
import React from 'react';
import { ThemeContext } from '@/hooks/useTheme';
import Header from '@/components/organisms/header/header';

export const metadata: Metadata = {
  title: 'Kwon Hanjun',
  description: 'Portfolio with Next.js',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <ThemeContext>
        <body>
          <Header />
          <main>{children}</main>
          <Analytics />
        </body>
      </ThemeContext>
    </html>
  );
};

export default RootLayout;
