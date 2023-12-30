import SkeletonContainer from '@/components/atoms/skeleton/skeletonContainer';
import WaveSkeleton from '@/components/atoms/skeleton/waveSkeleton';

export default function Loading() {
  return (
    <>
      <SkeletonContainer>
        <WaveSkeleton />
      </SkeletonContainer>
      <SkeletonContainer>
        <WaveSkeleton />
      </SkeletonContainer>
      <SkeletonContainer>
        <WaveSkeleton />
      </SkeletonContainer>
    </>
  );
}
