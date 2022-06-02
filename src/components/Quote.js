import Navigator from './Navigator';
import image from '../images/Robotpensando.jpg';

function Quote() {
  return (
    <>
      <Navigator />
      <main className="main">
        <h1>Math Magicians</h1>
        <h3>
          Mathematics is not about numbers, equations, comutations,
          or algorithms: it is about understanding. - Wiliam Paul Thurston
        </h3>
        <img src={image} alt="Quote img" />
      </main>
    </>
  );
}

export default Quote;
