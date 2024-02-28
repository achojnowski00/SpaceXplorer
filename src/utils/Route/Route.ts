export default class Route<
  P extends Record<string, string> | undefined = undefined,
  Q extends Record<string, string> | undefined = undefined,
> {
  public readonly path: string;
  public readonly route: string;

  constructor(path: string) {
    this.path = path.replace(/\*/g, '');
    this.route = path;
  }

  get(params?: P, query?: Q): string {
    let result: string = this.path;

    if (params) {
      Object.keys(params).forEach((key) => {
        result = result.replace(`:${key}`, params[key]);
      });
    }

    if (query) {
      const queryString = Object.keys(query)
        .map((queryKey) => `${queryKey}=${query[queryKey]}`)
        .join('&');

      result += `?${queryString}`;
    }

    return result;
  }
}
