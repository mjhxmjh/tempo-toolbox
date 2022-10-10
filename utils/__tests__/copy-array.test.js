const copyArray = require('../copy-array/copy-array');

describe('Copy Array', () => {
  test('should return an empty array given empty array input', () => {
    expect(copyArray([])).toEqual([]);
  });
});
