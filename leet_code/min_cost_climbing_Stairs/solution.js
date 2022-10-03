var minCostClimbingStairs = function(cost) {
    const len = cost.length;
    const arr = [cost[0], cost[1]];
    
    for (let i=2;i<len;i++) {
        arr[i] = Math.min(cost[i] + arr[i-1], cost[i] + arr[i-2])
    }
    return Math.min(arr[len-1], arr[len-2]);
};