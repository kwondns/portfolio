import { Img } from '@/atoms';

export default function img(props: any) {
  const { node, ...others } = props;
  return <Img className="mx-auto my-4 max-h-[400px] w-auto max-w-[600px]" {...others} />;
}
