type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  color?: 'text' | 'info';
  type?: 'title' | 'content' | 'small';
};
export default function Typography(props: TypographyProps) {
  const { children, className, color, type = 'content' } = props;
  const textColor = color ? `text-${color}` : '';
  let size: string;
  switch (type) {
    case 'title':
      size = 'text-base md:text-lg lg:text-xl xl:text-2xl';
      break;
    case 'content':
      size = 'text-sm md:text-base lg:text-lg xl:text-xl';
      break;
    case 'small':
      size = 'text-xs md:text-sm lg:text-base xl:text-sm';
      break;
  }
  return <span className={`${size} ${textColor} ${className ?? ''}`}>{children}</span>;
}
