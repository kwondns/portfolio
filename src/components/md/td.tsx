export default function td(props: any) {
  const { node, ...others } = props;
  return <td className="border border-slate-700 p-4" {...others} />;
}
