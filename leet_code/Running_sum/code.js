var runningSum = function(nums) {
    let arr = [];
    for (let i=0;i<nums.length;i++) {
        !i ? arr[i] = nums[i] : arr[i] = arr[i-1] + nums[i];
    }
    return arr;
};