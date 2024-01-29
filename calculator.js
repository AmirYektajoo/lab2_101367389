// calculator.js

// Import the calculator functions
const { add, sub, mul, div } = require('./calculator.js');

// Test cases for addition
test('Addition Test - PASS', () => {
  const result = add(5, 2);
  expect(result).toBe(7);
  console.log('add(5, 2) - Expected: 7, Actual:', result, 'PASS');
});

test('Addition Test - FAIL', () => {
  const result = add(5, 2);
  expect(result).toBe(8);
  console.log('add(5, 2) - Expected: 8, Actual:', result, 'FAIL');
});

// Test cases for subtraction
test('Subtraction Test - PASS', () => {
  const result = sub(5, 2);
  expect(result).toBe(3);
  console.log('sub(5, 2) - Expected: 3, Actual:', result, 'PASS');
});

test('Subtraction Test - FAIL', () => {
  const result = sub(5, 2);
  expect(result).toBe(5);
  console.log('sub(5, 2) - Expected: 5, Actual:', result, 'FAIL');
});

// Test cases for multiplication
test('Multiplication Test - PASS', () => {
  const result = mul(5, 2);
  expect(result).toBe(10);
  console.log('mul(5, 2) - Expected: 10, Actual:', result, 'PASS');
});

test('Multiplication Test - FAIL', () => {
  const result = mul(5, 2);
  expect(result).toBe(12);
  console.log('mul(5, 2) - Expected: 12, Actual:', result, 'FAIL');
});

// Test cases for division
test('Division Test - PASS', () => {
  const result = div(10, 2);
  expect(result).toBe(5);
  console.log('div(10, 2) - Expected: 5, Actual:', result, 'PASS');
});

test('Division Test - FAIL', () => {
  const result = div(10, 2);
  expect(result).toBe(2);
  console.log('div(10, 2) - Expected: 2, Actual:', result, 'FAIL');
});

// Jest-like simple testing functions
function test(name, testFunction) {
  try {
    testFunction();
  } catch (error) {
    console.error(name + ' - ' + error.message);
  }
}

function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`Expected ${expected}, but got ${result}`);
      }
    },
  };
}
