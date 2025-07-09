import BentoGrid from '@/components/BentoGrid';
import BentoCard from '@/components/BentoCard';
import Image from 'next/image';
import Email from '@/public/email.svg';
import Github from '@/public/github.svg';
import Typography from '@/components/Typography';
import TimelineContent from '@/components/TimelineContent';
import Timeline from '@/components/Timeline';

export default function About() {
  return (
    <section className="text-text m-12 text-xl">
      <BentoGrid>
        <BentoCard>
          <h2 className="text-2xl font-bold">자기소개</h2>
          <Typography color="info">
            안녕하세요! 저는 권한준입니다.
            <br /> TypeScript 기반 웹 개발부터 AWS 클라우드 인프라 구축까지 전체 개발 생명주기를 관리하는 풀스택
            개발자입니다.
          </Typography>
        </BentoCard>
        <BentoCard>
          <h2 className="text-2xl font-bold">연락처</h2>
          <div className="flex gap-2">
            <Image src={Email} alt="email" width={20} height={20} />
            <Typography color="info">
              <a href="mailto:kwondns@gmail.com">kwondns@gmail.com</a>
            </Typography>
          </div>
          <div className="flex gap-2">
            <Image src={Github} alt="github" width={20} height={20} />
            <Typography color="info">
              <a href="https://github.com/kwondns">github.com/kwondns</a>
            </Typography>
          </div>
        </BentoCard>
      </BentoGrid>
      <Timeline>
        <TimelineContent
          year="2021"
          content="AI를 활용한 기계 절삭력 예측"
          company="한국생산기술연구원"
          role="연구원"
        />
        <TimelineContent year="2022" content="Web 생태계 이해" company="SPASS" role="인턴 개발자" />
        <TimelineContent year="2023" content="컴퓨터정보통신공학과 학사" company="홍익대학교" role="졸업" />
        <TimelineContent year="2024 - 2025" content="마이레저 웹앱 출시" company="세레머니" role="풀스택 개발자" />
      </Timeline>
    </section>
  );
}
