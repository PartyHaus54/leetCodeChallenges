/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // We can nest indefinitely as long as the closing matches the current open
  var nestedOpenings = [];
  var validOpenings = ['(', '{', '['];
  var validClosures = [')', '}', ']'];
  var matchingClosures = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  for (var charIndex = 0; charIndex < s.length; charIndex++) {
    if (validOpenings.includes(s[charIndex])) {
      nestedOpenings.push(s[charIndex]);
    } else if (matchingClosures[s[charIndex]] === nestedOpenings[nestedOpenings.length - 1]) {
      nestedOpenings.pop();
    } else {
      return false;
    }
  }
  if (nestedOpenings.length > 0) {
    return false;
  }
  return true;
};

var r1 = isValid("()");
console.log(r1);
// true
var r2 = isValid("()[]{}");
console.log(r2);
// true
var r3 = isValid("(]");
console.log(r3);
// false
var r4 = isValid("([)]");
console.log(r4);
// false
var r5 = isValid("{[]}");
console.log(r5);
// true