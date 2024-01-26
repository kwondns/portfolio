export default function ol(props: any) {
  const { node, ...others } = props;
  return <ul className="list-outside list-decimal ps-5" {...others} />;
}
