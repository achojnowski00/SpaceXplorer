import Route from './utils/Route';

export default {
  home: new Route('/'),
  aboutSpaceX: new Route('/about'),
  missions: new Route('/missions'),
  favoriteMissions: new Route('/favorite-missions'),
  missionDetails: new Route<{ missionId: string }>('/mission-details/:missionId'),
};
