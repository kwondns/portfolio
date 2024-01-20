import React from 'react';

import { Typo } from '@/atoms';

type CodeTypoProps = {
  className?: string;
  indent?: 0 | 1 | 2 | 3 | 4;
  color: keyof typeof style.color;
  children: React.ReactNode;
};

const style = {
  indent: {
    0: '',
    1: 'pl-[2ch]',
    2: 'pl-[4ch]',
    3: 'pl-[6ch]',
    4: 'pl-[8ch]',
  },
  color: {
    orange: 'text-[#A1563E] dark:text-[#C88570]',
    yellow: 'text-[#b98120] dark:text-[#FFC66D]',
    green: 'text-[#3E7C41] dark:text-[#50A255]',
    white: 'text-[#555555] dark:text-[#A7A7A7]',
    blue: 'text-[#105D9A] dark:text-[#3397E7]',
    caption: 'text-[#747474]',
  },
};

export default function CodeTypo(props: CodeTypoProps) {
  const { className = '', indent = 0, color, children } = props;

  return <Typo className={`text-lg ${style.indent[indent]} ${style.color[color]} ${className}`}>{children}</Typo>;
}

CodeTypo.defaultProps = {
  className: '',
  indent: 0,
};
