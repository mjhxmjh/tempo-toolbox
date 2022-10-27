function makeDataObject(keys, keyOneValues, keyTwoValues) {
  if (!keys.length) {
    return [];
  }
  const arr = [];

  for (let i = 0; i < keyOneValues.length; i++) {
    const dataObject = {};
    dataObject[keys[0]] = keyOneValues[i];
    if (keyTwoValues) dataObject[keys[1]] = keyTwoValues[i];
    arr.push(dataObject);
  }
  return arr;
}

module.exports = makeDataObject;
