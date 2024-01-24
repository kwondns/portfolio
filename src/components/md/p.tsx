export default function p(props: any) {
  const { node, ...others } = props;
  return <p className="mb-3 text-lg md:text-xl" {...others} />;
}
