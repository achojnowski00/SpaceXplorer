import { FC } from 'react';
import clsx from 'clsx';

import RouteItem from '../RouteItem';

import { IRouteMapItem } from './RoutesMap';

import './routes-list.scss';

const RoutesList: FC<IProps> = ({ className, routes }) => {
  return (
    <div className={clsx('routes-list', className)}>
      {routes.map((el, idx) => (
        <RouteItem key={el.route.path} route={el} customDelay={idx} />
      ))}
    </div>
  );
};

type IProps = IComponent & {
  routes: IRouteMapItem[];
};

export default RoutesList;
