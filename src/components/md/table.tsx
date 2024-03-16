export default function table(props: any) {
  const { node, ...others } = props;
  return (
    <table className="mx-auto my-2 table-auto border-separate border border-slate-500 p-2 text-stone-300" {...others} />
  );
}
