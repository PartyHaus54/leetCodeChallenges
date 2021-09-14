/*
https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/637/week-2-september-8th-september-14th/3974/

Reverse Only Letters
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

Example 1:
Input: s = "ab-cd"
Output: "dc-ba"

Example 2:
Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:
Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
*/

/**
 * @param {string} s
 * @return {string}
 */
 var reverseOnlyLetters = function(s) {
  // TODO: implement
  // Make the array of the characters. Then you are done cause it's like homefree and stuff
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  // Hard part is over
  var reversedLetters = [];
  for (var index = 0; index < s.length; index++) {
    if (letters.includes(s[index])) {
      reversedLetters.unshift(s[index]);
    }
  }
  sReversed = '';
  var oIndex = 0;
  var rIndex = 0;
  while (sReversed.length !== s.length) {
    if (letters.includes(s[oIndex])) {
      sReversed += reversedLetters[rIndex];
      oIndex++;
      rIndex++;
    } else {
      sReversed += s[oIndex];
      oIndex++;
    }
  }

  return sReversed;
};

var r1 = reverseOnlyLetters('--1-y--zZ');
console.log('--1-y--zZ', r1);

//module.exports = reverseOnlyLetters;
