import React from 'react';

type IconBaseProps = {
  className?: React.ReactNode;
  children: React.ReactNode;
};
export default function IconBase(props: IconBaseProps) {
  const { className, children } = props;
  return <span className={`material-symbols-outlined ${className}`}>{children}</span>;
}
