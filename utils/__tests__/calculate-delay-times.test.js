const calculateDelayTimes = require('../calculate-delay-times/calculate-delay-times');

describe('Calculate Delay Times', () => {
  test('should return correct values for basic notes', () => {
    const bpm = 60;
    const noteValues = [2, 1, 0.5, 0.25, 0.125];
    const noteValuesConvertedToMs = [2000, 1000, 500, 250, 125];
    expect(calculateDelayTimes(bpm, noteValues)).toEqual(
      noteValuesConvertedToMs
    );
  });

  test('should return correct values for dotted notes', () => {
    const bpm = 120;
    const noteValues = [3, 1.5, 0.75];
    const noteValuesConvertedToMs = [1500, 750, 375];
    expect(calculateDelayTimes(bpm, noteValues)).toEqual(
      noteValuesConvertedToMs
    );
  });

  test('should return correct values for triplet notes', () => {
    const bpm = 96;

    const crotchetTriplet = 2 / 3;
    const quaverTriplet = 1 / 3;
    const semiquaverTriplet = 1 / 6;

    const noteValues = [crotchetTriplet, quaverTriplet, semiquaverTriplet];
    const noteValuesConvertedToMs = [416.67, 208.33, 104.17];

    expect(calculateDelayTimes(bpm, noteValues)).toEqual(
      noteValuesConvertedToMs
    );
  });
});
