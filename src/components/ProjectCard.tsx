import BentoCard from '@/components/BentoCard';
import Link from 'next/link';
import { ProjectType } from '@/types/project';
import Typography from '@/components/Typography';
import Chip from '@/components/Chip';

export default function ProjectCard(props: ProjectType) {
  const { id, shorten_content, date, db, front_tag, back_tag, role, context, title, link } = props;
  const shownFrontEnd = front_tag.slice(0, 2);
  const shownBackend = back_tag.slice(0, 2);
  return (
    <BentoCard className="justify-between">
      <Link href={`/project/${id}`}>
        <div className="flex justify-between items-center">
          <Typography color="text" type="title">
            {title}
          </Typography>
          <span className="text-sm text-primary">{date}</span>
        </div>
        <Typography color="info">{shorten_content}</Typography>
        <div className="border-[0.5px] w-full my-2 md:my-4 lg:my-6 xl:my-8 border-text-secondary" />
        <Typography color="info">{context}</Typography>
        <div />
        <Typography type="small" color="info">
          {role}
        </Typography>
        <div className="flex flex-wrap gap-2 mt-2">
          {shownFrontEnd.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
          {shownBackend.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
          <Chip>{db}</Chip>
        </div>
      </Link>
      <div className="pt-4">
        <Link
          href={link}
          className="bg-transparent border-[0.5px] border-card-border-inner text-text py-1.5 px-4 rounded-lg hover:bg-text hover:text-background"
        >
          바로가기
        </Link>
      </div>
    </BentoCard>
  );
}
