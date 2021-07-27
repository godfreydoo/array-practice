/*
Remove strings and keep numbers of the following array:
e.g. [1, 3, 'a', 'b', 4, 7]

Input: array of mixed characters

Output: new array of only numbers

Constraints: n/a

Edge cases; handle strings, booleans, etc.

Solution:
- time complexity: O(n)
- space complexity: O(n)
*/

function keepOnlyNumbers (array) {
  if (Array.isArray(array) === false) {
    return null;
  }
  // don't mutate original data; can be changed to reduce space complexity
  var copy = array.slice();

  return copy.filter(item => typeof item === 'number');
};

console.log(keepOnlyNumbers('mock')); // null
console.log(keepOnlyNumbers([])); // []
console.log(keepOnlyNumbers([1, 3, 'a', 'b', 4, 7])); // [1, 3, 4, 7]
console.log(keepOnlyNumbers([1, 3, true, false, 4, 7])); // [1, 3, 4, 7]
console.log(keepOnlyNumbers([1, 3, {}, [], 4, 7])); // [1, 3, 4, 7]
console.log(keepOnlyNumbers([1, 3, undefined, null, 4, 7])); // [1, 3, 4, 7]