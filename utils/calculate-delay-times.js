// 1/1 = semibreve, whole = 4
// 1/2 = minum, half = 2
// 1/4 = crotchet, quarter = 1
// 1/8 = quaver, eigth = 0.5
// 1/16 = semiquaver, sixteenth = 0.25
// 1/32 = demisemiquaver, thirtysecond = 0.125

function calculateDelayTimes(bpm, numOfBeats = 1) {
  const lengthOfNote = (60 / bpm) * 1000;
  return Number((lengthOfNote * numOfBeats).toFixed(2));
}

module.exports = calculateDelayTimes;
