import { ProjectModalType } from '@/types/project';
import ImageSlider from '@/components/ImageSlider';
import BentoGrid from '@/components/BentoGrid';
import BentoCard from '@/components/BentoCard';
import Typography from '@/components/Typography';
import Chips from '@/components/Chips';
import Link from 'next/link';
import DynamicIcon from '@/components/DynamicIcon';

const FlexBentoCard = ({ title, content }: { title: string; content: string }) => {
  return (
    <BentoCard>
      <div className="flex justify-between items-center">
        <span className="text-info">{title}</span>
        <span className="text-text">{content}</span>
      </div>
    </BentoCard>
  );
};

export default async function ProjectModal(props: ProjectModalType) {
  const {
    modal_content,
    modal_role,
    link,
    db,
    front_tag,
    back_tag,
    shorten_content,
    date,
    images,
    title,
    preview_image,
  } = props;
  return (
    <>
      <ImageSlider images={[preview_image, ...images]} />
      <div className="p-6">
        <h2 className="text-3xl font-bold my-4 text-primary">{title}</h2>
        <Typography color="info" type="content">
          {shorten_content}
        </Typography>
        <div className="flex flex-col gap-4 mt-4">
          <BentoGrid>
            <FlexBentoCard title="날짜" content={date} />
            <FlexBentoCard title="역할" content={modal_role} />
            <FlexBentoCard title="DB" content={db} />
          </BentoGrid>
          <BentoCard className="border-l-primary border-l-6">
            <Typography color="text" type="title">
              프로젝트 개요
            </Typography>
            <Typography color="info" type="content" className="whitespace-pre-line">
              {modal_content}
            </Typography>
          </BentoCard>
          <BentoCard>
            <Typography color="text" type="title">
              기술 스택
            </Typography>
            <div className="w-full mt-2" />
            <Typography color="info" type="small">
              프론트엔드
            </Typography>
            <Chips tags={front_tag} />
            <div className="w-full mt-2" />
            <Typography color="info" type="small">
              백엔드
            </Typography>
            <Chips tags={back_tag} />
          </BentoCard>
          <Link
            className="flex items-center-safe text-lg gap-2 bg-secondary-active self-center focus:ring-4 focus:ring-primary rounded-xl hover:ring-primary-hover hover:ring-4 transition-all focus:outline-none text-text p-4"
            href={link}
          >
            프로젝트 방문하기
            <DynamicIcon name="externalLink" />
          </Link>
        </div>
      </div>
    </>
  );
}
