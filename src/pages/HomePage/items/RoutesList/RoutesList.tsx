import { FC } from 'react';
import clsx from 'clsx';

import RouteItem from '../RouteItem';

import { IRouteMapItem } from 'utils/RoutesMap';
import { IAnimatedListVariants } from '../RouteItem/RouteItem';

import './routes-list.scss';

const RoutesList: FC<IProps> = ({
  className,
  routes,
  itemsClassName,
  onItemClick,
  customRouteItemAnimationVariants,
}) => {
  return (
    <div className={clsx('routes-list', className)}>
      {routes.map((el, idx) => (
        <RouteItem
          customAnimationVariants={customRouteItemAnimationVariants}
          onClick={onItemClick}
          key={el.route.path}
          className={itemsClassName}
          route={el}
          customDelay={idx}
        />
      ))}
    </div>
  );
};

type IProps = IComponent & {
  routes: IRouteMapItem[];
  itemsClassName?: string;
  customRouteItemAnimationVariants?: IAnimatedListVariants;
  onItemClick?: VoidFunction;
};

export default RoutesList;
