const beatValueToNote = require('../beat-value-to-note/beat-value-to-note');
const copyArray = require('../copy-array/copy-array');

describe('Beat Value To Note function', () => {
  test('using copyArray, should convert simple beat values', () => {
    const beatValues = [4, 2, 1, 0.5, 0.25, 0.125];
    const noteValues = ['1/1', '1/2', '1/4', '1/8', '1/16', '1/32'];

    expect(copyArray(beatValues, beatValueToNote)).toEqual(noteValues);
  });
  test('should convert dotted beat values', () => {
    const beatValues = [3, 1.5, 0.75, 0.375];
    const noteValues = ['1/2d', '1/4d', '1/8d', '1/16d'];
    expect(copyArray(beatValues, beatValueToNote)).toEqual(noteValues);
  });
});
