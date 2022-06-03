import React from 'react';
import { Link } from 'react-router-dom';

function Navigator() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </nav>
  );
}

export default Navigator;
