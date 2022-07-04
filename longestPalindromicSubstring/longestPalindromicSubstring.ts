function longestPalindrome(s: string): string {
  if (s.length === 1) {
    return s;
  }
  let palindromicSubstrings : string[] = [];

  for (let startIndex : number = 0; startIndex < s.length; startIndex++) {
    for (let endIndex : number = startIndex; endIndex < s.length; endIndex++) {
      let standardString : string = s.slice(startIndex, endIndex + 1);
      let reversedString : string = standardString.split('').reverse().join('');
      if (standardString === reversedString) {
        palindromicSubstrings.push(standardString);
      }
    }
  }

  let longestSubstring : string = '';
  palindromicSubstrings.forEach(subString => {
    if (subString.length > longestSubstring.length) {
      longestSubstring = subString;
    }
  });

  return longestSubstring;
};

let lpsr1 : string = longestPalindrome('ac');
console.log(`${lpsr1} | a`);