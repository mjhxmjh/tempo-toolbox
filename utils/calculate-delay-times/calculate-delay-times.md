# Tempo Toolbox Duration Finder

In music, a note dictates what pitch a sound is, and how long it is held for.
A beat is something we can use to relate to. Note values can be thought of in terms of beats.
For example, a 'crotchet' is held for one beat and there are usually four beats to a bar, so a crotchet is also a 1/4

## Calculating Delay Times

Note values are described in terms of fractions relating to the bar, and have specific names also!

For example, a quarter note (also known as a crotchet in Europe) is worth one beat, and there are four crotchets to a bar. And a quaver is an 1/8th note, so there are two quavers in every crotchet.

### Basic Notes

Every note value in the world is based on the simple ones.
Here are the basic notes and how many beats they're each worth

```
1/2 = 2 beats
1/4 = 1 beat
1/8 = 0.5 beats
1/16 = 0.25 beats
1/32 = 0.125 beats
```

### Dotted Notes

If music only contained simple values like above it would sound boring! Dotted notes are the value plus half it's value (150%). For example, if a half note is 2 beats, then a dotted half note is 3 beats (x1.5)
```
1/2d = 2 + 1 beats
1/4d = 1 + 0.5 beats
1/8d = 0.5 + 0.25 beats
```
Funk music uses these notes a lot, e.g. Maceo Parker.

### Triplet Notes

So far we've only been thinking in terms of simple time (divided by four). Basic notes can also be grouped in threes, and spread across across a number of beats.

For example there are 6 crotchet triplet in one bar, or simply 3 notes over 2 beats. With quaver triplets, there are 6 notes over 2 beats. To work out the length of each individual note in terms of beats, we'll need to convert this logic into a mathmatical fraction (for the most accurate result)
```
1/4t = 2 / 3 (e.g. 0.667 beats)
1/8t = 1 / 3
1/16t = 1 / 6
```