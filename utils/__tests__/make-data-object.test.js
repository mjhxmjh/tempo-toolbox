const makeDataObject = require("../make-data-object/make-data-object");

describe("function should return an array", () => {
  test("when given an input, function returns an empty array", () => {
    expect(makeDataObject([])).toEqual([]);
  });
});
