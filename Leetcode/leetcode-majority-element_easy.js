const majorityElement = (nums) => {
  let newArr = [], longestArr = [], tempArr;
  nums.forEach(num => {
    if (!newArr.includes(num))
    newArr.push(num);
  });
  for (let elem of newArr) {
    tempArr = getTempArr(elem, nums);
    if (tempArr.length > longestArr.length) {
      longestArr = tempArr;
    }
  }
  return longestArr[0];
}
const getTempArr = (num, arr) => {
  return arr.filter(elem => elem === num);
}