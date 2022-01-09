function longestPalindrome(s) {
    if (s.length === 1) {
        return s;
    }
    let palindromicSubstrings = [];
    for (let startIndex = 0; startIndex < s.length; startIndex++) {
        for (let endIndex = startIndex; endIndex < s.length; endIndex++) {
            let standardString = s.slice(startIndex, endIndex + 1);
            let reversedString = standardString.split('').reverse().join('');
            if (standardString === reversedString) {
                palindromicSubstrings.push(standardString);
            }
        }
    }
    let longestSubstring = '';
    palindromicSubstrings.forEach(subString => {
        if (subString.length > longestSubstring.length) {
            longestSubstring = subString;
        }
    });
    return longestSubstring;
}

let r1 = longestPalindrome('ac');
console.log(`${r1} | a`);
//# sourceMappingURL=longestPalindromicSubstring.js.map