type BentoGridProps = {
  children: React.ReactNode;
  className?: string;
};
export default function BentoGrid(props: BentoGridProps) {
  const { children, className } = props;
  return (
    <div className={`grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 ${className ?? ''}`}>{children}</div>
  );
}
