const fetchData = require('./async');

test('should return correct todo - async await', async () => {
  const todo = await fetchData(1);
  expect(todo.id).toBe(1);
});

test('should return correct todo - promise then', () => {
  fetchData(1).then((todo) => {
    expect(todo.id).toBe(1);
  });
});
