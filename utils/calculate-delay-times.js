// 1/1 = semibreve, whole = 4
// 1/2 = minum, half = 2
// 1/4 = crotchet, quarter = 1
// 1/8 = quaver, eigth = 0.5
// 1/16 = semiquaver, sixteenth = 0.25
// 1/32 = demisemiquaver, thirtysecond = 0.125

function calculateDelayTimes(bpm, beatsArray) {
  const durationsArray = [];
  const lengthOfOneBeat = (60 / bpm) * 1000;

  for (let i = 0; i < beatsArray.length; i++) {
    durationsArray.push(Number((lengthOfOneBeat * beatsArray[i]).toFixed(2)));
  }
  console.log(durationsArray);
  return durationsArray;
}

module.exports = calculateDelayTimes;
