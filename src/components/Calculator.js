/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './calc.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="tabs">
        <table>
          <colgroup>
            <col span="3" id="col-1" />
            <col span="1" id="col-2" />
          </colgroup>
          <tr>
            <th colSpan="4"><input type="text" placeholder="0" aria-label="o" /></th>
          </tr>
          <tr>
            <td>AC</td>
            <td>+/-</td>
            <td>%</td>
            <td>/</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>x</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>-</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>+</td>
          </tr>
          <tr>
            <td colSpan="2">AC</td>
            <td>.</td>
            <td>=</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Calculator;
