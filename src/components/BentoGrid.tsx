type BentoGridProps = {
  children: React.ReactNode;
};
export default function BentoGrid(props: BentoGridProps) {
  const { children } = props;
  return <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">{children}</div>;
}
