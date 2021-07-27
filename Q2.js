/*
Transform the array [n, ‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’, ‘g’] with the following criteria:
  - The value number of the first index in the array will be the size of the output (and except
  the first index)
  - Inverse the sized array except for the first and last index (i.e. the first and last index’s
  value will remain unchanged)
  - e.g. [5, 'a', 'b', 'c', 'd', 'e', 'f', 'g'] > ['a', 'd', 'c', 'b', 'e']


Input: array with mixed characters where first index in array is size of output (excluding first index)

Output: new array with mixed characters
- length of new array subject to the size of the output represented by "n"
- first and last index remains unchanged

Constraints: don't mutate original data

Edge cases: n is 0

Solution:
- time complexity: O(n)
- space complexity: O(n)
*/


function transformArray (array) {
  if (!(Array.isArray(array))) {
    return null;
  }
  var size = array[0];

  if (size <= 2) {
    return array.slice().splice(1, size);
  }

  var copy = array.slice().splice(2, size - 1);
  copy.reverse();
  copy[0] = array[1];
  copy.push(array[size]);

  return copy;
}


console.log(transformArray('mock')); // null
console.log(transformArray([0, 'a', 'b', 'c', 'd', 'e', 'f', 'g'])); // []
console.log(transformArray([1, 'a', 'b', 'c', 'd', 'e', 'f', 'g'])); // ['a']
console.log(transformArray([2, 'a', 'b', 'c', 'd', 'e', 'f', 'g'])); // ['a', 'b']
console.log(transformArray([3, 'a', 'b', 'c', 'd', 'e', 'f', 'g'])); // ['a', 'b', 'c']
console.log(transformArray([4, 'a', 'b', 'c', 'd', 'e', 'f', 'g'])); // ['a', 'c', 'b', 'd']
console.log(transformArray([5, 'a', 'b', 'c', 'd', 'e', 'f', 'g'])); // ['a', 'd', 'c', 'b', 'e']
