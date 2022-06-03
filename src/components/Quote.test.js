import renderer from 'react-test-renderer';
import Quotes from './Quotes';

it('Quotes renders correctly', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
