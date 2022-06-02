import Navigator from './Navigator';
import image from '../images/Se+aprende+matemáticas+en+un+modelo+virtual.jpg';

function Home() {
  return (
    <>
      <Navigator />
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
        <img src={image} alt="home img" />
      </main>
    </>
  );
}

export default Home;
