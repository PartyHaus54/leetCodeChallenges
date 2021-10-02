const longestCommonSubsequence = require('./longestCommonSubsequence.js');

describe('Longest Common Subsequence', () => {
  it('should maintain the relative order of the common characters', () => {
    expect(longestCommonSubsequence("ezupkr", "ubmrapg")).toEqual(2);
    expect(longestCommonSubsequence("oxcpqrsvwf", "shmtulqrypy")).toEqual(2);
  });
});