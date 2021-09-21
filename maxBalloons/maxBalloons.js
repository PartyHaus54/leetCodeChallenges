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
  // TODO: implement
  // Each character is needed a certain amount of times to make the entire word balloon
  // each letter has a static requirement count because balloon is spelled the same way everytime
  // We can simply count up the characters in the string, and then iterated through the characters of balloon to see which character is the limited factor, and more importantly, how many time we can use that character

  // Instantiating the required keys as 0 to reduce complications of checking existence during the final division
  var charCounts = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0
  };

  var charReqs = {
    b: 1,
    a: 1,
    l: 2,
    o: 2,
    n: 1
  };

  var charSets = {};

  for (var index = 0; index < str.length; index++) {
    charCounts[str[index]]++;
  }

  for (var char in charReqs) {
    charSets[char] = Math.floor(charCounts[char] / charReqs[char]);
  }

  var lowestCount = Math.min(Object.values(...charSets));

  return lowestCount;
};

module.exports = maxBalloons;
