import * as React from 'react';
import { render, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import 'jest';
configure({ adapter: new Adapter() });

import { Label } from './Label';

// TODO: Console.log not showing up - b/c of bug with older node version: https://github.com/facebook/jest/issues/2441
describe('<Label />', () => {
  it('should render badge type', () => {
    const props = {
      content: 'Hello World',
      type: 'badge'
    };

    const wrapper = render(
      <Label position="bottom left" type="note" content="Hello World" />
    );

    // console.log(wrapper.text());
    // expect(wrapper.text()).toEqual('Hello World');
    // expect(wrapper.contains(<div data-css-bbb6w9>Hello World</div>)).toEqual(
    //   true
    // );
  });

  it('should render note type', () => {});
});
