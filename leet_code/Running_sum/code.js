// faster than 99%
var runningSum = function(nums) {
    return nums.reduce((acc, curr) => {
        acc.total += curr;
        acc.arr.push(acc.total);
        return acc;
    }, {arr: [], total: 0}).arr;
    // let arr = [];
    // for (let i=0;i<nums.length;i++) {
    //     !i ? arr[i] = nums[i] : arr[i] = arr[i-1] + nums[i];
    // }
    // return arr;
};