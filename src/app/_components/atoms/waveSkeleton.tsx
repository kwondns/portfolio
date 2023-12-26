import { waveSkeletonCss } from '@/components/atoms/waveSkeleton.css';
import Container from '@/components/atoms/container';

export default function WaveSkeleton() {
  return <Container className={waveSkeletonCss} />;
}
