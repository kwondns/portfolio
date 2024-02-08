import { Link } from 'react-router-dom';

import { Img, Typo } from '@/atoms';
import { StackType } from '@/types';

type StackProps = StackType.StackType;
export default function Stack(props: StackProps) {
  const { name, url, img } = props;
  return (
    <Link
      className="flex flex-col justify-between gap-y-2 rounded-2xl border-2 border-stone-600/50 p-2 text-center shadow-button transition-all hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-button-hover active:-translate-x-[3px] active:translate-y-[3px] active:shadow-none dark:border-stone-400/25"
      to={url ?? ''}
    >
      <Img
        className="m-auto aspect-auto max-h-[80px] min-h-[80px] w-full min-w-[80px] max-w-[80px] object-contain"
        src={`${import.meta.env.VITE_SUPABASE_BUCKET_URL}/${img}`}
      />
      <Typo className="break-words text-xs sm:text-lg">{name}</Typo>
    </Link>
  );
}
