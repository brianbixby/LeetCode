/**
 * @param {string} s
 * @return {number}
 */
 var minSwaps = function(s) {
    let len = s.length;
    let dict = {0: 0, 1: 0};
    let prev = "0";
    let differences = 0;

    for (let i=0;i<len;i++) {
        s[i] == '0' ? dict[0]++ : dict[1]++;
    }
    if (Math.abs(dict[0] - dict[1]) >= 2) {
        return -1;
    }
    if (dict[0] == dict[1]) {
        for (let i=0;i<len;i++) {
            if (s[i] == prev) {
                prev = s[i] == "1" ? "0" : "1";
                differences++;
            } else {
                prev = s[i]; 
            }
        }
        differences = Math.min(differences, len - differences);
        return differences ? Math.ceil(differences/2) : 0;
    } else {
        if (dict[0] > dict[1]) {
            prev = "1"
        }
        for (let i=0;i<len;i++) {
            if (s[i] == prev) {
                prev = s[i] == "1" ? "0" : "1";
                differences++;
            } else {
                prev = s[i]; 
            }
        }
        return differences ? Math.ceil(differences/2) : 0;
    }
};