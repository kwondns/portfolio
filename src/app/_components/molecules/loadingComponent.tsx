import { centerContainerCss } from '@/components/molecules/centerContainer.css';
import Spinner from '@/components/atoms/spinner';
import Container from '@/components/atoms/container';

export default function LoadingComponent() {
  return (
    <Container className={centerContainerCss}>
      <p>Loading...</p>
      <Spinner />
    </Container>
  );
}
