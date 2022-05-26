import React from 'react';
import Button from './Button';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn = (event) => {
    const result = calculate(this.state, event.target.id);
    this.setState(result);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <ul className="grid-container">
        <li className="fullspan">
          <div className="output">
            <span>{total}</span>
            <span>{operation}</span>
            <span>{next}</span>
          </div>
        </li>

        <li><Button id="AC" className="btn-grey" onClick={this.onClickBtn} /></li>
        <li><Button id="+/-" className="btn-grey" onClick={this.onClickBtn} /></li>
        <li><Button id="%" className="btn-grey" onClick={this.onClickBtn} /></li>
        <li><Button id="÷" className="btn-orange" onClick={this.onClickBtn} /></li>

        <li><Button id="7" className="btn-grey" onClick={this.onClickBtn} /></li>
        <li><Button id="8" className="btn-grey" onClick={this.onClickBtn} /></li>
        <li><Button id="9" className="btn-grey" onClick={this.onClickBtn} /></li>
        <li><Button id="x" className="btn-orange" onClick={this.onClickBtn} /></li>

        <li><Button id="4" className="btn-grey" onClick={this.onClickBtn} /></li>
        <li><Button id="5" className="btn-grey" onClick={this.onClickBtn} /></li>
        <li><Button id="6" className="btn-grey" onClick={this.onClickBtn} /></li>
        <li><Button id="-" className="btn-orange" onClick={this.onClickBtn} /></li>

        <li><Button id="1" className="btn-grey" onClick={this.onClickBtn} /></li>
        <li><Button id="2" className="btn-grey" onClick={this.onClickBtn} /></li>
        <li><Button id="3" className="btn-grey" onClick={this.onClickBtn} /></li>
        <li><Button id="+" className="btn-orange" onClick={this.onClickBtn} /></li>

        <li className="doblespan"><Button id="0" className="btn-grey" onClick={this.onClickBtn} /></li>
        <li><Button id="." className="btn-grey" onClick={this.onClickBtn} /></li>
        <li><Button id="=" className="btn-orange" onClick={this.onClickBtn} /></li>
      </ul>
    );
  }
}

export default Calculator;
