import { centerContainerCss } from '@/components/molecules/centerContainer.css';
import Spinner from '@/components/atoms/spinner/spinner';
import Container from '@/components/atoms/base/container';

export default function LoadingComponent() {
  return (
    <Container className={centerContainerCss}>
      <p>Loading...</p>
      <Spinner />
    </Container>
  );
}
