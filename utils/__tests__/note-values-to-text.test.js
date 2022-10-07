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
  test('should convert multiple values to text', () => {
    const input = [2, 1, 0.5, 0.25, 0.125];
    const convertedValues = ['1/2', '1/4', '1/8', '1/16', '1/32'];

    expect(noteValuesToText(input)).toEqual(convertedValues);
  });
});
