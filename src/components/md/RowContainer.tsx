import { Div } from '@/atoms';

export default function RowContainer(props: any) {
  const { node, ...others } = props;
  return <Div className="flex justify-evenly" {...others} />;
}
