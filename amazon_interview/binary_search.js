var search = function(nums, target) {
    let left = 0;
    let right = nums.length -1;
    
    while (left < right) {
        let mid = Math.floor((left + right)/ 2);
        if (nums[mid] == target) return mid;
        if (nums[mid] > target) {
            right = mid;
        } else {
            left = mid + 1
        }
    }
    
    return nums[left] == target ? left : -1
};

var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start < end) {
        let mid = Math.floor((start+end)/2);
        if (nums[mid] == target) return mid;
        nums[mid] > target ? end = mid : start = mid + 1;
    }
    if (start == end){
        return target <= nums[start] ? start : start + 1;
    }
};

// 2 sum
var twoSum = function(numbers, target) {
    let i = 0, j = numbers.length - 1;

    while (i<j) {
        const total = numbers[i] + numbers[j];
        if (total == target) return [i+1,j+1];
        total > target ? j-- : i++;
    }
  };