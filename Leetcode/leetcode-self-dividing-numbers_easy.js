// A self-dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// Also, a self-dividing number is not allowed to contain the digit zero.
// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

var selfDividingNumbers = function(left, right) {
  let result = [], strNum, numSplit;
  for (let i = left; i <= right; i++) {
    strNum = i.toString();
    numSplit = strNum.split('');
    if (strNum.includes('0')) {
      continue;
    }
    result.push(checkIfDivisible(i, numSplit));
  }
  return result.filter(x => x);
};

var checkIfDivisible = function(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (num % parseInt(arr[i]) === 0) {
      continue;
    } else return;
  }
  return num;
}