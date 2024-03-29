export default function h1(props: any) {
  const { node, ...others } = props;
  return <h1 className="mb-1 text-2xl lg:text-3xl" {...others} />;
}
