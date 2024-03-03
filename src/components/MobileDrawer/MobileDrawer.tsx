import { FC } from 'react';

import useToggle from 'hooks/useToggle';

import MobileDrawerRender from './MobileDrawerRender';

import RouteClass from 'src/utils/RouteClass';

import ROUTES from 'src/ROUTES';

const MobileDrawer: FC<IProps> = ({ className, appLogoRoute = ROUTES.missions }) => {
  const [isOpen, { setFalse, setTrue }] = useToggle(false);

  const handleRouteItemClick = () => {
    setFalse();
  };

  return (
    <MobileDrawerRender
      onRouteItemClick={handleRouteItemClick}
      className={className}
      isOpen={isOpen}
      setClose={setFalse}
      setOpen={setTrue}
      appLogoRoute={appLogoRoute}
    />
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

export default MobileDrawer;
