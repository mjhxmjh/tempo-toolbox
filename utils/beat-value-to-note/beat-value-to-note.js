function beatValueToNote(n) {
  if (n === 4) return '1 bar';
  const simpleBeatValues = [4, 2, 1, 0.5, 0.25, 0.125];
  const dottedBeatValues = [3, 1.5, 0.75, 0.375];
  const isTriplet = /\d\.6+\d*|\d\.3+\d*|\d\.16+\d*/.test(n.toString());

  if (simpleBeatValues.includes(n)) {
    const noteValue = 1 / n / 0.25;
    return `1/${noteValue}`;
  }
  if (dottedBeatValues.includes(n)) {
    const noteValue = Math.round(1 / n / 0.1666666666);
    return `1/${noteValue}d`;
  }
  if (isTriplet) {
    const formula = Math.round(1 / n / 0.375);
    return `1/${formula}t`;
  }
}

module.exports = beatValueToNote;
