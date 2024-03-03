import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layouts/Layout';
import MissionsPage from './pages/MissionsPage';
import MissionDetails from './pages/MissionDetailsPage';
import SpaceXPage from './pages/SpaceXPage';

import ROUTES from 'ROUTES';

const HomePage = lazy(() => import('./pages/HomePage'));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home.path} Component={HomePage} />

        <Route path="/" element={<Layout />}>
          <Route path={ROUTES.missions.path} Component={MissionsPage} />
          <Route path={ROUTES.missionDetails.path} Component={MissionDetails} />
          <Route path={ROUTES.aboutSpaceX.path} Component={SpaceXPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
