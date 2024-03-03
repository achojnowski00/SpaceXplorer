import { FC } from 'react';
import clsx from 'clsx';

import { APP_NAME } from 'CONSTANTS';

import './app-name.scss';

const AppName: FC<IProps> = ({ className }) => {
  return <span className={clsx('app-name', className)}>{APP_NAME}</span>;
};

type IProps = IComponent;

export default AppName;
