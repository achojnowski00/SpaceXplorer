import { FC } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Variant, motion } from 'framer-motion';

import useDynamicTranslation from 'src/hooks/useDynamicTranslation';

import { IRouteMapItem } from 'utils/RoutesMap';

import './route-item.scss';

export type IAnimatedListVariants = {
  initial: Variant;
  target: Variant;
};

const variants: IAnimatedListVariants = {
  initial: (i: number) => ({
    opacity: 0,
    translateX: 50,
    transition: {
      duration: 0.5,
      delay: i * 0.15 - i * 0.06,
    },
  }),
  target: (i: number) => ({
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15 - i * 0.06,
    },
  }),
};

const RouteItem: FC<IRouteItemProps> = ({
  className,
  route,
  customDelay = 0,
  onClick,
  customAnimationVariants,
}) => {
  const test = useDynamicTranslation(route.text, route.textType);

  return (
    <motion.div
      custom={customDelay}
      variants={customAnimationVariants || variants}
      initial="initial"
      animate="target"
      className="route-item"
      onClick={onClick}
    >
      <Link className={clsx('route-item__link', className)} to={route.route.get()}>
        {test}
      </Link>
    </motion.div>
  );
};

export type IRouteItemProps = IComponent & {
  route: IRouteMapItem;
  /**
   * Delay when initial animation will be fired
   *
   * @defaultValue `0`
   */
  customDelay?: number;
  customAnimationVariants?: IAnimatedListVariants;
  onClick?: VoidFunction;
};

export default RouteItem;
