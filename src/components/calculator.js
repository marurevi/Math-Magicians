import React from 'react';
import './calculator.css';

class Calculator extends React.PureComponent {
  render() {
    return (
      <ul className="grid-container">
        <li className="fullspan"><div className="output">0</div></li>

        <li><button type="button" id="AC" className="btn-grey">AC</button></li>
        <li><button type="button" id="+/-" className="btn-grey">+/-</button></li>
        <li><button type="button" id="%" className="btn-grey">%</button></li>
        <li><button type="button" id="/" className="btn-orange">/</button></li>

        <li><button type="button" id="7" className="btn-grey">7</button></li>
        <li><button type="button" id="8" className="btn-grey">8</button></li>
        <li><button type="button" id="9" className="btn-grey">9</button></li>
        <li><button type="button" id="X" className="btn-orange">X</button></li>

        <li><button type="button" id="4" className="btn-grey">4</button></li>
        <li><button type="button" id="5" className="btn-grey">5</button></li>
        <li><button type="button" id="6" className="btn-grey">6</button></li>
        <li><button type="button" id="-" className="btn-orange">-</button></li>

        <li><button type="button" id="1" className="btn-grey">1</button></li>
        <li><button type="button" id="2" className="btn-grey">2</button></li>
        <li><button type="button" id="3" className="btn-grey">3</button></li>
        <li><button type="button" id="+" className="btn-orange">+</button></li>

        <li className="doblespan"><button type="button" id="0" className="btn-grey">0</button></li>
        <li><button type="button" id="." className="btn-grey">.</button></li>
        <li><button type="button" id="=" className="btn-orange">=</button></li>
      </ul>
    );
  }
}

export default Calculator;
