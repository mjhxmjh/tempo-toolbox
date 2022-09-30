// TEST IDEAS
// function returns an array of objects
// function returns delay times fixed to nearest decimal place e.g. 312.518 => 312.52

// given 1/1

// given 1/2 note element at 60bpm, function returns 2000ms
// given 1/2 note element at 75bpm, function returns 1600ms

// given 1/4t note at 60bpm, function returns 666ms
// given 1/4t note at 130bpm, function returns 307.692ms

// given 1/4 note element at 60bpm returns 1000ms
// given 1/4 note element at 100bpm returns 600ms

// given 1/8t note element at 60bpm, returns (1000 / 3)
// given 1/8t note element at 85bpm, returns 235.294ms

// given 1/8 note element at 60bpm returns 500ms
// given 1/8 note element at 96bpm returns 313ms

// given 1/16t note element at 60bpm returns (500 / 3)
// given 1/16t note element at 96bpm returns (313 / 3)

// 1/16 at 60bpm, 250ms
// 1/16 at 140bpm, 107.2 = 107ms

// EDGE CASES
// bpm over 999 is not allowed
// output array length is the same as input





___________




In music, note values are the lengths of musical notes
e.g. crotchet = 1/4, quaver = 1/8

EXAMPLE OF WORKING OUT TRIPLETS
triplets are notes grouped into 3
1/16t = a eigth note divded by 3
1/8t = a quarter note divided by 3
1/4t = a half note divded by 3

With this in mind, work out half notes (1/2) first!

WORKING OUT DOTTED NOTES
dotted notes are the value plus half (x1.5)
1/8d = a semiquaver note times by 3
1/4d = a quaver note times by 3
1/2d = a crotchet note times b

THINGS TO CONSIDER
Should the 'noteValues' be a string or number?
e.g. ['1/4', '1/8'], or [0.25, 0.125]

what value are the milliseconds rounded to?
This should be stored as variable

if the notevalues array does not exist, should it default to straight?