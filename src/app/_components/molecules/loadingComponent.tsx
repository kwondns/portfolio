import { centerContainerCss } from '@/components/molecules/centerContainer.css';
import Spinner from '@/components/atoms/spinner';

export default function LoadingComponent() {
  return (
    <div className={centerContainerCss}>
      <p>Loading...</p>
      <Spinner />
    </div>
  );
}
