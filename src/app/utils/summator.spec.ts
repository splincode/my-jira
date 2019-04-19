import { Summator } from './summator';

describe('[TEST]: Summator', () => {
  let summator: Summator;

  beforeEach(() => {
    summator = new Summator();
  });

  it('should be correct sum a and b', () => {
    expect(summator.sum(1, 2)).toBe(3);
  });

  it('should be correct divider a and b', () => {
    expect(summator.divider(2, 2)).toBe(1);
    expect(summator.divider(0, 2)).toBe(0);
    expect(summator.divider(2, 0)).toBe(Infinity);
  });

});
