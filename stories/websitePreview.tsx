import * as React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import {
  withKnobs,
  date,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs';

import { SyntaxHighlight } from './utils/syntax';
import { Button, WebsitePreview } from '../src';

const stories = storiesOf('Website Preview', module);
stories.addDecorator(withKnobs);

stories.add('Old Layout', () => {
  // const title = text('Title', 'Button');

  // const value = select(
  //   'Button Types',
  //   {
  //     standard: 'Standard',
  //     primary: 'Primary',
  //     secondary: 'Secondary',
  //     success: 'Success',
  //     security: 'Security',
  //     link: 'Link',
  //     outline: 'Outline'
  //   },
  //   'standard'
  // );

  // const uppercase = boolean('Uppercase', true);
  // const disabled = boolean('Disabled', false);
  // const disableMargins = boolean('Disable Margins', false);

  const eventDate = date('Event Date', new Date(1512345600000));

  return (
    <div>
      <WebsitePreview
        ownerName="Romeo"
        location="Oakland, CA"
        eventDate={eventDate}
        message=""
      />
    </div>
  );
});
