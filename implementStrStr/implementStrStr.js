/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') {
    return 0;
  };

  var needelLindex = -1;

  const compareChars = (anchorIndex, compareIndex) => {
    if (haystack[anchorIndex + compareIndex] === needle[compareIndex]) {
      if (compareIndex === needle.length - 1 && needelLindex === -1) {
        needelLindex = anchorIndex;
      } else if (anchorIndex + compareIndex < haystack.length) {
        compareIndex++;
        compareChars(anchorIndex, compareIndex);
      }
    }
  }

  for (var anchorIndex = 0; anchorIndex < haystack.length; anchorIndex++) {
    var compareIndex = 0;
    compareChars(anchorIndex, compareIndex);
  }

  return needelLindex;
};