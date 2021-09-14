const maxNumOfBalloons = require('./maxBalloons');

test('returns 0 if cannot find an instance of the word balloon', () => {
  expect(maxNumOfBalloons('leetcode')).toBe(0);
});
test('returns 0 if cannot find an instance of the entire word balloon', () => {
  expect(maxNumOfBalloons('balon')).toBe(0);
});
test('returns 1 if finds one instance of the word balloon', () => {
  expect(maxNumOfBalloons('nlaebolko')).toBe(1);
});
test('returns 2 if finds two instances of the word balloon', () => {
  expect(maxNumOfBalloons('loonbalxballpoon')).toBe(2);
});
test('returns 2 if finds two instances of the word balloon', () => {
  expect(maxNumOfBalloons("krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw")).toBe(10);
});