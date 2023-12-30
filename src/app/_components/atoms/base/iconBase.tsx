import React from 'react';
import SpanBase from '@/components/atoms/base/spanBase';

type IconBaseProps = {
  // eslint-disable-next-line react/require-default-props
  className?: React.ReactNode;
  children: React.ReactNode;
};
export default function IconBase(props: IconBaseProps) {
  const { className = '', children } = props;
  return <SpanBase className={`material-symbols-outlined ${className}`}>{children}</SpanBase>;
}
