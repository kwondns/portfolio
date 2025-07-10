type ChipProps = {
  children: React.ReactNode;
};
export default function Chip(props: ChipProps) {
  const { children } = props;
  return (
    <div className="rounded-full whitespace-nowrap bg-primary-active px-3 py-1 text-sm text-background font-medium">
      {children}
    </div>
  );
}
