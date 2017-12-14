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
import { Button } from '../src';
import { AddToCalendarWidget } from '../src/components/index';

const stories = storiesOf('AddToCalendar', module);
stories.addDecorator(withKnobs);

const rules = css({
  height: '500px',
  backgroundColor: '#e9e9e9',
  '& div': {
    backgroundColor: '#f6f6f6'
  },
})

stories.add('default', () => {
  const name = text('Name', 'Sample Event');
  const details = text('Details', 'This is the sample event provided as an example only')
  const location = text('Location', 'Portland, OR');
  const coupleNameString = text('Event Owner\'s name(s)', 'Jessie & James');
  const dressCode = text('Dress Code', 'Stylish and formal but casual');
  const dstart = number('Start Time', 1);
  const dtend = number('End Time', 1513206166000);

  return (
    <div className="outermostContainer">
      <div {...rules}>
        <AddToCalendarWidget
          name={name}
          details={details}
          location={location}
          coupleNameString={coupleNameString}
          dressCode={dressCode}
          dtstart={dstart}
          dtend={dtend} />
      </div>
    </div>
  );
});

stories.add('overrides', () => {

  const height = text('Height', '480px');

  return (
    <div>
      <div {...rules}>
        <AddToCalendarWidget height={height} />
      </div>
    </div>
  );
});
