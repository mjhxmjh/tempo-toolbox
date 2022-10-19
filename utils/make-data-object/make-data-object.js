function makeDataObject(keys, values, durations) {
  if (!keys.length) {
    return [];
  }
  const arr = [];

  for (let i = 0; i < values.length; i++) {
    const dataObject = {};
    dataObject[keys[0]] = values[i];
    if (durations) dataObject[keys[1]] = durations[i];
    arr.push(dataObject);
  }
  return arr;
}

module.exports = makeDataObject;
