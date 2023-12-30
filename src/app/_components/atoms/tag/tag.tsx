import { TagStackType, TagType } from '@/types/stackType';
import { spanCss, tagCss } from '@/components/atoms/tag/tag.css';
import SpanBase from '@/components/atoms/base/spanBase';

type TagProps = TagType & { type: TagStackType };
export default function Tag(props: TagProps) {
  const { type, value } = props;
  return (
    <SpanBase className={tagCss[type]}>
      <SpanBase className={spanCss}>{value}</SpanBase>
    </SpanBase>
  );
}
