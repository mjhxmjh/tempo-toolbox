const calculateDelayTimes = require('../calculate-delay-times');

describe('calculate delay times', () => {
  test('At 60bpm the function returns the note length of one beat in milliseconds', () => {
    const bpm = 60;
    expect(calculateDelayTimes(bpm)).toBe(1000);
  });
  test('At 120bpm the function returns the note length of one beat in milliseconds', () => {
    const bpm = 120;
    expect(calculateDelayTimes(bpm)).toBe(500);
  });
  test('At 85bpm (results in floating point number) the function should return the note length of one beat in milliseconds rounded to two decimal places', () => {
    const bpm = 85;
    expect(calculateDelayTimes(bpm)).toBe(705.88);
  });
});
describe('With simple note values', () => {
  test('Given two beats at 60bpm, the function returns 2000', () => {
    const bpm = 60;
    const numOfBeats = 2;
    expect(calculateDelayTimes(bpm, numOfBeats)).toBe(2000);
  });
  test('Given two beats at 95bpm, the function returns 1263.16', () => {
    const bpm = 95;
    const numOfBeats = 2;
    expect(calculateDelayTimes(bpm, numOfBeats)).toBe(1263.16);
  });
  test('Given a whole note at 60bpm, function returns 4000', () => {
    const bpm = 60;
    const numOfBeats = 4;
    expect(calculateDelayTimes(bpm, numOfBeats)).toBe(4000);
  });
  test('Given a whole note at 60bpm, function returns 4000', () => {
    const bpm = 105;
    const numOfBeats = 4;
    expect(calculateDelayTimes(bpm, numOfBeats)).toBe(2285.71);
  });
  test('Given an 1/8th note (quaver) at 60bpm, function returns 500', () => {
    const bpm = 60;
    const numOfBeats = 0.5; // quaver = 0.5 beats
    expect(calculateDelayTimes(bpm, numOfBeats)).toBe(500);
  });
  test('Given an 1/8th note at 115bpm, function returns 260.87', () => {
    const bpm = 115;
    const numOfBeats = 0.5;
    expect(calculateDelayTimes(bpm, numOfBeats)).toBe(260.87);
  });
  test('Given an 1/16th note at 55bpm, function returns 272.73', () => {
    const bpm = 55;
    const numOfBeats = 0.25;
    expect(calculateDelayTimes(bpm, numOfBeats)).toBe(272.73);
  });
  test('Given an 1/32 note at 65bpm, function returns 115.38', () => {
    const bpm = 65;
    const numOfBeats = 0.125;
    expect(calculateDelayTimes(bpm, numOfBeats)).toBe(115.38);
  });
});

describe('dotted notes', () => {
  // a dotted note is the note value plus half

  test('dotted half note (minum) at 60bpm returns 3000', () => {
    const bpm = 60;
    const numOfBeats = 3; // if a half note is 2 beats, then a dotted half note is 3 beats (x1.5)
    expect(calculateDelayTimes(bpm, numOfBeats)).toBe(3000);
  });

  test('dotted quarter note (crotchet) at 92bpm returns 978.26', () => {
    const bpm = 92;
    const numOfBeats = 1.5; // if a crotchet is 1 beat, then a dotted crotchet is 1.5 beats
    expect(calculateDelayTimes(bpm, numOfBeats)).toBe(978.26);
  });
  test('dotted eigth note (quaver) at 108bpm returns 416.67', () => {
    const bpm = 108;
    const numOfBeats = 0.75; // if an eight note is half a beat, then a dotted eigth note is 3/4 of a beat
    expect(calculateDelayTimes(bpm, numOfBeats)).toBe(416.67);
  });
});

describe('triplet notes', () => {
  // 1 measure (1 bar) is equal to 4 beats.
  test('crotchet triplets at 60bpm are 666.667ms', () => {
    const bpm = 60;
    const numOfBeats = 2 / 3; // With crotchet triplets, there are 6 notes over the time of 4
    expect(calculateDelayTimes(bpm, numOfBeats)).toBe(666.67);
  });
  test('quaver triplets at 128bpm are 156.25', () => {
    const bpm = 128;
    const numOfBeats = 1 / 3; // With quaver triplets, there are 12 notes over the time of 4
    expect(calculateDelayTimes(bpm, numOfBeats)).toBe(156.25);
  });
  test('semiquaver triplets at 165bpm are 60.606', () => {
    const bpm = 165;
    const numOfBeats = 1 / 6; // With semiquaver triplets, there are 24 notes over the time of 4
    expect(calculateDelayTimes(bpm, numOfBeats)).toBe(60.61);
  });
});
