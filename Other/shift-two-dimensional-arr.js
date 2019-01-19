function shiftTwoDimensionalArr(arr) {
  let lastArrIndex = arr.length-1,
      lastArr = arr[lastArrIndex],
      lastElemIndex = lastArr.length-1,
      lastElem = lastArr[lastElemIndex],
      subArr;
  
  for (let i = lastArrIndex; i >= 0; i--) {
    subArr = arr[i];
    for (let j = subArr.length-1; j >= 0; j--) {
      if (i === 0 && j === 0) subArr[j] = lastElem;
      else if (j === 0) {
        subArr = arr[i-1];
        arr[i][0] = subArr[subArr.length-1];
        subArr = arr[i];
      } else subArr[j] = subArr[j - 1];
    }
  }
  return arr;
}
