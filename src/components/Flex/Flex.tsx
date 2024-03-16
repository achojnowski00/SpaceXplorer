import React, { FC, InsHTMLAttributes, memo, ReactNode } from 'react';
import clsx from 'clsx';

import './flex.scss';

const Flex: FC<IFlexProps> = ({
  align = 'center',
  justify = 'space-between',
  direction = 'row',
  Component = 'div',
  height,
  width,
  wrap = 'nowrap',
  children,
  className,
  gap,
  ...other
}) => {
  const classes = clsx(
    'flex',
    `align-${align}`,
    `justify-${justify}`,
    `direction-${direction}`,
    `wrap-${wrap}`,
    className,
    {
      [`height-${height}`]: height,
      [`width-${width}`]: width,
    },
  );
  const style: React.CSSProperties = {
    gap,
  };

  return (
    <Component style={style} className={classes} {...other}>
      {children}
    </Component>
  );
};

export type IFlexProps = IComponent &
  InsHTMLAttributes<HTMLDivElement | HTMLLIElement> & {
    /**
     * @defaultValue `center`
     */
    align?: 'start' | 'center' | 'end' | 'stretch';
    /**
     * @defaultValue `space-between`
     */
    justify?: 'start' | 'center' | 'end' | 'space-between';
    /**
     * @defaultValue `row`
     */
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    width?: 'auto' | 'fill';
    /**
     * @defaultValue `nowrap`
     */
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    /**
     * @defaultValue `div`
     */
    Component?: 'div' | 'li';
    height?: 'max';
    children?: ReactNode;
    gap?: string;
  };

export default memo(Flex);
