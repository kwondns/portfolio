'use client';

import useDevice from '@/hooks/useDevice';
import { SimpleTagType } from '@/types/tagType';
import TagContainer from '@/components/atoms/tagContainer';
import Tag from '@/components/atoms/tag';

type CardTagContainerProps = { frontTag: SimpleTagType[]; backTag: SimpleTagType[]; DBTag: string };
export default function ProjectTagContainer(props: CardTagContainerProps) {
  const { frontTag, backTag, DBTag } = props;
  const isMobile = useDevice();
  if (isMobile) {
    return (
      <TagContainer>
        {frontTag.map((tag) => {
          return <Tag key={`front_${tag}`} type="front" value={tag} />;
        })}
        {backTag.map((tag) => {
          return <Tag key={`back_${tag}`} type="back" value={tag} />;
        })}
        <Tag value={DBTag} type="etc" />
      </TagContainer>
    );
  }
  return (
    <>
      <TagContainer>
        {frontTag.map((tag) => {
          return <Tag key={`front_${tag}`} type="front" value={tag} />;
        })}
      </TagContainer>
      <TagContainer>
        {backTag.map((tag) => {
          return <Tag key={`back_${tag}`} type="back" value={tag} />;
        })}
      </TagContainer>
      <TagContainer>
        <Tag value={DBTag} type="etc" />
      </TagContainer>
    </>
  );
}
