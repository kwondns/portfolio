export default function table(props: any) {
  const { node, ...others } = props;
  return <table className="mx-auto table-auto border-separate border border-slate-500 p-2" {...others} />;
}
