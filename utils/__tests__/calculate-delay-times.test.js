const calculateDelayTimes = require("../calculate-delay-times");

describe("calculate delay times", () => {
  test("At 60bpm the function returns the note length of one beat in milliseconds", () => {
    const bpm = 60;
    expect(calculateDelayTimes(bpm)).toBe(1000);
  });
  test("At 120bpm the function returns the note length of one beat in milliseconds", () => {
    const bpm = 120;
    expect(calculateDelayTimes(bpm)).toBe(500);
  });
});
