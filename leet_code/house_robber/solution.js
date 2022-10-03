var rob = function(nums) {
    let prev = 0, beforePrev = 0;
    const len = nums.length;
    for (let i=0;i<len;i++) {
        let tmp = prev;
        prev = Math.max(nums[i] + beforePrev, prev);
        beforePrev = tmp;
    }
    return prev;
};