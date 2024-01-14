'use client';

import { MouseEvent } from 'react';
import { TagsType } from '@/types/note';
import NoteSearch from '@/components/molecules/noteSearch/noteSearch';
import Container from '@/components/atoms/base/container';
import {
  noteFilterContainerCss,
  noteFilterTagContainerCss,
  noteTagButtonCss,
} from '@/components/organisms/noteSearch/noteFilter.css';
import Tag from '@/components/atoms/tag/tag';
import ButtonBase from '@/components/atoms/base/buttonBase';
import { useNoteContext } from '@/hooks/useNote';

type NoteSearchProps = { tags: TagsType[] };
export default function NoteFilter(props: NoteSearchProps) {
  const { tags } = props;
  const { tag, setTag } = useNoteContext();
  const onClickTag = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.id === tag) setTag('');
    else setTag(event.currentTarget.id);
  };

  return (
    <Container className={noteFilterContainerCss}>
      <NoteSearch />
      <Container className={noteFilterTagContainerCss}>
        {tags.map((noteTag) => (
          <ButtonBase className={noteTagButtonCss} key={noteTag.name} id={noteTag.name} onClick={onClickTag}>
            <Tag value={noteTag.name} type={noteTag.color} isNote isActive={noteTag.name === tag} />
          </ButtonBase>
        ))}
      </Container>
    </Container>
  );
}
