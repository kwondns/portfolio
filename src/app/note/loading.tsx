import WaveSkeleton from '@/components/atoms/skeleton/waveSkeleton';
import SkeletonContainer from '@/components/atoms/skeleton/skeletonContainer';

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
      <SkeletonContainer>
        <WaveSkeleton />
      </SkeletonContainer>
    </>
  );
}
