import * as React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { css } from 'glamor';
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs';

import { SyntaxHighlight } from './utils/syntax';
import { Button, CommandBar } from '../src';
import { DropDown, FloatingPane, DropDownButton } from '../src/components/index';
import { AddToCalendarWidget } from '../src/components/addToCalendarWidget/AddToCalendarWidget';

const stories = storiesOf('DropDownButton', module);
stories.addDecorator(withKnobs);

const rules = css({
  height: '500px',
  backgroundColor: '#e9e9e9',
  '& div': {
    backgroundColor: '#f6f6f6'
  },
})

const innerBackgroundColor = css({
  '& div div': {
    backgroundColor: 'red',
  }
})

const makeButton = () => {
  return (<Button handleOnClick={null} >LOL</Button>);
};

const makeContent = () => {
  return (<AddToCalendarWidget />);
}

stories.add('overrides', () => {

  const height = text('Height', '480px');
  const items = [1, 2, 3, 4, 5];

  return (
    <div>
      <div {...rules}>
        <DropDownButton button={makeButton()} menu={makeContent()} />
      </div>
    </div>
  );
});
