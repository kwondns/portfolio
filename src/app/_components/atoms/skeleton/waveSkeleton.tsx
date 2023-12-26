import { waveSkeletonCss } from '@/components/atoms/skeleton/waveSkeleton.css';
import Container from '@/components/atoms/base/container';

export default function WaveSkeleton() {
  return <Container className={waveSkeletonCss} />;
}
