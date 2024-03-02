import Route from './utils/Route';
import { APP_NAME } from 'CONSTANTS';

export default {
  home: new Route('/', APP_NAME),
  aboutSpaceX: new Route('/about'),
  missions: new Route('/missions'),
  favoriteMissions: new Route('/favorite-missions'),
  missionDetails: new Route<{ missionId: string }>('/mission-details/:missionId'),
};
