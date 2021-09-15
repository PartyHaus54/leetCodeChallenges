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

const reverseOnlyLetters = (s) => {
  const ENGLISH = {};
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((ch) => {
    ENGLISH[ch] = true;
  });
  const arr = s.split('');
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (ENGLISH[s[left]] === undefined) {
      left += 1;
    } else if (ENGLISH[s[right]] === undefined) {
      right -= 1;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left += 1;
      right -= 1;
    }
  }
  return arr.join('');
};

module.exports = reverseOnlyLetters;
