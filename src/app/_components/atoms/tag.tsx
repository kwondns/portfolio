import Link from 'next/link';
import { StackType, TagType } from '@/types/tagType';
import { linkCss, tagCss } from '@/components/atoms/tag.css';

type TagProps = TagType & { type: StackType };
export default function Tag(props: TagProps) {
  const { type, link, value } = props;
  return (
    <span className={tagCss[type]}>
      {link ? (
        <Link className={linkCss} href={link} target="_blink">
          {value}
        </Link>
      ) : (
        value
      )}
    </span>
  );
}
