import { Div } from '@/atoms';

export default function GridCol2Container(props: any) {
  const { node, ...others } = props;
  return (
    <Div
      className="grid grid-cols-2 content-center gap-x-4 [&_*]:max-w-full [&_*]:self-center [&_p]:text-base"
      {...others}
    />
  );
}
