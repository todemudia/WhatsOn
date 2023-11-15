import React from 'react';
import clsx from 'clsx';
import { IconProps } from './types';

const Icon = ({
  className,
  style: styleProp,
  children,
  size,
  xmlns = 'http://www.w3.org/2000/svg',
  role = 'presentation',
  ...props
}: IconProps) => {
  const style = styleProp || {};
  if (size) {
    style.width = style.height = `${size}px`;
  }
  return (
    <svg
      className={clsx('Icon', className)}
      style={style}
      xmlns={xmlns}
      role={role}
      {...props}
    >
      {children}
    </svg>
  );
};

export default Icon;
