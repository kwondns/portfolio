type BentoCardProps = {
  children: React.ReactNode;
  className?: string;
  noGap?: boolean;
};
export default function BentoCard(props: BentoCardProps) {
  const { children, className, noGap = false } = props;
  return (
    <div
      className={`flex flex-col ${noGap ? '' : 'gap-2'} bg-surface p-4 rounded-2xl border-card-border border-[1px] ${className ?? ''}`}
    >
      {children}
    </div>
  );
}
