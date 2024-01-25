import { Container, Div, Tag, Typo } from '@/atoms';
import { NoteType } from '@/types';

type NoteCardInfoProps = {
  id: string;
  note: Omit<NoteType.NoteType, 'img' | 'link' | 'id'>;
};
export default function NoteCardInfo(props: NoteCardInfoProps) {
  const { id, note } = props;
  const { tags, title, created_at: createdAt, tags_color } = note;
  return (
    <Div className="absolute inset-x-0 bottom-0 flex max-h-[40px] flex-col gap-y-1 bg-gray-200/80 p-2 backdrop-blur-sm transition-all group-hover:max-h-full dark:bg-gray-600/80 md:max-h-[60px]">
      <Div className="flex items-end justify-between md:flex-col md:items-start">
        <Typo className="text-xl">{title}</Typo>
        <Typo className="text-sm md:self-end">{new Date(createdAt).toLocaleDateString()}</Typo>
      </Div>
      <Container type="tag">
        {tags.map((tag, index) => (
          <Tag key={`${id}_${tag}`} color={tags_color[index]} value={tag} />
        ))}
      </Container>
    </Div>
  );
}
