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
  test('can run a simple number to string converter', () => {
    const array = [1, 2, 3];
    const numToStrFunc = (num) => num.toString();
    const newArray = ['1', '2', '3'];
    expect(copyArray(array, numToStrFunc)).toEqual(newArray);
  });
});
