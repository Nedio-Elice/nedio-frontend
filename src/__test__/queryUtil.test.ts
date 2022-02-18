import { combineQuery } from '../utils/query';

describe('쿼리 조합', () => {
  it('쿼리를 조합한다', () => {
    const [queryKey, queryValue] = ['title', 'test'];
    const customParams = {
      page: 1,
      perPage: 10,
      title: '',
      nickname: '',
      category: '',
    };

    const parsed = combineQuery(customParams, queryKey, queryValue);

    expect(parsed).toEqual('page=1&perPage=10&title=test&nickname=&category=');
  });
});
