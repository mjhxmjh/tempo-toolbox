> ### What is a note?
>
> In music, a note dictates what pitch a sound is, and how long it is held for.
> A beat is something we can use to relate to. Note values can be thought of in terms of beats.
> For example, a 'crotchet' is held for one beat and there are usually four beats to a bar, so a crotchet is also a 1/4

### Note Values to Text

loop over array
do some maths on a number
push the result as a string literal into array
.push(`1/`${})

During first attempt, things got nasty with large switch statements, regex and trouble copying the array.

'copying the array' is the key here! A quick browse online, came to find `Array.from()` method. Whilst copying the array values it can also take a function as it's second argument to run on each element.

Introducing...
`copyArray`, taking `beatValueToNote` function

### Building Data Structure

This function calculates the length of note values (in milliseconds) and frequency (in Hz) based on the bpm.
It takes two inputs: note values array and bpm

return a dataset that looks like:

```
const delayValues = [
    {
        noteValue: '1/8',
        duration: 2400.00,
        frequency: 0.1,
    },
    {
        noteValue: '1/4t',
        duration: 2400,
        frequency: 0.4,
    },
    {
        noteValue: '1/16',
        duration: 400,
        frequency: 0.2,
    },
];
```

function calculateDurationTimes() {
return [];
}

module.exports = calculateDurationTimes;
