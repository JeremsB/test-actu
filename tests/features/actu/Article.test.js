import React from 'react';
import { shallow } from 'enzyme';
import { Article } from '../../../src/features/actu/Article';

describe('actu/Article', () => {
  it('renders node with correct class name', () => {
    const props = {
      actu: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Article {...props} />
    );

    expect(
      renderedComponent.find('.actu-article').length
    ).toBe(1);
  });
});
