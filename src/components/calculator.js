import React from 'react';
import './calculator.css';

class Calculator extends React.PureComponent {
  render() {
    return (
      <ul className="grid-container">
        <li className="fullspan"><div className="output">0</div></li>

        <li><button className="btn-grey" type="button">AC</button></li>
        <li><button className="btn-grey" type="button">+/-</button></li>
        <li><button className="btn-grey" type="button">%</button></li>
        <li><button className="btn-orange" type="button">/</button></li>

        <li><button className="btn-grey" type="button">7</button></li>
        <li><button className="btn-grey" type="button">8</button></li>
        <li><button className="btn-grey" type="button">9</button></li>
        <li><button className="btn-orange" type="button">X</button></li>

        <li><button className="btn-grey" type="button">4</button></li>
        <li><button className="btn-grey" type="button">5</button></li>
        <li><button className="btn-grey" type="button">6</button></li>
        <li><button className="btn-orange" type="button">-</button></li>

        <li><button className="btn-grey" type="button">1</button></li>
        <li><button className="btn-grey" type="button">2</button></li>
        <li><button className="btn-grey" type="button">3</button></li>
        <li><button className="btn-orange" type="button">+</button></li>

        <li className="doblespan"><button className="btn-grey doblespan" type="button">0</button></li>
        <li><button className="btn-grey" type="button">.</button></li>
        <li><button className="btn-orange" type="button">=</button></li>
      </ul>
    );
  }
}

export default Calculator;
