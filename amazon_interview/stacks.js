// balanced parentheses
var isValid = function(s) {
    const len = s.length, stack = [], dict = Object.freeze({ "]": "[", "}": "{", ")": "(" });
    if (len % 2 != 0) return false;
    
    for (let i=0; i<len; i++) {
        if (s[i] == "(" || s[i] == "[" ||  s[i] == "{") {
            stack.unshift(s[i]);
        } else {
            if (!stack.length || stack.shift() !== dict[s[i]]) return false;
        }
    }
    return !stack.length
};