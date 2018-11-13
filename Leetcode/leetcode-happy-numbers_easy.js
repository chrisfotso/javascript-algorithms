// Write an algorithm to determine if a number is "happy".
// A happy number is a number defined by the following process: Starting with any
// positive integer, replace the number by the sum of the squares of its digits,
// and repeat the process until the number equals 1 (where it will stay),
// or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers.

var isHappy = function(n) {
  if (n === 1) return true;
  if (n > 6) {
    let numSplit;
    n = n.toString();
    numSplit = n.split('');
    if (reduceArray(numSplit) !== 1) {
      return isHappy(reduceArray(exponentialArray(numSplit)));
    }
    return true;
  } else return false;
}
const reduceArray = (arr) => {
  return arr.reduce((a, b) => {return +a + +b});
}
const exponentialArray = (arr) => {
  return arr.map(num => {return +Math.pow(num, 2)})
}
