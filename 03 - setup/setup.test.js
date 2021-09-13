let animals = ['cat', 'dog', 'chicken', 'duck'];

beforeAll(() => {
  console.log('beforeAll function will be called before all tests');
});

afterAll(() => {
  console.log('afterAll function will be called after all tests');
});

beforeEach(() => {
  console.log('beforeEach function will be called before each test');
  animals = ['cat', 'dog', 'chicken', 'duck'];
});

// afterEach function will be called after each test
afterEach(() => {
  console.log('afterEach function will be called after each test');
  animals = ['cat', 'dog', 'chicken', 'duck'];
});

describe('Animals Array: ', () => {
  beforeEach(() => {
    console.log(
      'beforeEach function will be called before each test of this describe block'
    );
    animals = ['cat', 'dog', 'chicken', 'duck'];
  });
  test('Lion should be added at last index', () => {
    animals.push('lion');
    expect(animals[animals.length - 1]).toBe('lion');
  });
  test('Lion should be added at first index', () => {
    animals.unshift('tiger');
    expect(animals[0]).toBe('tiger');
  });
  test('Initial length of animals array should be 4', () => {
    expect(animals.length).toBe(4);
  });
});

describe('It has nothing to do with animals array', () => {
  test.only('Just for practice', () => {
    expect(true).toBeTruthy();
  });
});
