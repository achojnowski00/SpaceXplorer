import RouteClass from './utils/RouteClass';
import { APP_NAME } from 'CONSTANTS';

export default {
  home: new RouteClass('/', APP_NAME),
  aboutSpaceX: new RouteClass('/about'),
  missions: new RouteClass<undefined, { page: string }>('/missions'),
  favoriteMissions: new RouteClass('/favorite-missions'),
  missionDetails: new RouteClass<{ missionId: string }>('/mission-details/:missionId'),
};

export const AppRoutes = {
  home: 'home',
  aboutSpaceX: 'aboutSpaceX',
  missions: 'missions',
  favoriteMissions: 'favoriteMissions',
  missionDetails: 'missionDetails',
} as const;

export type IAppRoutes = keyof typeof AppRoutes;
