import React, { CSSProperties, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import clsx from 'clsx';

import BackgroundImage from 'assets/images/background.png';

import RoutesList from './items/RoutesList';

import { RoutesMap } from './items/RoutesList/RoutesMap';
import ROUTES from 'ROUTES';
import { APP_NAME } from 'CONSTANTS';

import './home-page.scss';

const HomePage: React.FC<IProps> = ({ className }) => {
  useEffect(() => {
    document.title = ROUTES.home.title || APP_NAME;
  }, []);

  return (
    <div className={clsx('home-page', className)} style={backgroundStyles}>
      <div className="home-page__content">
        <motion.p
          className="home-page__title"
          initial="initial"
          animate="target"
          variants={variants}
        >
          {APP_NAME}
        </motion.p>

        <RoutesList routes={RoutesMap} className="home-page__routes-list" />
      </div>
    </div>
  );
};

const backgroundStyles: CSSProperties = {
  background: `url(${BackgroundImage})`,
  backgroundPosition: 'top center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const variants: Variants = {
  initial: { opacity: -1, translateX: 200 },
  target: {
    opacity: 1,
    translateX: 0,
    scale: 1,
    transition: { duration: 1, ease: 'circOut' },
  },
};

type IProps = IComponent;

export default HomePage;
