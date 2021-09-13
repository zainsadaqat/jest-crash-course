const sum = require('./sum');

describe('Jest Crash Course', () => {
  test('Should add 1 + 2 equal to 3', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
  test('Should be equal', () => {
    const obj = {};
    expect(obj).toEqual({});
  });
  test('Truthy and Falsy', () => {
    const n = '';
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
  });
  test('Numbers', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
  });
});
