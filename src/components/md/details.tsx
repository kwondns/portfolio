export default function details(props: any) {
  const { node, ...others } = props;
  return <details className="mb-2 list-inside [&>:not(summary)]:ps-6 " {...others} />;
}
