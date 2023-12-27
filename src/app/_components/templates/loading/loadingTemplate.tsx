import { centerContainerCss } from '@/styles/centerContainer.css';
import Spinner from '@/components/atoms/spinner/spinner';
import Container from '@/components/atoms/base/container';

export default function LoadingTemplate() {
  return (
    <Container className={centerContainerCss}>
      <p>Loading...</p>
      <Spinner />
    </Container>
  );
}
