import React from 'react';

import { Typo } from '@/atoms';

type ProfileTypoProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
};
export default function ProfileTypo(props: ProfileTypoProps) {
  const { icon, children } = props;
  return (
    <Typo className="mb-8 flex gap-x-2.5 break-keep text-xl md:mb-4">
      {icon}
      {children}
    </Typo>
  );
}
