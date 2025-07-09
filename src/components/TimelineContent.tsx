import BentoCard from '@/components/BentoCard';
import TimelineMarker from '@/components/TimelineMarker';

type TimelineContentProps = {
  year: string;
  content: string;
  company: string;
  role: string;
};
export default function TimelineContent(props: TimelineContentProps) {
  const { year, content, role, company } = props;
  return (
    <div className="relative">
      <BentoCard noGap>
        <span className="text-sm text-primary mb-1">{year}</span>
        <span className="text-lg text-text">{role}</span>
        <span className="text-base text-blue-400 mb-1">{company}</span>
        <span className="text-base text-info">{content}</span>
      </BentoCard>
      <TimelineMarker />
    </div>
  );
}
