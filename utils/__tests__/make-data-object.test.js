const { executionAsyncId } = require('async_hooks');
const makeDataObject = require('../make-data-object/make-data-object');
// const beatValueToNote = require('../beat-value-to-note/beat-value-to-note');

describe('function should return an array', () => {
  test('when given an empty input, function returns an empty array', () => {
    expect(makeDataObject([])).toEqual([]);
  });
  test("given one object key and it's corresponding array, function should return an array with the same length as input ", () => {
    const initialKeys = ['noteValue'];
    const noteValues = ['1 bar', '1/2', '1/4'];
    expect(makeDataObject(initialKeys, noteValues)).toHaveLength(3);
  });
  test('given two object keys, function creates a data object with the corresponding key value pairs', () => {
    const initialKeys = ['noteValue', 'duration'];
    const noteValues = ['1 bar', '1/2', '1/4'];
    const durations = [4000, 2000, 1000];
    const dataObject = [
      {
        noteValue: '1 bar',
        duration: 4000,
      },
      {
        noteValue: '1/2',
        duration: 2000,
      },
      {
        noteValue: '1/4',
        duration: 1000,
      },
    ];
    expect(makeDataObject(initialKeys, noteValues, durations)).toMatchObject(
      dataObject
    );
  });
});
