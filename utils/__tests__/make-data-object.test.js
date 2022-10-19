const { executionAsyncId } = require('async_hooks');
const makeDataObject = require('../make-data-object/make-data-object');
const beatValueToNote = require('../beat-value-to-note/beat-value-to-note');
const calculateDelayTimes = require('../calculate-delay-times/calculate-delay-times');
const copyArray = require('../copy-array/copy-array');
const { data } = require('autoprefixer');

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

  describe('Using the utility functions', () => {
    // Remind ourselves of the flow, check the "function-flow-diagram"

    test('should check for matched properties', () => {
      // 1. Take the beat values and convert them to note values
      const beatValues = [4, 2, 1, 0.5, 0.25, 0.125];
      const noteValues = Array.from(beatValues, beatValueToNote);
      // console.log(beatValues, noteValues);

      // 2. Take the beat values and BPM, convert them into delay times (i.e. duration)
      const bpm = 120;
      const delayTimesInMs = calculateDelayTimes(bpm, beatValues);
      // console.log(noteValues, delayTimesInMs);

      // 3. Build data structure with the two
      const dataObject = makeDataObject(
        ['note_values', 'duration'],
        noteValues,
        delayTimesInMs
      );
      // console.log(dataObject);

      // 4. Test that each object in the array contains the correct information
      dataObject.forEach((object) => {
        expect(object).toEqual(
          expect.objectContaining({
            note_values: expect.any(String),
            duration: expect.any(Number),
          })
        );
      });
    });
  });
});
