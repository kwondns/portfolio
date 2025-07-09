type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  color?: 'text' | 'info';
};
export default function Typography(props: TypographyProps) {
  const { children, className, color } = props;
  const textColor = color ? `text-${color}` : '';
  return (
    <span className={`text-sm md:text-base lg:text-lg xl:text-xl ${className ?? ''} ${textColor}`}>{children}</span>
  );
}
