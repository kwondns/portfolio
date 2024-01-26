import { Img } from '@/atoms';

export default function img(props: any) {
  const { node, src, ...others } = props;
  return (
    <Img
      className="mx-auto my-4 max-h-[400px] w-auto md:max-w-[600px]"
      src={`${import.meta.env.VITE_SUPABASE_BUCKET_URL}/${src}`}
      {...others}
    />
  );
}
