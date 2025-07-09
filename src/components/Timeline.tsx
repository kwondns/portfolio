type TimelineProps = {
  children: React.ReactNode;
};
const beforeHorizontalLine =
  "before:content-[''] before:absolute xl:before:left-0 xl:before:top-1/2 xl:before:w-full xl:before:h-0.5 xl:before:bg-primary xl:[&_.timeline-marker]:left-1/2";
const beforeVerticalLine =
  "before:content-[''] before:absolute before:top-0 before:w-0.5 before:h-full before:bg-primary max-xl:[&_.timeline-marker]:top-1/2";

const beforeVerticalLineSmall = `${beforeVerticalLine} before:right-0`;
const beforeVerticalLineMedium = `${beforeVerticalLine} md:before:right-1/2`;

const smallStyle = `${beforeVerticalLineSmall} max-xl:grid-cols-subgrid max-md:grid-cols-1 max-md:pr-8 max-md:[&_.timeline-marker]:-right-10 gap-2`;

const mediumStyle = `${beforeVerticalLineMedium}
  md:max-xl:grid-cols-2
  md:max-xl:[&>*:nth-child(odd)]:justify-self-start
  md:max-xl:[&>*:nth-child(even)]:justify-self-end
  md:max-xl:[&>*]:col-span-2
  md:max-xl:[&>*]:w-1/2
  md:max-xl:[&>*:nth-child(odd)]:pr-4
  md:max-xl:[&>*:nth-child(even)]:pl-4
  md:max-xl:[&>*:nth-child(odd)>.timeline-marker]:-right-2
  md:max-xl:[&>*:nth-child(even)>.timeline-marker]:-left-2
`;

const largeStyle = `${beforeHorizontalLine}
  xl:grid-cols-[repeat(4,_minmax(230px,_1fr))]
  xl:grid-rows-2
  xl:grid-flow-col
  xl:[&>*:nth-child(1)]:col-start-1
  xl:[&>*:nth-child(2)]:col-start-2
  xl:[&>*:nth-child(3)]:col-start-3
  xl:[&>*:nth-child(4)]:col-start-4
  xl:[&>*:nth-child(odd)]:row-start-1
  xl:[&>*:nth-child(even)]:row-start-2
  xl:gap-y-8
  xl:items-center
  xl:[&>*:nth-child(odd)>.timeline-marker]:-bottom-6
  xl:[&>*:nth-child(even)>.timeline-marker]:-top-6
`;
export default function Timeline(props: TimelineProps) {
  const { children } = props;
  return <div className={`grid relative mt-4 ${smallStyle} ${mediumStyle} ${largeStyle}`}>{children}</div>;
}
