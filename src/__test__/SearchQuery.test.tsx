import { combineQuery } from '../utils/query';

describe('쿼리 조합 테스트', () => {
  it('combineQuery test', () => {
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
