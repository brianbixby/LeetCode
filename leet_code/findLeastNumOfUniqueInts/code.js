// faster than 66%

// iterate through array and store count of each number in dictionary and separately keep count of unique numbers
// while k > 0 subtract the lowest counts from the unique number totals
var findLeastNumOfUniqueInts = function(arr, k) {
    const dict = {};
    const len = arr.length;
    let uniqueInts = 0;

    for (let i=0;i<len;i++) {
        if (!dict[arr[i]]) {
            dict[arr[i]] = 1;
            uniqueInts++;
        } else {
            dict[arr[i]]++;
        }
    }
    const sortedCounts = Object.values(dict).sort((a,b) => a-b);
    const sortedCountsLen = uniqueInts;
    
    for (let i=0;i<sortedCountsLen;i++) {
        k -= sortedCounts[i];
        if (k > 0) {
            uniqueInts -= 1;
        } else {
            return !k ? uniqueInts-1 :  uniqueInts;
        }
    }
};