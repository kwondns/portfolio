import Color from 'tailwindcss/colors';
import { DefaultColors } from 'tailwindcss/types/generated/colors';

import { Typo } from '@/atoms';

type DefaultType = 'front' | 'back' | 'etc';

type TagProps = {
  color: keyof DefaultColors | DefaultType;
  value: string;
  isActive?: boolean;
};

const tagBase =
  'text-center rounded-2xl border px-2 py-1 border-stone-600 dark:border-stone-300 transition hover:text-white dark:hover:text-white';
const colors = Object.keys(Color).map((color) => ({
  [color]: `${tagBase} text-${color}-600 dark:text-${color}-400 active:bg-${color}-500 hover:bg-${color}-500`,
  [`${color}-active`]: `bg-${color}-500 text-white dark:text-white`,
}));
const style = Object.assign(
  {
    front: `${tagBase} text-red-600 dark:text-red-400 hover:bg-red-500 `,
    back: `${tagBase} text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 `,
    etc: `${tagBase} text-blue-600 dark:text-blue-400 hover:bg-blue-500`,
  },
  ...colors,
);
export default function Tag(props: TagProps) {
  const { color, value, isActive = false } = props;
  return <Typo className={`${style[color]} ${isActive && style[`${color}-active`]}`}>{value}</Typo>;
}

Tag.defaultProps = {
  isActive: false,
};
