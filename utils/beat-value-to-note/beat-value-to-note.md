# Beat Value To Note Function

This function takes a number and converts it to the note value text

For example:

`[2, 1, 0.5] => ['1/2', '1/4', '1/8']`

`[3, 1.5, 0.75, 0.375] => ['1/2d', '1/4d', '1/8d', '1/16d']`

`[0.66666666, 0.333333, 0.166666] => ['1/4t', '1/8t', '1/16t']`

## Using formulas

When we first started working on this we used a large switch statement and array methods. This worked OK, but got more complex when dealing with mixed values and was not DRY.

We knew there must be a clever way using maths. There is a formula for each type of note (siimple, dotted and triplet).

Simple note formula = `(1 / n) / 0.25`

Dotted note formula = `(1 / n)/ 0.1666`

Triplet note formula = `(1 / n) / 0.375)`

## Converting to the note value

These formulas will convert the beat value to a number that is super close to what we want

`[0.75] => ['8.0032012805']`

Then add some rounding and template literals in the mix

`[0.75] => ['1/8d']`

## Working with triplets

Because triplet beat values are a recurring number such as `1.666667` we knew that the slightest error down the line could cause something to break, (so we use regex and a boolean `isTriplet` to detect if input is a triplet value)

`/\d\.6+\d*|\d\.3+\d*|\d\.16+\d*/`

Calling `.test` on this regex and passing it the beat value will return `true` if the number looks like a triplet value.
If `isTriplet` is true, then the function will use the triplet note formula
