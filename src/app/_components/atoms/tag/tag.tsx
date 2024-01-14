import { assignInlineVars } from '@vanilla-extract/dynamic';
import { TagStackType, TagType } from '@/types/stackType';
import { noteTagColor, noteTagCss, spanCss, tagActiveCss, tagCss } from '@/components/atoms/tag/tag.css';
import SpanBase from '@/components/atoms/base/spanBase';

// eslint-disable-next-line react/require-default-props
type TagProps = TagType & { type: TagStackType | string; isNote?: boolean; isActive?: boolean };
export default function Tag(props: TagProps) {
  const { type, value, isNote = false, isActive = false } = props;
  return (
    <SpanBase
      className={`${isNote ? noteTagCss : tagCss[type as TagStackType]} ${isActive && tagActiveCss}`}
      style={isNote ? assignInlineVars({ [noteTagColor]: type }) : {}}
    >
      <SpanBase className={spanCss}>{value}</SpanBase>
    </SpanBase>
  );
}
