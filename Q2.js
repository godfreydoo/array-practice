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

Constraints: n/a

Edge cases: n is 0
*/


function transformArray (array) {
  if (!(Array.isArray(array))) {
    return null;
  }

  if (array[0] === 0) {
    return [];
  } else if (array[0] === 1) {
    return [array[1]];
  }

  // don't mutate original data; can be changed to reduce space complexity
  var copy = array.slice().splice(2, array[0] - 2);
  copy.reverse();
  copy.unshift(array[1]);
  copy.push(array[array[0]]);

  return copy;
}


console.log(transformArray([5, 'a', 'b', 'c', 'd', 'e', 'f', 'g'])); // ['a', 'd', 'c', 'b', 'e']
console.log(transformArray([0, 'a', 'b', 'c', 'd', 'e', 'f', 'g'])); // []
console.log(transformArray([1, 'a', 'b', 'c', 'd', 'e', 'f', 'g'])); // ['a']
console.log(transformArray([2, 'a', 'b', 'c', 'd', 'e', 'f', 'g'])); // ['a', 'b']
console.log(transformArray([3, 'a', 'b', 'c', 'd', 'e', 'f', 'g'])); // ['a', 'b', 'c']
console.log(transformArray([4, 'a', 'b', 'c', 'd', 'e', 'f', 'g'])); // [ 'a', 'c', 'b', 'd' ]
console.log(transformArray('mock'));