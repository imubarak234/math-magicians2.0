/* eslint-disable react/prefer-stateless-function */

import React, { useState } from 'react';
import './calc.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [displays, setDisplays] = useState('');

  const inputDisplay = (e) => {
    let ans = {};
    let ans2;
    // const  next1  = next;
    // const  total1 = total;
    // const operation1 = operation;
    const ans1 = {
      next,
      total,
      operation,
    };
    ans = calculate(ans1, e.target.getAttribute('name'));

    if (ans.next) ans2 = ans.next;
    else if (ans.total) ans2 = ans.total;
    else if (ans.operation) ans2 = ans.operation;
    else ans2 = 0;

    setTotal(ans.total);
    setNext(ans.next);
    setOperation(ans.operation);
    setDisplays(ans2);
  };

  return (
    <div className="tabs">
      <table>
        <colgroup>
          <col span="3" id="col-1" />
          <col span="1" id="col-2" />
        </colgroup>
        <tr>
          <th colSpan="4"><input type="text" placeholder="0" aria-label="o" value={displays} /></th>
        </tr>
        <tr>
          <td><button type="button" name="AC" onClick={inputDisplay}>AC</button></td>
          <td><button type="button" name="+/-" onClick={inputDisplay}>+/-</button></td>
          <td><button type="button" name="%" onClick={inputDisplay}>%</button></td>
          <td><button type="button" name="÷" className="orange" onClick={inputDisplay}>÷</button></td>
        </tr>
        <tr>
          <td><button type="button" name="7" onClick={inputDisplay}>7</button></td>
          <td><button type="button" name="8" onClick={inputDisplay}>8</button></td>
          <td><button type="button" name="9" onClick={inputDisplay}>9</button></td>
          <td><button type="button" name="x" className="orange" onClick={inputDisplay}>x</button></td>
        </tr>
        <tr>
          <td><button type="button" name="4" onClick={inputDisplay}>4</button></td>
          <td><button type="button" name="5" onClick={inputDisplay}>5</button></td>
          <td><button type="button" name="6" onClick={inputDisplay}>6</button></td>
          <td><button type="button" name="-" className="orange" onClick={inputDisplay}>-</button></td>
        </tr>
        <tr>
          <td><button type="button" name="1" onClick={inputDisplay}>1</button></td>
          <td><button type="button" name="2" onClick={inputDisplay}>2</button></td>
          <td><button type="button" name="3" onClick={inputDisplay}>3</button></td>
          <td><button type="button" name="+" className="orange" onClick={inputDisplay}>+</button></td>
        </tr>
        <tr>
          <td colSpan="2"><button type="button" name="0" onClick={inputDisplay}>0</button></td>
          <td><button type="button" name="." onClick={inputDisplay}>.</button></td>
          <td><button type="button" name="=" className="orange" onClick={inputDisplay}>=</button></td>
        </tr>
      </table>
    </div>
  );
};

export default Calculator;
