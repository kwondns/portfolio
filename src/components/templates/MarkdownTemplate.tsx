import MarkdownPreview from '@uiw/react-markdown-preview';
import { Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import { Element } from 'hast';

import {
  a,
  blockquote,
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
  source: string;
};

const imgLazyLoading: Plugin = () => (tree) => {
  visit(tree, 'element', (node: Element) => {
    if (node.tagName === 'img' && node.properties) {
      // eslint-disable-next-line no-param-reassign
      node.properties.loading = 'lazy';
    }
  });
};

export default function MarkdownTemplate(props: MarkdownTemplateProps) {
  const { source } = props;
  return (
    <MarkdownPreview
      source={source}
      components={{
        a,
        blockquote,
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
      className="my-4 bg-inherit text-inherit"
      rehypeRewrite={(node, _, parent) => {
        if ('tagName' in node && node.tagName && parent && 'tagName' in parent && parent.tagName) {
          if (node.tagName === 'a' && /^h([1-6])/.test(parent.tagName)) {
            // eslint-disable-next-line no-param-reassign
            parent.children = parent.children.slice(1);
          }
        }
      }}
      rehypePlugins={[imgLazyLoading]}
    />
  );
}
