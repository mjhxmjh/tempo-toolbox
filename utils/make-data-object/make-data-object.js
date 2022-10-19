function makeDataObject(keys, values, durations) {
  if (!keys.length) {
    return [];
  }
  const arr = [];
  for (let i = 0; i < values.length; i++) {
    const dataObject = {};
    dataObject[keys[0]] = values[i];
    console.log(durations[i]);
    arr.push(dataObject);
  }
  return arr;
}

module.exports = makeDataObject;

// returned ouput should look something like this:

// delayValues = [
//     {
//         noteValue: '1/8',
//         duration: 2400.00,
//     },
//     {
//         noteValue: '1/4t',
//         duration: 2400,
//     },
//     {
//         noteValue: '1/16',
//         duration: 400,
//     },
// ];
