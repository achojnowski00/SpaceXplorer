import { FC } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import AppName from '../AppName';
import Flex from '../Flex';
import RoutesList from 'src/pages/HomePage/items/RoutesList';

import { RoutesMap } from 'src/utils/RoutesMap';
import ROUTES from 'src/ROUTES';

import RouteClass from 'src/utils/RouteClass';

import './navigation-bar.scss';

const NavigationBar: FC<IProps> = ({ className, appLogoRoute = ROUTES.missions }) => {
  return (
    <Flex gap="30px" className={clsx('navigation-bar', className)}>
      <Link to={appLogoRoute.path} className="navigation-bar__title">
        <AppName />
      </Link>

      <RoutesList
        customRouteItemAnimationVariants={{ initial: {}, target: {} }}
        className="navigation-bar__routes-list"
        itemsClassName="routes-list__item"
        routes={RoutesMap}
      />
    </Flex>
  );
};

type IProps = IComponent & {
  /**
   * Where user will be redirected on clicking app logo in navigation
   *
   * @defaultValue {@link ROUTES.missions}
   */
  appLogoRoute?: RouteClass;
};

export default NavigationBar;
