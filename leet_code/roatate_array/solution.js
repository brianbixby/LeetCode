/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    let len = nums.length;
    k %= len;
    var arr = [...nums];
    for (let i=0;i<len;i++) {
        if (i+k>= len) {
            nums[i+k - len] = arr[i];
        } else {
            nums[i+k] = arr[i];
        }
    }
};