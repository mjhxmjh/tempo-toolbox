function calculateDelayTimes(bpm) {
  const floatSum = (60 / bpm) * 1000;
  return Number(floatSum.toFixed(2));
}

module.exports = calculateDelayTimes;

// const rounded = Number((6.6756854).toFixed(1));
