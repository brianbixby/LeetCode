var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let current = 0;
    let dict = {};
    let len = s.length
    
    for (let i=0;i<len;i++) {
        if (!dict[s[i]] && dict[s[i]] != 0) {
            dict[s[i]] = i;
            current++;
        } else {
            if (current > longest) {
                longest = current;
            }
            i = dict[s[i]];
            current = 0;
            dict = {};
        }
    }
    return longest > current ? longest : current;
};