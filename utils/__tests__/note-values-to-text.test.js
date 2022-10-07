const { isExportDeclaration } = require('typescript');
const noteValuesToText = require('../note-values-to-text.js');

describe('note values to text', () => {
  test('should return an array', () => {
    const input = [];
    expect(Array.isArray(noteValuesToText(input))).toBe(true);
  });
});
