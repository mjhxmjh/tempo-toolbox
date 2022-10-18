/*

Given an array of note values and BPM, this function should calculate the time in milliseconds of each note.

It should return an array of numbers, each rounded up to two decimal places.

The note values are expressed in beats. Please see notes details.

e.g. calculateDelayTimes(120, [1, 0.5]) => [500, 250]

*/

function calculateDelayTimes(bpm, beatsArray) {
  const durationsArray = [];
  const lengthOfOneBeat = (60 / bpm) * 1000;

  for (let i = 0; i < beatsArray.length; i++) {
    durationsArray.push(Number((lengthOfOneBeat * beatsArray[i]).toFixed(2)));
  }
  return durationsArray;
}

module.exports = calculateDelayTimes;
