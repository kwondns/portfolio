import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
  stack: React.ReactNode;
  profile: React.ReactNode;
};
export default function Layout({ children, profile, stack }: LayoutProps) {
  return (
    <>
      {children}
      {profile}
      {stack}
    </>
  );
}
