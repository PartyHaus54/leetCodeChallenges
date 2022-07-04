function lengthOfLongestSubstring(s) {
    ;
    var touples = [];
    var _loop_1 = function (index) {
        var string = { string: s[index], active: true };
        touples.forEach(function (touple) {
            if (touple.active) {
                if (touple.string.indexOf(s[index]) === -1) {
                    touple.string += s[index];
                }
                else {
                    touple.active = false;
                }
            }
        });
        touples.push(string);
    };
    for (var index = 0; index < s.length; index++) {
        _loop_1(index);
    }
    var longestLength = 0;
    touples.forEach(function (touple) {
        if (touple.string.length > longestLength) {
            longestLength = touple.string.length;
        }
    });
    return longestLength;
}
;
var lolsr1 = lengthOfLongestSubstring('abcabcbb');
console.log(lolsr1 === 3, "".concat(lolsr1, " | 3"));
var lolsr2 = lengthOfLongestSubstring('bbbbb');
console.log(lolsr2 === 1, "".concat(lolsr2, " | 1"));
var lolsr3 = lengthOfLongestSubstring('pwwkew');
console.log(lolsr3 === 3, "".concat(lolsr3, " | 3"));
var lolsr4 = lengthOfLongestSubstring('dvdf');
console.log(lolsr4 === 3, "".concat(lolsr4, " | 3"));
//# sourceMappingURL=lengthOfLongestSubstring.js.map