const fetchData = require('../02 - async/async');
const axios = require('axios');

const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i += 1) {
    console.log(callback(items[i]));
  }
};

test('Mock Callback', () => {
  const mockCalledBack = jest.fn((x) => 42 + x);
  forEach([0, 1, 2], mockCalledBack);
  expect(mockCalledBack.mock.calls.length).toBe(3);
});

test.only('Mock Axios', async () => {
  jest.spyOn(axios, 'get').mockReturnValueOnce({
    data: {
      id: 1,
      todo: 'Hello my friend',
    },
  });
  const results = await fetchData(1);
  console.log('Results: ', results);
  expect(results.todo).toBe('Hello my friend');
});
