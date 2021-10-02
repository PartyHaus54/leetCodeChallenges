/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  var longestCommonSubsequence = '';
  var commonCharacters = [];
  var commonCharSeqs = {};
  for (var index1 = 0; index1 < text1.length; index1++) {
    for (var index2 = 0; index2 < text2.length; index2++) {
      if (text1[index1] === text2[index2]) {
        commonCharacters.push(text1[index1]);
        commonCharSeqs[text1[index1]] = text1[index1];
      }
    }
  }
  commonCharacters.forEach((character, cIndex) => {
    for (var seqKey in commonCharSeqs) {
      var lastCharInSeqIndex = commonCharSeqs[seqKey].length - 1;
      var lastCharInSeq = commonCharSeqs[seqKey][lastCharInSeqIndex];
      if (text1.indexOf(character) > text1.indexOf(lastCharInSeq) && text2.indexOf(character) > text2.indexOf(lastCharInSeq)) {
        commonCharSeqs[seqKey] += character;
      }
    }
  });
  var longestSeqLength = 0;
  for (var seqKey in commonCharSeqs) {
    if (commonCharSeqs[seqKey].length > longestSeqLength) {
      longestSeqLength = commonCharSeqs[seqKey].length;
    }
  }
  return longestSeqLength;
};

module.exports = longestCommonSubsequence;