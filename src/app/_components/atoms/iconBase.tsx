import React from 'react';

type IconBaseProps = {
  // eslint-disable-next-line react/require-default-props
  className?: React.ReactNode;
  children: React.ReactNode;
};
export default function IconBase(props: IconBaseProps) {
  const { className = '', children } = props;
  return <span className={`material-symbols-outlined ${className}`}>{children}</span>;
}
