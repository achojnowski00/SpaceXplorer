import { FC } from 'react';
import clsx from 'clsx';

import './loader.scss';

const Loader: FC<IProps> = ({ className }) => {
  return <div role="progressbar" className={clsx('loader', className)} />;
};

type IProps = IComponent;

export default Loader;
