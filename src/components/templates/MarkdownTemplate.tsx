import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { a, blockquote, code, h1, h2, hr, img, li, p, RowContainer, table, td, th, ul } from '@/md';

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
        hr,
        img,
        li,
        p,
        ul,
        table,
        th,
        td,
        rowcontainer: RowContainer,
      }}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      className="mt-4"
    >
      {children}
    </Markdown>
  );
}
