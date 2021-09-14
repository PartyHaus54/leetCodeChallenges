/* eslint-disable no-multi-assign */
/*
https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/637/week-2-september-8th-september-14th/3973/

Maximum Number of Balloons

Given a string text, you want to use the characters of text to form as many
instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of
instances that can be formed.

Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0
*/

const maxBalloons = (str) => {
  if (str.length === 0 || str === undefined || typeof str !== 'string') {
    return 0;
  }
  const tracker = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  };
  str.split('').forEach((letter) => {
    if (tracker[letter] !== undefined) {
      if (letter === 'l' || letter === 'o') {
        tracker[letter] = tracker[letter] += 0.5;
      } else {
        tracker[letter] = tracker[letter] += 1;
      }
    }
  });
  let count = tracker.b;
  Object.keys(tracker).forEach((letter) => {
    if (tracker[letter] < count) {
      count = tracker[letter];
    }
  });
  return count < 1 ? 0 : count;
};

module.exports = maxBalloons;
