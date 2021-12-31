function lengthOfLongestSubstring(s: string): number {
  interface StringTouple {
    string: String,
    active: boolean
  };

  let touples : StringTouple[] = [];

  for (let index : number = 0; index < s.length; index++) {
    let string : StringTouple = {string: s[index], active: true};
    touples.forEach(touple => {
      if (touple.active) {
        if (touple.string.indexOf(s[index]) === -1) {
          touple.string += s[index];
        } else {
          touple.active = false;
        }
      }
    })
    touples.push(string);
  }

  let longestLength: number = 0;
  touples.forEach(touple => {
    if (touple.string.length > longestLength) {
      longestLength = touple.string.length;
    }
  });

  return longestLength;
};

let lolsr1 : number = lengthOfLongestSubstring('abcabcbb');
console.assert(lolsr1 === 3, `${lolsr1} | 3`);
let lolsr2 : number = lengthOfLongestSubstring('bbbbb');
console.assert(lolsr2 === 1, `${lolsr2} | 1`);
let lolsr3 : number = lengthOfLongestSubstring('pwwkew');
console.assert(lolsr3 === 3, `${lolsr3} | 3`);
let lolsr4: number = lengthOfLongestSubstring('dvdf');
console.assert(lolsr4 === 3, `${lolsr4} | 3`);