/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let len = nums.length;
    let zeroCount = 0;
    let i;
    let j=0;
    for (i=0;i<len;i++) {
        while (!nums[j] && j<len) {
            j++;
            zeroCount++;
        }
        if (j == len) {
            break;
        }
        nums[i]=nums[j];
        j++;
    }
    while (i<len) {
        nums[i]= 0;
        i++;
    }
};