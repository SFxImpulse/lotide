# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me (David) as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @arctic_david/lotide`

**Require it:**

`const _ = require('@arctic_david/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `_.countLetters("some string")` : Returns an object containing all the unique letters within a string and how often they occur.
* `_.countOnly(array, itemsToCount)` : Returns an object with the values specified in the second argument of the function, and how often they occur in an array.
* `_.eqArrays(arr1, arr2)` : Iterates over 2 arrays and returns true when the arrays are the same length and have the same values in the same indices.
* `_.eqObjects(obj1, obj2)` : Assess the key:value pairs of an object and returns true if every key:value pair is the same in the same order. Also ensures that if a key:value is an array, that each index value in that array is the same as the array in the second object.
* `_.findKeyByValue(obj, value)` : Returns the corresponding key that is equivalent to a desired value.
* `_.findKey(obj, callback)` : Returns the corresponding key that is equivalent to a value assigned to a parameter in a callback function.
* `_.flatten(array)` : Returns a series of values in an array after removing them from nested arrays. (Only works on a single level of nested array).
* `_.head(array)` : Returns an array with the value of the first index in the argument array.
* `_.letterPositions.js(sentence)` : Returns an object containing every unique letter in a string and which index or indices within the string they occur.
* `_.map(array, callback)` : Returns an array of items that have been modified by a callback function.
* `_.middle(array)` : Returns an array with the value of the middle index of an argument array if the length of the array is greater than 2. If the argument array has an even length, it will return the 2 middle index values.
* `_.tail(array)` : Returns an array with every value of the argument array expect for the first.
* `_.takeUntil(array, callback)` : Returns an array of values taken incrementally from the argument array up to but not including a specified value in the argument of the callback function.
*`_.without(source, itemToRemove)` : Returns an array of values with the values from the source array after the itemsToRemove array specifies which items to remove from it.