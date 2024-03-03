import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { IRouteMapItem } from 'utils/RoutesMap';
import RouteItem from '.';

const mockedRoute: IRouteMapItem = {
  text: 'route',
  route: {
    path: 'routePath',
    route: 'routeRoute',
    get: () => 'routePath',
  },
};

describe('RouteItem', () => {
  it('should render all route item', () => {
    render(
      <BrowserRouter>
        <RouteItem route={mockedRoute} />
      </BrowserRouter>,
    );

    expect(screen.getByText(mockedRoute.text)).toBeInTheDocument();
  });
});
