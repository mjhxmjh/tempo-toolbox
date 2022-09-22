// This function calculates the length of note values (in milliseconds) based on the bpm.
// It takes two inputs: note values and bpm

// In music, note values are the lengths of musical notes
// e.g. crotchet = 1/4, quaver = 1/8

// EXAMPLE OF WORKING OUT TRIPLETS
// triplets are notes grouped into 3
// 1/16t = a eigth note divded by 3
// 1/8t = a quarter note divided by 3
// 1/4t = a half note divded by 3

// With this in mind, work out half notes (1/2) first!

// WORKING OUT DOTTED NOTES
// dotted notes are the value plus half (x1.5)
// 1/8d = a semiquaver note times by 3
// 1/4d = a quaver note times by 3
// 1/2d = a crotchet note times b

// THINGS TO CONSIDER
// Should the 'noteValues' be a string or number?
// e.g. ['1/4', '1/8'], or [0.25, 0.125]

// what value are the milliseconds rounded to?
// This should be stored as variable

// if the notevalues array does not exist, should it default to straight?

function calculateDelayTimes() {}

module.exports = calculateDelayTimes;
