var pivotIndex = function(nums) {
    let total = nums.reduce((acc, curr) => acc + curr, 0);
    let left = 0;
    let right = total;
    for (let i=0;i<nums.length;i++) {
        if (i == 0) {
            if (total - nums[i] == 0)  {
                return 0;
            }
            right -= nums[i];
        } else {
            left += nums[i-1];
            right -= nums[i];
            if (left == right) return i;
        }
    }
    return -1;
};