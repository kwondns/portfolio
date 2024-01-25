import { MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';

import { Div, Tag, Typo } from '@/atoms';
import { NoteStore } from '@/stores';
import { LoaderType } from '@/types';
import { useNote } from '@/hooks';
import { noteLoader } from '@/pages';

export default function NoteFilter() {
  const { tag: tagInit } = useLoaderData() as LoaderType.LoaderDataType<typeof noteLoader>;
  const { data: tags } = useQuery({ ...useNote.useNoteTag(), initialData: tagInit });

  if (tags === undefined) return <Typo>오류가 발생했습니다.</Typo>;
  const [selectedTag, setSelectedTag] = useRecoilState(NoteStore.SelectedTagAtom);
  const onClickTag = (event: MouseEvent<HTMLSpanElement>) => {
    setSelectedTag((prev) => {
      if (prev === event.currentTarget.id) return '';
      return event.currentTarget.id;
    });
  };

  return (
    <Div className="flex gap-2 md:row-start-2 md:flex-col">
      {tags.map((tag) => (
        <Tag
          className="cursor-pointer"
          key={tag.tag}
          id={tag.tag}
          onClick={onClickTag}
          color={tag.color}
          value={tag.tag}
          isActive={selectedTag === tag.tag}
        />
      ))}
    </Div>
  );
}
