'use client';

import dynamic from 'next/dynamic';
import { IconKey, Icons } from '@/constants/Icons';

const DynamicIcon = ({ name, size = 20 }: { name: IconKey; size?: number }) => {
  const IconComponent = Icons[name];
  const Loaded = dynamic(() => Promise.resolve(IconComponent), { ssr: false });
  return (
    <span className="inline-flex items-center justify-center w-5 h-5">
      <Loaded size={size} aria-label={name} />
    </span>
  );
};

export default DynamicIcon;
