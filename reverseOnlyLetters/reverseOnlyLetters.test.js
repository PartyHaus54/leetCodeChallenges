const reverseOnlyLetters = require('./reverseOnlyLetters');

describe('Reverse Letters', () => {
  it('should be a function', () => {
    expect(typeof reverseOnlyLetters).toBe('function');
  });

  it('should return a string', () => {
    const result = reverseOnlyLetters('');
    expect(typeof result).toBe('string');
  });

  it('should return empty string', () => {
    const result = reverseOnlyLetters('');
    expect(result).toBe('');
  });

  it('should return dc-ba', () => {
    const result = reverseOnlyLetters('ab-cd');
    expect(result).toBe('dc-ba');
  });

  it('should return j-Ih-gfE-dCba', () => {
    const result = reverseOnlyLetters('a-bC-dEf-ghIj');
    expect(result).toBe('j-Ih-gfE-dCba');
  });

  it('should return Qedo1ct-eeLg=ntse-T!', () => {
    const result = reverseOnlyLetters('Test1ng-Leet=code-Q!');
    expect(result).toBe('Qedo1ct-eeLg=ntse-T!');
  });
});
