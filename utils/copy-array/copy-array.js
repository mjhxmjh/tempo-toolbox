// Takes an array, runs a function on each element and returns new array

function copyArray(oldArr, func) {
  return Array.from(oldArr, func);
}

module.exports = copyArray;
