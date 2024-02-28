import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ROUTES from './ROUTES';

const HomePage = lazy(() => import('./pages/HomePage'));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home.path} Component={HomePage} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
