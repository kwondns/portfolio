import { TagsType } from '@/types/note';
import TagContainer from '@/components/atoms/tagContainer/tagContainer';
import Tag from '@/components/atoms/tag/tag';

type NoteTagContainerProps = {
  tags: TagsType;
};
export default function NoteTagContainer(props: NoteTagContainerProps) {
  const { tags } = props;
  return (
    <TagContainer>
      {tags.map((tag) => (
        <Tag value={tag.name} type="front" />
      ))}
    </TagContainer>
  );
}
