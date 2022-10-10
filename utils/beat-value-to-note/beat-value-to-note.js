function beatValueToNote(n) {
  const simpleBeatValues = [4, 2, 1, 0.5, 0.25, 0.125];
  if (simpleBeatValues.includes(n)) {
    const noteValue = 1 / n / 0.25;
    return `1/${noteValue}`;
  }
}

module.exports = beatValueToNote;
