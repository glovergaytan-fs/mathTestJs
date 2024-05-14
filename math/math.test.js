const { add, subtract, divide, multiply, squareRoot, maximum } = require('./math');

describe('Basic Math Operations', () => {
  it('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should subtract two numbers', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  it('should divide two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('should multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});

describe('Advanced Math Operations', () => {
  it('should return the square root of a number', () => {
    expect(squareRoot(9)).toBe(3);
  });

  it('should return the maximum of two numbers', () => {
    expect(maximum(5, 10)).toBe(10);
  });
}); 
