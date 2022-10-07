// this function accepts an array of note values in number form
// it returns an array of note values converted into text

const noteValuesToText = (array) => {
  const outputArray = [];
  const regex =
    /(?<triplet4>\d\.6+\d*):(?<triplet8>\d\.3+\d*):(?<triplet16>\d\.16+\d*)/;

  const matchObj = regex.exec(array.join(':'));

  array.forEach((note, i) => {
    if (matchObj) {
      //   console.log('yes');
      switch (note) {
        case parseFloat(matchObj.groups.triplet4):
          outputArray[i] = '1/4t';
          break;
        case parseFloat(matchObj.groups.triplet8):
          outputArray[i] = '1/8t';
          break;
        case parseFloat(matchObj.groups.triplet16):
          outputArray[i] = '1/16t';
          break;
      }
    }

    switch (note) {
      case 4:
        outputArray[i] = '1 bar';
        break;
      case 3:
        outputArray[i] = '1/2d';
        break;
      case 2:
        outputArray[i] = '1/2';
        break;
      case 1.5:
        outputArray[i] = '1/4d';
        break;
      case 1:
        outputArray[i] = '1/4';
        break;
      case 0.75:
        outputArray[i] = '1/8d';
        break;
      case 0.5:
        outputArray[i] = '1/8';
        break;
      case 0.375:
        outputArray[i] = '1/16d';
        break;
      case 0.25:
        outputArray[i] = '1/16';
        break;
      case 0.125:
        outputArray[i] = '1/32';
        break;
    }
  });

  return outputArray;
};

module.exports = noteValuesToText;
