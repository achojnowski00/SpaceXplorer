import ROUTES from 'ROUTES';

import RouteClass from 'src/utils/RouteClass';

export type IRouteMapItem = {
  route: RouteClass<any, any>;
  text: string;
  /**
   * Wether {@link text} will be translated or not
   */
  textType?: ITextType;
};

export const RoutesMap: IRouteMapItem[] = [
  {
    route: ROUTES.missions,
    text: 'routes:missions',
    textType: 'translation',
  },
  {
    route: ROUTES.favoriteMissions,
    text: 'routes:favorite_missions',
    textType: 'translation',
  },
  {
    route: ROUTES.aboutSpaceX,
    text: 'routes:about_space_x',
    textType: 'translation',
  },
];
