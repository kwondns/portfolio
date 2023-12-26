'use client';

import { useCallback } from 'react';
import useDevice from '@/hooks/useDevice';
import { SimpleTagType } from '@/types/stackType';
import TagContainer from '@/components/atoms/tagContainer/tagContainer';
import Tag from '@/components/atoms/tag/tag';

type CardTagContainerProps = { frontTag: SimpleTagType[]; backTag: SimpleTagType[]; DBTag: string };

const Tags = (tags: string[], type: 'front' | 'back') => {
  return tags.map((tag) => <Tag key={`${type}_${tag}`} value={tag} type={type} />);
};

export default function ProjectTagContainer(props: CardTagContainerProps) {
  const { frontTag, backTag, DBTag } = props;
  const isMobile = useDevice();
  const FrontTag = useCallback(() => Tags(frontTag, 'front'), [frontTag]);
  const BackTag = useCallback(() => Tags(backTag, 'back'), [backTag]);
  if (isMobile) {
    return (
      <TagContainer>
        <FrontTag />
        <BackTag />
        <Tag value={DBTag} type="etc" />
      </TagContainer>
    );
  }
  return (
    <>
      <TagContainer>
        <FrontTag />
      </TagContainer>
      <TagContainer>
        <BackTag />
      </TagContainer>
      <TagContainer>
        <Tag value={DBTag} type="etc" />
      </TagContainer>
    </>
  );
}
