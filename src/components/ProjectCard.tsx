import BentoCard from '@/components/BentoCard';
import Link from 'next/link';
import { ProjectType } from '@/types/project';
import Typography from '@/components/Typography';
import Chips from '@/components/Chips';
import DynamicIcon from '@/components/DynamicIcon';

export default function ProjectCard(props: ProjectType) {
  const { id, shorten_content, date, db, front_tag, back_tag, role, context, title, link } = props;
  const shownFrontEnd = front_tag.slice(0, 2);
  const shownBackend = back_tag.slice(0, 2);
  return (
    <BentoCard className="!p-0 justify-between relative after:content-['🔍'] after:absolute after:top-4 after:right-4 after:-z-20 after:opacity-0 hover:after:opacity-90 after:transition-opacity">
      <Link href={`/project/${id}`} scroll={false} className="p-4">
        <div>
          <Typography color="text" type="title">
            {title}
          </Typography>
        </div>
        <Typography color="info">{shorten_content}</Typography>
        <div className="border-[0.5px] w-full my-2 md:my-4 lg:my-6 xl:my-8 border-text-secondary" />
        <Typography color="info">{context}</Typography>
        <div />
        <div className="flex justify-between items-center py-2">
          <span className="text-sm text-primary">{date}</span>
          <Typography type="small" color="info">
            {role}
          </Typography>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <Chips tags={[...shownFrontEnd, ...shownBackend, db]} />
        </div>
      </Link>
      <div className="p-4">
        <Link
          className="flex justify-self-start items-center-safe sm:text-lg gap-2 bg-secondary-active self-center focus:ring-2 focus:ring-primary rounded-xl hover:ring-primary-hover hover:ring-2 transition-all focus:outline-none text-text py-2 px-4"
          href={link}
        >
          <Typography color="text">바로가기</Typography>
          <DynamicIcon name="externalLink" />
        </Link>
      </div>
    </BentoCard>
  );
}
