// this function accepts an array of note values in number form
// it returns an array of note values converted into text
/*
    input: 

    note values

    noteValues = [2, 1, 0.5, 0.25, 0.125]
    [1/2, 1/4, 1/8, 1/16, 1/32]

    noteValues = [3, 1.5, 0.75]
    ['1/2d', '1/4d', '1/8d']

    noteValues = [0.66666666666, 0.33333333333, 0.16666666666]

    noteValues = [4, 3, 2, 1.5, 1, 0.66666666666, 0.75, 0.5, 0.33333333333, 0.25, 0.16666666666 ]
    

    note values to text
    [1 bar, 1/2d, 1/2, 1/4d, 1/4, 1/4t, 1/8d, 1/8, 1/8t, 1/16d, 1/16, 1/16t, 1/32]

*/

const noteValuesToText = (array) => {
  const outputArray = [];

  array.forEach((note) => {
    switch (note) {
      case 4:
        outputArray.push('1 bar');
        break;
      case 3:
        outputArray.push('1/2d');
        break;
      case 2:
        outputArray.push('1/2');
        break;
      case 1.5:
        outputArray.push('1/4d');
        break;
      case 1:
        outputArray.push('1/4');
        break;
      case 0.75:
        outputArray.push('1/8d');
        break;
      case 0.5:
        outputArray.push('1/8');
        break;
      case 0.25:
        outputArray.push('1/16');
        break;
      case 0.125:
        outputArray.push('1/32');
        break;
    }
  });

  return outputArray;
};

module.exports = noteValuesToText;
