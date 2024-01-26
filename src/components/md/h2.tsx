export default function h2(props: any) {
  const { node, ...others } = props;
  return <h2 className="mb-2 bg-slate-600/20 text-xl dark:bg-slate-400/20 lg:text-2xl" {...others} />;
}
