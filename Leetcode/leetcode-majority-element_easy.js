const majorityElement = nums => {
    const numberQtys = {};
    const majorityQty =  nums.length / 2;
    
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        numberQtys[currNum] = ++numberQtys[currNum] || 1;
        
        if (numberQtys[currNum] >= majorityQty) return currNum;
    }
}
