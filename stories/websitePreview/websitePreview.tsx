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

import { SyntaxHighlight } from '../utils/syntax';
import { Button, WebsitePreview } from '../../src';
const JOY_THEMES = require('./joyStyles.json');

const stories = storiesOf('Website Preview', module);
stories.addDecorator(withKnobs);

stories.add('Old Layout', () => {
  // const title = text('Title', 'Button');

  // console.log(JOY_THEMES);
  // const jsonThmes = JSON.parse(JOY_THEMES);
  let themeOptions = {};
  for (const [key, value] of Object.entries(JOY_THEMES)) {
    themeOptions[key] = value.name;
  }

  const theme = select('Theme', themeOptions, 'blank');
  const eventDate = date('Event Date', new Date(1512345600000));
  const message = text(
    'Message',
    'broh broh brhobroh broh brho broh broh brho broh broh brho broh broh brho broh broh brho broh broh brho broh broh brho broh broh brho'
  );

  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        ng-href="https://fonts.googleapis.com/css?family=Pacifico:400"
        href="https://fonts.googleapis.com/css?family=Pacifico:400"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href={`http://withjoy.com/assets/public/joyStyles3/${theme}/base.css`}
      />
      <link
        rel="stylesheet"
        type="text/css"
        href={`http://withjoy.com/assets/public/joyStyles3/${theme}/color.css`}
      />
      <WebsitePreview
        ownerName="Romeo"
        location="Oakland, CA"
        eventDate={eventDate}
        message={message}
      />
    </div>
  );
});
