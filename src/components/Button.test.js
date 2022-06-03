import renderer from 'react-test-renderer';
import Button from './Button';

it('CalculatorButton renders correctly', () => {
  const handleClick = () => true;
  const tree = renderer.create(<Button text="Submit" handleClick={handleClick} />).toJSON();
  expect(tree).toMatchSnapshot();
});
