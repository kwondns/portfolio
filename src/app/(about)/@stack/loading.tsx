import SkeletonContainer from '@/components/atoms/skeletonContainer';
import WaveSkeleton from '@/components/atoms/waveSkeleton';

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
