export default function h3(props: any) {
  const { node, ...others } = props;
  return <h3 className="text-lg lg:text-xl" {...others} />;
}
