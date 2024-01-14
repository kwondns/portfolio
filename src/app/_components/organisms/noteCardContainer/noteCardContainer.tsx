import { Suspense } from 'react';
import Container from '@/components/atoms/base/container';
import { useNoteContext } from '@/hooks/useNote';
import NoteCard from '@/components/organisms/noteCard/noteCard';
import { noteCardContainerCss } from '@/components/organisms/noteCardContainer/noteCardContainer.css';
import SkeletonContainer from '@/components/atoms/skeleton/skeletonContainer';
import WaveSkeleton from '@/components/atoms/skeleton/waveSkeleton';

export default function NoteCardContainer() {
  const { result } = useNoteContext();
  return (
    <Container className={noteCardContainerCss}>
      <Suspense
        fallback={
          <SkeletonContainer>
            <WaveSkeleton />
          </SkeletonContainer>
        }
      >
        {result.map((note, index) => {
          return <NoteCard key={note.public_url} note={note} index={index} />;
        })}
      </Suspense>
    </Container>
  );
}
