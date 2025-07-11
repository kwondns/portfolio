import Typography from '@/components/Typography';
import TimelineContent from '@/components/TimelineContent';
import Timeline from '@/components/Timeline';
import TIMELINE from '@/constants/timeline';
import Stack from '@/components/Stack';

export default function About() {
  return (
    <section id="about" className="text-text mx-12 mt-24 text-xl">
      <div className="flex justify-center">
        <h2 className="mx-auto text-4xl font-bold gradient-title">자기소개</h2>
      </div>
      <div className="max-w-10/12 mx-auto mt-8 mb-32 text-center break-keep whitespace-break-spaces">
        <Typography color="info">
          안녕하세요! 저는 권한준입니다.
          <br />
          <br /> TypeScript를 기반으로 React·NestJS로 풀스택 애플리케이션을 개발부터 AWS 클라우드 인프라 구축까지 전체
          개발 생명주기를 관리하는 풀스택 개발자입니다.
          <br />
          <br />
          React Native 웹뷰 앱을 앱스토어·플레이스토어에 배포한 경험이 있습니다. Terraform IaC로 AWS 인프라 설계·자동화
          파이프라인을 구축했으며, 지속적인 개선과 안정적인 운영을 통해 사용자 경험을 높이고자 합니다.
          <br />
        </Typography>
      </div>
      <Timeline>
        {TIMELINE.map(({ year, content, company, role }) => (
          <TimelineContent key={content} year={year} content={content} company={company} role={role} />
        ))}
      </Timeline>
      <Stack />
    </section>
  );
}
