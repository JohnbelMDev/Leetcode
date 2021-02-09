// We are given two strings, A and B.
//
// A shift on A consists of taking string A
// and moving the leftmost character to the rightmost position.
// For example,
// if A = 'abcde', then it will be 'bcdea'
// after one shift on A.Return True
// if and only
// if A can become B after some number of shifts on A.


/**
* @param {string} A
* @param {string} B
* @return {boolean}
*/

var rotateString = function(A, B) {
      let len = A.length, tmp = A
  if (len < 1) {
    return len === B.length
  }
  for (let i = 0; i < len; i++) {
    tmp = tmp.slice(1) + tmp[0]
    if (tmp === B) {
      return true
    }
  }
  return false
};
