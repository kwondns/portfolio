export default function Summary(props: any) {
  const { note, ...others } = props;
  return (
    <summary
      className="mb-2 cursor-pointer [&>*]:mb-0 [&>*]:ml-2.5 [&>*]:inline-block [&>*]:bg-slate-600/20 [&>*]:dark:bg-slate-400/20"
      {...others}
    />
  );
}
