import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from '.';
import { IRouteMapItem } from 'utils/RoutesMap';

describe('RoutesList', () => {
  it('should render all routes items', () => {
    const mockedRoutes: IRouteMapItem[] = [
      {
        text: 'route1',
        route: {
          path: 'route1path',
          route: 'route1route',
          get: () => 'route1path',
        },
      },
      {
        text: 'route2',
        route: {
          path: 'route2path',
          route: 'route2route',
          get: () => 'route2path',
        },
      },
    ];

    render(
      <BrowserRouter>
        <RoutesList routes={mockedRoutes} />
      </BrowserRouter>,
    );

    mockedRoutes.forEach((el) => {
      expect(screen.getByText(el.text)).toBeInTheDocument();
    });
  });
});
