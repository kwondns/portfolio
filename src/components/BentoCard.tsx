import FadeInComponentClient from '@/components/FadeInComponentClient';

type BentoCardProps = {
  children: React.ReactNode;
  className?: string;
  noGap?: boolean;
};
export default function BentoCard(props: BentoCardProps) {
  const { children, className, noGap = false } = props;
  return (
    <FadeInComponentClient>
      <div
        className={`flex flex-col ${noGap ? '' : 'gap-2'} bg-secondary-active p-4 rounded-2xl border-border border-[1px] ${className ?? ''}`}
      >
        {children}
      </div>
    </FadeInComponentClient>
  );
}
