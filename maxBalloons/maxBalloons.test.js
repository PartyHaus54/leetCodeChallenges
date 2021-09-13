const maxBalloons = require('./maxBalloons');

describe('Max Balloons', () => {
  it('should be a function', () => {
    expect(typeof maxBalloons).toBe('function');
  });

  it('should return a number', () => {
    const result = maxBalloons('');
    expect(typeof result).toBe('number');
  });

  it('should return 0', () => {
    const result = maxBalloons('none');
    expect(result).toBe(0);
  });

  it('should return 1', () => {
    const result = maxBalloons('nlaebolko');
    expect(result).toBe(1);
  });

  it('should return 2', () => {
    const result = maxBalloons('loonbalxballpoon');
    expect(result).toBe(2);
  });

  it('should return 0 for balon', () => {
    const result = maxBalloons('balon');
    expect(result).toBe(0);
  });
});
