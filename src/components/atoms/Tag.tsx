import Color from 'tailwindcss/colors';
import { DefaultColors } from 'tailwindcss/types/generated/colors';

import { Typo } from '@/atoms';

type DefaultType = 'front' | 'back' | 'etc';

type TagProps = {
  color: keyof DefaultColors | DefaultType;
  value: string;
  isNote?: boolean;
  isActive?: boolean;
};

const tagBase =
  'text-center rounded-2xl border px-2 py-1 border-stone-600 dark:border-stone-300 transition dark:hover:text-white';
const colors = Object.keys(Color).map((color) => ({ [color]: `${tagBase} text-${color}-400 hover:bg-${color}-500` }));
const style = Object.assign(
  {
    front: `${tagBase} text-red-600 dark:text-red-400 hover:bg-red-500 `,
    back: `${tagBase} text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 `,
    etc: `${tagBase} text-blue-600 dark:text-blue-400 hover:bg-blue-500`,
  },
  ...colors,
);
export default function Tag(props: TagProps) {
  const { color, value } = props;
  return <Typo className={style[color]}>{value}</Typo>;
}

Tag.defaultProps = {
  isNote: false,
  isActive: false,
};
