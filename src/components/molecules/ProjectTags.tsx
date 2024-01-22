import { Container, Tag } from '@/atoms';

type ProjectTagsProps = {
  frontTag: string[];
  backTag: string[];
  db: string;
};
export default function ProjectTags(props: ProjectTagsProps) {
  const { frontTag, backTag, db } = props;
  return (
    <>
      <Container type="projectTag">
        {frontTag.map((front) => (
          <Tag key={front} color="front" value={front} />
        ))}
      </Container>
      <Container type="projectTag">
        {backTag.map((back) => (
          <Tag key={back} color="back" value={back} />
        ))}
      </Container>
      <Tag color="etc" value={db} />
    </>
  );
}
