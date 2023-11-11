import WaveSkeleton from '@/components/atoms/waveSkeleton';
import SkeletonContainer from '@/components/atoms/skeletonContainer';

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
