import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/calculator';
import Quote from './components/Quote';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
