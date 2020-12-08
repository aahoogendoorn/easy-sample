import { OmdbUri } from '../../src/data/OmdbUri';
import { OmdbGateway } from '../../src/data/OmdbGateway';
import { fits, mock } from '@thisisagile/easy-test';
import { Api, list } from '@thisisagile/easy';

describe('OmdbGateway', () => {

  const items = list({ title: 'Life of Brian' });
  const api = { get: mock.resolve({ data: { items } }) } as unknown as Api;
  let omdb: OmdbGateway;

  beforeEach(() => {
    omdb = new OmdbGateway(api);
  });

  test('Routes are correct', () => {
    expect(omdb.route).toMatchRoute(OmdbUri.Movies);
    expect(omdb.routeId).toMatchRoute(OmdbUri.Movie);
  });

  test('Search triggers get', async () => {
    const movies = await omdb.search('Brian');
    expect(api.get).toHaveBeenCalled();
    expect(movies.first()).toMatchObject(fits.with(items.first()));
  });

  test('byId triggers get', async () => {
    const movie = await omdb.byId('Brian');
    expect(api.get).toHaveBeenCalled();
    expect(movie).toMatchObject(fits.with(items.first()));
  });
});
