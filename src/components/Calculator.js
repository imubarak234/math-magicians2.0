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
    <div className="tabs container d-flex">
      <div className="w-50 align-self-start">
        <h2 className="h1">Lets do Some Math!</h2>
      </div>
      <div className="w-50">
        <h2>Math Calculator</h2>
        <table>
          <colgroup>
            <col span="3" id="col-1" />
            <col span="1" id="col-2" />
          </colgroup>
          <tr>
            <th colSpan="4"><input type="text" placeholder="0" aria-label="o" value={displays} data-testid="input" /></th>
          </tr>
          <tr>
            <td><button type="button" name="AC" data-testid="AC" onClick={inputDisplay}>AC</button></td>
            <td><button type="button" name="+/-" data-testid="+/-" onClick={inputDisplay}>+/-</button></td>
            <td><button type="button" name="%" data-testid="%" onClick={inputDisplay}>%</button></td>
            <td><button type="button" name="÷" data-testid="÷" className="orange" onClick={inputDisplay}>÷</button></td>
          </tr>
          <tr>
            <td><button type="button" name="7" data-testid="7" onClick={inputDisplay}>7</button></td>
            <td><button type="button" name="8" data-testid="8" onClick={inputDisplay}>8</button></td>
            <td><button type="button" name="9" data-testid="9" onClick={inputDisplay}>9</button></td>
            <td><button type="button" name="x" data-testid="x" className="orange" onClick={inputDisplay}>x</button></td>
          </tr>
          <tr>
            <td><button type="button" name="4" data-testid="4" onClick={inputDisplay}>4</button></td>
            <td><button type="button" name="5" data-testid="5" onClick={inputDisplay}>5</button></td>
            <td><button type="button" name="6" data-testid="6" onClick={inputDisplay}>6</button></td>
            <td><button type="button" name="-" data-testid="-" className="orange" onClick={inputDisplay}>-</button></td>
          </tr>
          <tr>
            <td><button type="button" name="1" data-testid="1" onClick={inputDisplay}>1</button></td>
            <td><button type="button" name="2" data-testid="2" onClick={inputDisplay}>2</button></td>
            <td><button type="button" name="3" data-testid="3" onClick={inputDisplay}>3</button></td>
            <td><button type="button" name="+" data-testid="+" className="orange" onClick={inputDisplay}>+</button></td>
          </tr>
          <tr>
            <td colSpan="2"><button type="button" name="0" data-testid="0" onClick={inputDisplay}>0</button></td>
            <td><button type="button" name="." data-testid="." onClick={inputDisplay}>.</button></td>
            <td><button type="button" name="=" data-testid="=" className="orange" onClick={inputDisplay}>=</button></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Calculator;
