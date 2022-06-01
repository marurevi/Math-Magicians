import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const onClick = (event) => {
    const result = calculate(state, event.target.id);
    setState(result);
  };

  return (
    <>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </nav>
      <main className="main-calculator">
        <div className="main">
          <h1>Math Magicians</h1>
          <h2>Let&apos;s do some math!</h2>
        </div>
        <div className="calculator">
          <ul className="grid-container">
            <li className="fullspan">
              <div className="output">
                <span>{state.total}</span>
                <span>{state.operation}</span>
                <span>{state.next}</span>
              </div>
            </li>

            <li><Button id="AC" className="btn-grey" onClick={onClick} /></li>
            <li><Button id="+/-" className="btn-grey" onClick={onClick} /></li>
            <li><Button id="%" className="btn-grey" onClick={onClick} /></li>
            <li><Button id="÷" className="btn-orange" onClick={onClick} /></li>

            <li><Button id="7" className="btn-grey" onClick={onClick} /></li>
            <li><Button id="8" className="btn-grey" onClick={onClick} /></li>
            <li><Button id="9" className="btn-grey" onClick={onClick} /></li>
            <li><Button id="x" className="btn-orange" onClick={onClick} /></li>

            <li><Button id="4" className="btn-grey" onClick={onClick} /></li>
            <li><Button id="5" className="btn-grey" onClick={onClick} /></li>
            <li><Button id="6" className="btn-grey" onClick={onClick} /></li>
            <li><Button id="-" className="btn-orange" onClick={onClick} /></li>

            <li><Button id="1" className="btn-grey" onClick={onClick} /></li>
            <li><Button id="2" className="btn-grey" onClick={onClick} /></li>
            <li><Button id="3" className="btn-grey" onClick={onClick} /></li>
            <li><Button id="+" className="btn-orange" onClick={onClick} /></li>

            <li className="doblespan"><Button id="0" className="btn-grey" onClick={onClick} /></li>
            <li><Button id="." className="btn-grey" onClick={onClick} /></li>
            <li><Button id="=" className="btn-orange" onClick={onClick} /></li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Calculator;
