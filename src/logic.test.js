import calculate from "./logic/calculate";
import operate from "./logic/operate";

describe('Series of tests for the calculate.js functions', () => {
  let testobj = {
    total: null,
    next: null,
    operation: null,
  }

  let testinput = '4';

  test('testing the first number input', () => {
    expect(calculate(testobj,testinput)).toEqual({
      next: '4',
      total: null,
    })
  })

  let testobj1 = {}
  testobj1.total = null;
  testobj1.next = '4';
  testobj1.operation = null;
  let testinput1 = '9'

  test('After updating the testobj with the results of the previous test we add input', () => {
    expect(calculate(testobj1, testinput1)).toEqual({
      next: '49',
      total: null,
    });
  })

  let testobj2 = {}
  testobj2.total = null;
  testobj2.next = '49';
  testobj2.operation = null;
  let testinput2 = '+';

  test('After updating the testobj with the results of the previous test we add input' , () => {
    expect(calculate(testobj2, testinput2)).toEqual({
      next: null,
      total: '49',
      operation: '+',
    });
  })

  let testobj3 = {}
  testobj3.total = '49';
  testobj3.next = null;
  testobj3.operation = '+';
  let testinput3 = '9';

  test('After updating the testobj with the results of the previous test we add input' , () => {
    expect(calculate(testobj3, testinput3)).toEqual({
      next: '9',
      total: '49',
      operation: '+',
    });
  })

  let testobj4 = {}
  testobj4.total = '49';
  testobj4.next = '9';
  testobj4.operation = '+'
  let testinput4 = '=';

  test('After updating the testobj with the results of the previous test we add input', () => {
    expect(calculate(testobj4, testinput4)).toEqual({
      next: null,
      total: '58',
      operation: null,
    });
  })

})