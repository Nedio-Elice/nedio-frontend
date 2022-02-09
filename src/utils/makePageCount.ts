function makePageCount(count: number | undefined) {
  if (count !== undefined && count > 0) {
    return Math.floor((count - 1) / 5) + 1;
  }
  return 1;
}

export default makePageCount;
