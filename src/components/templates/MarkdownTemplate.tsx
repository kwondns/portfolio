import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import {
  a,
  blockquote,
  code,
  details,
  GridCol2Container,
  GridCol3Container,
  h1,
  h2,
  h3,
  hr,
  img,
  li,
  ol,
  p,
  RowContainer,
  summary,
  table,
  td,
  th,
  ul,
} from '@/md';

type MarkdownTemplateProps = {
  children: string;
};
export default function MarkdownTemplate(props: MarkdownTemplateProps) {
  const { children } = props;
  return (
    <Markdown
      components={{
        a,
        blockquote,
        code,
        h1,
        h2,
        h3,
        hr,
        img,
        li,
        p,
        ul,
        ol,
        table,
        th,
        td,
        summary,
        details,
        rowcontainer: RowContainer,
        gridcol2container: GridCol2Container,
        gridcol3container: GridCol3Container,
      }}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      className="mt-4"
    >
      {children}
    </Markdown>
  );
}
