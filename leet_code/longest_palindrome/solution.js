// faster than 99.82%

var longestPalindrome = function(s) {
    const len = s.length;
    let longestPalLength = 1
    let longestPal = s[0];
    
    for (let i=0;i<len;i++) {
        let j = i, k=i;
        while (k+1<len && s[k+1] == s[i]) {
            k++;
        }
        let currLength = k-j + 1;
        let currPal = s.slice(j, k+1)
        while (j >= 0 && k<len && s[j] == s[k]) {
            currLength = k-j + 1;
            currPal = s.slice(j, k+1);
            j--;
            k++;
        }
        if (currLength > longestPalLength) {
            longestPalLength = currLength;
            longestPal = currPal;
        }
    }
    return longestPal;
};