export default function li(props: any) {
  const { node, ...others } = props;
  return <li className="mb-1 text-lg md:text-xl" {...others} />;
}
