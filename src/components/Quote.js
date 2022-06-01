import { Link } from 'react-router-dom';

function Quote() {
  return (
    <>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </nav>
      <main className="main">
        <h1>Math Magicians</h1>
        <h3>
          Mathematics is not about numbers, equations, comutations,
          or algorithms: it is about understanding. - Wiliam Paul Thurston
        </h3>
      </main>
    </>
  );
}

export default Quote;
