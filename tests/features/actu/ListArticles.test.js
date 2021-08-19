import React from 'react';
import { shallow } from 'enzyme';
import { ListArticles } from '../../../src/features/actu/ListArticles';

describe('actu/ListArticles', () => {
  it('renders node with correct class name', () => {
    const props = {
      actu: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <ListArticles {...props} />
    );

    expect(
      renderedComponent.find('.actu-list-articles').length
    ).toBe(1);
  });
});
