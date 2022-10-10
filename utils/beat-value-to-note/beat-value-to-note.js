function beatValueToNote(n) {
  const simpleBeatValues = [4, 2, 1, 0.5, 0.25, 0.125];
  const dottedBeatValues = [3, 1.5, 0.75, 0.375];
  if (simpleBeatValues.includes(n)) {
    const noteValue = 1 / n / 0.25;
    return `1/${noteValue}`;
  }
  if (dottedBeatValues.includes(n)) {
    const noteValue = Math.round(1 / n / 0.1666666666);
    return `1/${noteValue}d`;
  }
}

module.exports = beatValueToNote;
