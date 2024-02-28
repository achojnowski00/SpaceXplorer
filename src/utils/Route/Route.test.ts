import Route from './Route';

type IParamsMock = {
  id: string;
};

type IOrderType = 'ASC' | 'DSC';

type IQueryMock = {
  order?: IOrderType;
  search?: string;
};

describe('Route class', () => {
  const mockedSiteName = 'mocked-site-name';
  const idMock = 'idMock';
  const orderMock: IOrderType = 'ASC';
  const searchMock = 'searchInputValueMock';
  const testRoute = new Route<IParamsMock, IQueryMock>(`/${mockedSiteName}/:id`);

  it('should create route and return correct url with params and query values', () => {
    const expectedResult = `/${mockedSiteName}/${idMock}?order=${orderMock}&search=${searchMock}`;

    expect(testRoute.get({ id: idMock }, { order: 'ASC', search: 'searchInputValueMock' })).toBe(
      expectedResult,
    );
  });
});
