import Link from 'next/link';
import Container from '@/components/atoms/base/container';
import { notFoundButtonCss, notFoundTemplateCss } from '@/components/templates/notFound/notFoundTemplate.css';

type NotFoundTemplateProps = {
  segment: string;
};
export default function NotFoundTemplate(props: NotFoundTemplateProps) {
  const { segment } = props;
  return (
    <Container className={notFoundTemplateCss}>
      <h4>잘못된 요청입니다.</h4>
      <Link href={segment} className={notFoundButtonCss}>
        뒤로가기
      </Link>
    </Container>
  );
}
