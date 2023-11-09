import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
  stack: React.ReactNode;
  profile: React.ReactNode;
};
export default function Layout({ children, profile, stack }: LayoutProps) {
  return (
    <>
      <div id="about">{children}</div>
      <div id="profile">{profile}</div>
      <div id="stack" style={{ height: 'fit-content' }}>
        {stack}
      </div>
    </>
  );
}
