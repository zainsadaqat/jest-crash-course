const sum = require('./sum');
test('Should add 1 + 2 equal to 3', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
