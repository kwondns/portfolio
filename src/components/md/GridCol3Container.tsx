import { Div } from '@/atoms';

export default function GridCol3Container(props: any) {
  const { node, ...others } = props;
  return <Div className="grid grid-cols-3 content-center gap-x-2  [&_*]:max-w-full [&_*]:self-center" {...others} />;
}
