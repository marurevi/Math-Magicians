import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </nav>
      <main className="main">
        <h1>Math Magicians</h1>
        <h2>Welcome to our page!</h2>
        <p>
          You may have noticed when clicking the links that the layout in App disappears.
          Repeating shared layouts is a pain in the neck. We&apos;ve learned that most
          UI is a series of nested layouts that almost always map to segments of the URL
          so this idea is baked right in to React Router.

          Let&apos;s get some automatic, persistent layout handling by doing just two things:

          Nest the routes inside of the App route
          Render an Outlet
          First let&apos;s nest the routes. Right now the expenses and invoices routes are siblings
          to the app, we want to make them children of the app route:

        </p>
      </main>
    </>
  );
}

export default Home;
