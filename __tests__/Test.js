import React from 'react';
import Pinball from '../screens/Pinball';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <Pinball />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});