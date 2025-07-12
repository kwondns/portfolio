import Chip from '@/components/Chip';

type ChipsProps = {
  tags: string[];
};
export default function Chips(props: ChipsProps) {
  const { tags } = props;
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag) => (
        <Chip key={tag}>{tag}</Chip>
      ))}
    </div>
  );
}
