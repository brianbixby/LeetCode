var solution = function(isBadVersion) {
    return function(n) {
        let start = 1;
        let end = n;
        while (start < end ) {
            let mid = Math.floor((end + start) / 2);
            if (isBadVersion(mid)) {
                if (mid == 1 ||!isBadVersion(mid - 1)) {
                    return mid;
                }
                end = mid -1;
            } else {
                if (start == mid) return end;
                start = mid;
            }
        }
        return end;
    };
};