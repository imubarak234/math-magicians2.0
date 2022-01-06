/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import './calc.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      displays: '',
    };
    this.inputDisplay = this.inputDisplay.bind(this);
  }

  inputDisplay = (e) => {
    let ans = {};
    let ans2;
    const { next } = this.state;
    const { total } = this.state;
    const { operation } = this.state;
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

    this.setState({
      total: ans.total,
      next: ans.next,
      operation: ans.operation,
      displays: ans2,
    });
  }

  render() {
    const { displays } = this.state;
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
            <td><button type="button" name="AC" onClick={this.inputDisplay}>AC</button></td>
            <td><button type="button" name="+/-" onClick={this.inputDisplay}>+/-</button></td>
            <td><button type="button" name="%" onClick={this.inputDisplay}>%</button></td>
            <td><button type="button" name="÷" className="orange" onClick={this.inputDisplay}>÷</button></td>
          </tr>
          <tr>
            <td><button type="button" name="7" onClick={this.inputDisplay}>7</button></td>
            <td><button type="button" name="8" onClick={this.inputDisplay}>8</button></td>
            <td><button type="button" name="9" onClick={this.inputDisplay}>9</button></td>
            <td><button type="button" name="x" className="orange" onClick={this.inputDisplay}>x</button></td>
          </tr>
          <tr>
            <td><button type="button" name="4" onClick={this.inputDisplay}>4</button></td>
            <td><button type="button" name="5" onClick={this.inputDisplay}>5</button></td>
            <td><button type="button" name="6" onClick={this.inputDisplay}>6</button></td>
            <td><button type="button" name="-" className="orange" onClick={this.inputDisplay}>-</button></td>
          </tr>
          <tr>
            <td><button type="button" name="1" onClick={this.inputDisplay}>1</button></td>
            <td><button type="button" name="2" onClick={this.inputDisplay}>2</button></td>
            <td><button type="button" name="3" onClick={this.inputDisplay}>3</button></td>
            <td><button type="button" name="+" className="orange" onClick={this.inputDisplay}>+</button></td>
          </tr>
          <tr>
            <td colSpan="2"><button type="button" name="0" onClick={this.inputDisplay}>0</button></td>
            <td><button type="button" name="." onClick={this.inputDisplay}>.</button></td>
            <td><button type="button" name="=" className="orange" onClick={this.inputDisplay}>=</button></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Calculator;
