import React from 'react';
import Button from './Button';
import './calculator.css';

class Calculator extends React.PureComponent {
  render() {
    return (
      <ul className="grid-container">
        <li className="fullspan"><div className="output">0</div></li>

        <li><Button id="AC" className="btn-grey" onClick="onClick" /></li>
        <li><Button id="+/-" className="btn-grey" onClick="onClick" /></li>
        <li><Button id="%" className="btn-grey" onClick="onClick" /></li>
        <li><Button id="/" className="btn-orange" onClick="onClick" /></li>

        <li><Button id="7" className="btn-grey" onClick="onClick" /></li>
        <li><Button id="8" className="btn-grey" onClick="onClick" /></li>
        <li><Button id="9" className="btn-grey" onClick="onClick" /></li>
        <li><Button id="X" className="btn-orange" onClick="onClick" /></li>

        <li><Button id="4" className="btn-grey" onClick="onClick" /></li>
        <li><Button id="5" className="btn-grey" onClick="onClick" /></li>
        <li><Button id="6" className="btn-grey" onClick="onClick" /></li>
        <li><Button id="-" className="btn-orange" onClick="onClick" /></li>

        <li><Button id="1" className="btn-grey" onClick="onClick" /></li>
        <li><Button id="2" className="btn-grey" onClick="onClick" /></li>
        <li><Button id="3" className="btn-grey" onClick="onClick" /></li>
        <li><Button id="+" className="btn-orange" onClick="onClick" /></li>

        <li className="doblespan"><Button id="0" className="btn-grey" onClick="onClick" /></li>
        <li><Button id="." className="btn-grey" onClick="onClick" /></li>
        <li><Button id="=" className="btn-orange" onClick="onClick" /></li>
      </ul>
    );
  }
}

export default Calculator;
