var minEatingSpeed = function(piles, h) {
    const {totalBananas, len} = piles.reduce((acc,curr,idx) => {
        acc.totalBananas += curr;
        acc.len = idx;
        return acc;
    }, {totalBananas: 0, len: 0});
    
    let minBananas = Math.floor(totalBananas/h);
    while (1) {
        // Below is the total hours it takes to eat all the piles at MinBananas per hour 
        if (piles.reduce((acc, curr) => acc += Math.ceil(curr/minBananas), 0) > h) {
            minBananas++;
        } else {
            return minBananas;
        }
    }
};