export default function ul(props: any) {
  const { node, ...others } = props;
  return <ul className="list-outside list-disc ps-5" {...others} />;
}
