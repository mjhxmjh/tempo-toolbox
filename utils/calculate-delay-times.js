function calculateDelayTimes(bpm) {
  return (60 / bpm) * 1000;
}

module.exports = calculateDelayTimes;
