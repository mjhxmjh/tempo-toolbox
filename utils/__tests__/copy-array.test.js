const copyArray = require('../copy-array/copy-array');

describe('Copy Array', () => {
  test('should return an empty array given empty array input', () => {
    expect(copyArray([])).toEqual([]);
  });
  test('can run a simple function to multiple elements', () => {
    const array = [2, 10, 55];
    const simpleFunc = (num) => num * 2;
    const newArray = [4, 20, 110];
    expect(copyArray(array, simpleFunc)).toEqual(newArray);
  });
});
