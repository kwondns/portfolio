'use client';

import useDevice from '@/hooks/useDevice';
import { TagType } from '@/types/tagType';
import TagContainer from '@/components/atoms/tagContainer';
import Tag from '@/components/atoms/tag';

type CardTagContainerProps = { frontTag: TagType[]; backTag: TagType[]; DBTag: string };
export default function CardProjectTagContainer(props: CardTagContainerProps) {
  const { frontTag, backTag, DBTag } = props;
  const isMobile = useDevice();
  if (isMobile) {
    return (
      <TagContainer>
        {frontTag.map((tag) => {
          return <Tag key={`front_${tag.value}`} type="front" value={tag.value} />;
        })}
        {backTag.map((tag) => {
          return <Tag key={`back_${tag.value}`} type="back" value={tag.value} />;
        })}
        <Tag value={DBTag} type="etc" />
      </TagContainer>
    );
  }
  return (
    <>
      <TagContainer>
        {frontTag.map((tag) => {
          return <Tag key={`front_${tag.value}`} type="front" value={tag.value} />;
        })}
      </TagContainer>
      <TagContainer>
        {backTag.map((tag) => {
          return <Tag key={`back_${tag.value}`} type="back" value={tag.value} />;
        })}
      </TagContainer>
      <TagContainer>
        <Tag value={DBTag} type="etc" />
      </TagContainer>
    </>
  );
}
