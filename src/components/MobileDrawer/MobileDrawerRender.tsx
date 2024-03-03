import { FC } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import AppName from '../AppName';
import Flex from '../Flex';
import ClickAway from '../ClickAway';
import RoutesList from 'src/pages/HomePage/items/RoutesList';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ROUTES from 'src/ROUTES';

import DrawerIcon from 'assets/icons/drawer_icon.svg';
import CloseIcon from 'assets/icons/close_icon.svg';

import RouteClass from 'src/utils/RouteClass';
import { RoutesMap } from 'src/utils/RoutesMap';

import './mobile-drawer.scss';

const MobileDrawerRender: FC<IProps> = ({
  className,
  appLogoRoute,
  isOpen,
  setClose,
  setOpen,
  onRouteItemClick,
}) => {
  return (
    <div className={clsx('mobile-drawer', className)}>
      <Flex className="mobile-drawer__header">
        <div className="mobile-drawer__icon mobile-drawer__icon--open" onClick={setOpen}>
          <DrawerIcon />
        </div>
        <Link
          to={appLogoRoute.path}
          className={clsx('mobile-drawer__title mobile-drawer__title--centered', {
            'mobile-drawer__title--dimmed': isOpen,
          })}
        >
          <AppName />
        </Link>
      </Flex>

      <ClickAway
        onClickAway={setClose}
        className={clsx('mobile-drawer__content', {
          'mobile-drawer__content--visible': isOpen,
        })}
      >
        <Flex className="content__header">
          <Link to={appLogoRoute.path}>
            <AppName className="mobile-drawer__title" />
          </Link>
          <div className="mobile-drawer__icon" onClick={setClose}>
            <CloseIcon />
          </div>
        </Flex>

        <RoutesList
          onItemClick={onRouteItemClick}
          className="content__routes-list"
          itemsClassName="routes-list__item"
          routes={RoutesMap}
        />
      </ClickAway>
    </div>
  );
};

type IProps = IComponent & {
  isOpen: boolean;
  /**
   * Where user will be redirected on clicking app logo in navigation
   *
   * @defaultValue {@link ROUTES.missions}
   */
  appLogoRoute: RouteClass;
  onRouteItemClick: VoidFunction;
  setOpen: VoidFunction;
  setClose: VoidFunction;
};

export default MobileDrawerRender;
