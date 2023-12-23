import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import MDXImage from '@/components/atoms/MDXImage';
import MDXRowContainer from '@/components/atoms/MDXRowContainer';
import MDXUl from '@/components/atoms/MDXUl';
import MDXH2 from '@/components/atoms/MDXH2';
import MDXTable from '@/components/atoms/MDXTable';
import MDXHr from '@/components/atoms/MDXHr';
import MDXCode from '@/components/atoms/MDXCode';

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
