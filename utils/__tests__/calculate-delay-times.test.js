const { isExportDeclaration } = require('typescript');
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
});

// describe('calculate delay times', () => {
//   test('At 60bpm the function returns the note length of one beat in milliseconds', () => {
//     const bpm = 60;
//     expect(calculateDelayTimes(bpm)).toBe(1000);
//   });
//   test('At 120bpm the function returns the note length of one beat in milliseconds', () => {
//     const bpm = 120;
//     expect(calculateDelayTimes(bpm)).toBe(500);
//   });
//   test('At 85bpm (results in floating point number) the function should return the note length of one beat in milliseconds rounded to two decimal places', () => {
//     const bpm = 85;
//     expect(calculateDelayTimes(bpm)).toBe(705.88);
//   });
// });
// describe('With simple note values', () => {
//   test('Given two beats at 60bpm, the function returns 2000', () => {
//     const bpm = 60;
//     const numOfBeats = 2;
//     expect(calculateDelayTimes(bpm, numOfBeats)).toBe(2000);
//   });
//   test('Given two beats at 95bpm, the function returns 1263.16', () => {
//     const bpm = 95;
//     const numOfBeats = 2;
//     expect(calculateDelayTimes(bpm, numOfBeats)).toBe(1263.16);
//   });
//   test('Given a whole note at 60bpm, function returns 4000', () => {
//     const bpm = 60;
//     const numOfBeats = 4;
//     expect(calculateDelayTimes(bpm, numOfBeats)).toBe(4000);
//   });
//   test('Given a whole note at 60bpm, function returns 4000', () => {
//     const bpm = 105;
//     const numOfBeats = 4;
//     expect(calculateDelayTimes(bpm, numOfBeats)).toBe(2285.71);
//   });
//   test('Given an 1/8th note (quaver) at 60bpm, function returns 500', () => {
//     const bpm = 60;
//     const numOfBeats = 0.5; // quaver = 0.5 beats
//     expect(calculateDelayTimes(bpm, numOfBeats)).toBe(500);
//   });
//   test('Given an 1/8th note at 115bpm, function returns 260.87', () => {
//     const bpm = 115;
//     const numOfBeats = 0.5;
//     expect(calculateDelayTimes(bpm, numOfBeats)).toBe(260.87);
//   });
//   test('Given an 1/16th note at 55bpm, function returns 272.73', () => {
//     const bpm = 55;
//     const numOfBeats = 0.25;
//     expect(calculateDelayTimes(bpm, numOfBeats)).toBe(272.73);
//   });
//   test('Given an 1/32 note at 65bpm, function returns 115.38', () => {
//     const bpm = 65;
//     const numOfBeats = 0.125;
//     expect(calculateDelayTimes(bpm, numOfBeats)).toBe(115.38);
//   });
// });

// describe('dotted notes', () => {
//   // a dotted note is the note value plus half

//   test('dotted half note (minum) at 60bpm returns 3000', () => {
//     const bpm = 60;
//     const numOfBeats = 3;
//     expect(calculateDelayTimes(bpm, numOfBeats)).toBe(3000);
//   });

//   test('dotted quarter note (crotchet) at 92bpm returns 978.26', () => {
//     const bpm = 92;
//     const numOfBeats = 1.5; // if a crotchet is 1 beat, then a dotted crotchet is 1.5 beats
//     expect(calculateDelayTimes(bpm, numOfBeats)).toBe(978.26);
//   });
//   test('dotted eigth note (quaver) at 108bpm returns 416.67', () => {
//     const bpm = 108;
//     const numOfBeats = 0.75; // if an eight note is half a beat, then a dotted eigth note is 3/4 of a beat
//     expect(calculateDelayTimes(bpm, numOfBeats)).toBe(416.67);
//   });
// });

// describe('triplet notes', () => {
//   // 1 measure (1 bar) is equal to 4 beats.
//   test('crotchet triplets at 60bpm are 666.667ms', () => {
//     const bpm = 60;
//     const numOfBeats = 2 / 3;
//     expect(calculateDelayTimes(bpm, numOfBeats)).toBe(666.67);
//   });
//   test('quaver triplets at 128bpm are 156.25', () => {
//     const bpm = 128;
//     const numOfBeats = 1 / 3;
//     expect(calculateDelayTimes(bpm, numOfBeats)).toBe(156.25);
//   });
//   test('semiquaver triplets at 165bpm are 60.606', () => {
//     const bpm = 165;
//     const numOfBeats = 1 / 6;
//     expect(calculateDelayTimes(bpm, numOfBeats)).toBe(60.61);
//   });
// });
// describe.only('function should take a bpm and an array of note values', () => {
//   test('if given a bpm of 60, and an array of straight beats [4, 2, 1, 0.5, 0.25, 0.125]', () => {
//     const bpm = 60;
//     const beatsArray = [4, 2, 1, 0.5, 0.25, 0.125];
//     expect(calculateDelayTimes(bpm, beatsArray)).toEqual([
//       4000, 2000, 1000, 500, 250, 125,
//     ]);
//   });
//   test('if given a bpm of 120, and an array of dotted beats [3, 1.5, 0.75, 0.375] ', () => {
//     const bpm = 120;
//     const beatsArray = [3, 1.5, 0.75, 0.375];
//     expect(calculateDelayTimes(bpm, beatsArray)).toEqual([
//       1500, 750, 375, 187.5,
//     ]);
//   });
//   test('if given a bpm 96 and an array of triplet beats []', () => {
//     const bpm = 96;
//     const crotchetTriplet = 2 / 3;
//     const quaverTriplet = 1 / 3;
//     const semiquaverTriplet = 1 / 6;
//     const beatsArray = [crotchetTriplet, quaverTriplet, semiquaverTriplet];
//     expect(calculateDelayTimes(bpm, beatsArray)).toEqual([
//       416.67, 208.33, 104.17,
//     ]);
//   });
// });
