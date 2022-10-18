const noteValuesToText = require('../note-values-to-text/note-values-to-text');

describe('note values to text', () => {
  test('should return an array', () => {
    const input = [];
    expect(Array.isArray(noteValuesToText(input))).toBe(true);
  });
  test('should convert one basic element', () => {
    const input = [1];
    expect(noteValuesToText(input)).toEqual(['1/4']);
  });
  test('should convert multiple simple values to text', () => {
    const input = [4, 2, 1, 0.5, 0.25, 0.125];
    const convertedValues = ['1 bar', '1/2', '1/4', '1/8', '1/16', '1/32'];
    expect(noteValuesToText(input)).toEqual(convertedValues);
  });
  test('should convert multiple mixed order simple values to text', () => {
    const input = [2, 4, 1, 0.5, 0.125, 0.25];
    const convertedValues = ['1/2', '1 bar', '1/4', '1/8', '1/32', '1/16'];
    expect(noteValuesToText(input)).toEqual(convertedValues);
  });

  test('should convert dotted values', () => {
    const input = [3, 1.5, 0.75, 0.375];
    const convertedValues = ['1/2d', '1/4d', '1/8d', '1/16d'];
    expect(noteValuesToText(input)).toEqual(convertedValues);
  });
  xtest('should convert triplet values', () => {
    const input = [0.66666666, 0.333333, 0.166666];
    const convertedValues = ['1/4t', '1/8t', '1/16t'];
    expect(noteValuesToText(input)).toEqual(convertedValues);
  });
  xtest('duplicate should convert triplet values', () => {
    const input = [0.66666666, 0.333333];
    const convertedValues = ['1/4t', '1/8t'];
    expect(noteValuesToText(input)).toEqual(convertedValues);
  });
  xtest('should convert mixed order triplet values', () => {
    const input = [0.333333, 0.166666, 0.66666666];
    const convertedValues = ['1/8t', '1/16t', '1/4t'];

    expect(noteValuesToText(input)).toEqual(convertedValues);
  });
  xtest('should convert all mixed values', () => {
    const input = [
      4, 3, 2, 1.5, 1, 0.66666666666, 0.75, 0.5, 0.33333333333, 0.375, 0.25,
      0.16666666666, 0.125,
    ];
    const convertedValues = [
      '1 bar',
      '1/2d',
      '1/2',
      '1/4d',
      '1/4',
      '1/4t',
      '1/8d',
      '1/8',
      '1/8t',
      '1/16d',
      '1/16',
      '1/16t',
      '1/32',
    ];
    expect(noteValuesToText(input)).toEqual(convertedValues);
  });

  xtest('should convert small mixed array', () => {
    const input = [1, 0.333333333, 0.375];
    const convertedValues = ['1/4', '1/8t', '1/16d'];
    expect(noteValuesToText(input)).toEqual(convertedValues);
  });

  xtest('should return matched array given out of order values', () => {
    const input = [2, 4, 1, 0.5, 0.125, 0.25];
    const convertedValues = ['1/2', '1 bar', '1/4', '1/8', '1/32', '1/16'];
  });
});
