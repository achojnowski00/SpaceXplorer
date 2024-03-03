import { CSSProperties, FC, ReactNode } from 'react';
import clsx from 'clsx';

import './max-width-content-wrapper.scss';

const MaxWidthContentWrapper: FC<IProps> = ({ className, children, maxWidth = 1920 }) => {
  const style: CSSProperties = {
    maxWidth,
  };

  return (
    <div style={style} className={clsx('max-width-content-wrapper', className)}>
      {children}
    </div>
  );
};

type IProps = IComponent & {
  children: ReactNode;
  /**
   * @defaultValue `1920`
   */
  maxWidth?: number;
};

export default MaxWidthContentWrapper;
