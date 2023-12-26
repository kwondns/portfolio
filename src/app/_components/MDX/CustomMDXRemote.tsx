import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import MDXImage from '@/components/MDX/MDXImage';
import MDXRowContainer from '@/components/MDX/MDXRowContainer';
import MDXUl from '@/components/MDX/MDXUl';
import MDXH2 from '@/components/MDX/MDXH2';
import MDXTable from '@/components/MDX/MDXTable';
import MDXHr from '@/components/MDX/MDXHr';
import MDXCode from '@/components/MDX/MDXCode';

export default function CustomMDXRemote({ source }: { source: string }) {
  const MdxComponents = {
    img: MDXImage,
    RowContainer: MDXRowContainer,
    ul: MDXUl,
    h2: MDXH2,
    Table: MDXTable,
    hr: MDXHr,
    Code: MDXCode,
  };
  return <MDXRemote source={source} components={MdxComponents} />;
}
