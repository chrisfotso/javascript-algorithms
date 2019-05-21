// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.

const majorityElement = nums => {
    const numberQtys = {};
    const majorityQty =  nums.length / 2;
    
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        numberQtys[currNum] = ++numberQtys[currNum] || 1;
        
        if (numberQtys[currNum] >= majorityQty) return currNum;
    }
}
