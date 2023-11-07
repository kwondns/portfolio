import { TagStackType, TagType } from '@/types/tagType';
import { spanCss, tagCss } from '@/components/atoms/tag.css';

type TagProps = TagType & { type: TagStackType };
export default function Tag(props: TagProps) {
  const { type, value } = props;
  return (
    <span className={tagCss[type]}>
      <span className={spanCss}>{value}</span>
    </span>
  );
}
