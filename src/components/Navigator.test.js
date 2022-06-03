import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navigator from './Navigator';

it('Home renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Navigator />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
