import { percentChangeColor } from './percentColor';

describe('percentChangeColor', () => {
  it('should return appropiate colors based on percent change', () => {
    expect(percentChangeColor(5)).toContain('green');
    expect(percentChangeColor(-5)).toContain('red');
    expect(percentChangeColor(0)).toContain('gray');
  });
});
