export default function th(props: any) {
  const { node, ...others } = props;
  return <th className="bg-slate-400/20" {...others} />;
}
