function isValidQuery(key: string, value: string): boolean {
  if (key === '' || value === '') return false;
  if (key === undefined || key === null) return false;
  if (key !== 'title' && key !== 'nickname' && key !== 'category') return false;

  return true;
}

function combineQuery(params: object, queryKey: string, queryValue: string) {
  return Object.entries({ ...params, [queryKey]: queryValue })
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}

export { isValidQuery, combineQuery };
