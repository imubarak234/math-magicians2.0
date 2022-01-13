import calculate from '../logic/calculate';
import operate from '../logic/operate';

describe('Series of tests for the calculate.js functions', () => {
  const testobj = {
    total: null,
    next: null,
    operation: null,
  };

  const testinput = '4';

  test('testing the first number input', () => {
    expect(calculate(testobj, testinput)).toEqual({
      next: '4',
      total: null,
    });
  });

  const testobj1 = {};
  testobj1.total = null;
  testobj1.next = '4';
  testobj1.operation = null;
  const testinput1 = '9';

  test('After updating the testobj with the results of the previous test we add input', () => {
    expect(calculate(testobj1, testinput1)).toEqual({
      next: '49',
      total: null,
    });
  });

  const testobj2 = {};
  testobj2.total = null;
  testobj2.next = '49';
  testobj2.operation = null;
  const testinput2 = '+';

  test('After updating the testobj with the results of the previous test we add input', () => {
    expect(calculate(testobj2, testinput2)).toEqual({
      next: null,
      total: '49',
      operation: '+',
    });
  });

  const testobj3 = {};
  testobj3.total = '49';
  testobj3.next = null;
  testobj3.operation = '+';
  const testinput3 = '9';

  test('After updating the testobj with the results of the previous test we add input', () => {
    expect(calculate(testobj3, testinput3)).toEqual({
      next: '9',
      total: '49',
      operation: '+',
    });
  });

  const testobj4 = {};
  testobj4.total = '49';
  testobj4.next = '9';
  testobj4.operation = '+';
  const testinput4 = '=';

  test('After updating the testobj with the results of the previous test we add input', () => {
    expect(calculate(testobj4, testinput4)).toEqual({
      next: null,
      total: '58',
      operation: null,
    });
  });
});

describe('Series of tests for operate.js file', () => {
  test('Testing the add function', () => {
    expect(operate('7', '12', '+')).toBe('19');
  });

  test('Test the substract function', () => {
    expect(operate('9', '6', '-')).toBe('3');
  });

  test('Test the multiplication function', () => {
    expect(operate('9', '3', 'x')).toBe('27');
  });

  test('Test the division function', () => {
    expect(operate('20', '4', '÷')).toBe('5');
  });

  test('Testing the modulo function', () => {
    expect(operate('91', '4', '%')).toBe('3');
  });
});
