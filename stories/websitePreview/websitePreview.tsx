import * as React from 'react';
import { css } from 'glamor';
import { addDecorator, storiesOf } from '@storybook/react';
import {
  withKnobs,
  color,
  date,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs';

import { SyntaxHighlight } from '../utils/syntax';
import { Button, DualPanePreview } from '../../src';
const JOY_THEMES = require('./joyStyles.json');
const JOY_FONTS = require('./joyFonts.json');

const stories = storiesOf('Website Preview', module);
stories.addDecorator(withKnobs);

stories.add('Dual Pane', () => {
  let themeOptions = {};
  for (const [key, value] of Object.entries(JOY_THEMES)) {
    themeOptions[key] = value.name;
  }

  let fontMap = {};
  let fontOptions = {};
  JOY_FONTS.forEach(font => {
    fontOptions[font.fontFamily] = font.fontFamily;
    fontMap[font.fontFamily] = font;
  });

  const ownerName = text('Owner Name', 'Frank Castle');
  const fianceeName = text('Fiancee Name', 'Karen Page');
  const eventDate = date('Event Date', new Date(1512345600000));
  const location = text('Location', 'Oakland, CA');
  const message = text(
    'Message',
    'broh broh brhobroh broh brho broh broh brho broh broh brho broh broh brho broh broh brho broh broh brho broh broh brho broh broh brho'
  );
  const coverPhoto = text(
    'Cover Photo',
    'https://s3-us-west-2.amazonaws.com/joy-public-assets-bucket/ktran-development/hero_jesslynn_daniel.jpg'
  );
  const backgroundColor = color('Background Color', 'rgb(253, 181, 161)');
  const theme = select('Theme', themeOptions, 'blank');
  const font = select('Font', fontOptions, 'Roboto');

  return (
    <div>
      <div {...css({ paddingTop: '62%', position: 'relative' })}>
        <DualPanePreview
          baseBackgroundColor={backgroundColor}
          activeFont={fontMap[font]}
          coverPhoto={coverPhoto}
          location={location}
          eventDate={eventDate}
          message={message}
          ownerName={ownerName}
          fianceeName={fianceeName}
          theme={theme}
        />
      </div>
      <SyntaxHighlight
        syntax={'jsx'}
        codeblock={` <DualPanePreview
        activeFont={${JSON.stringify(fontMap[font])}}
        backgroundColor={"${backgroundColor}"}
        coverPhoto={"${coverPhoto}"}
        location={"${location}"}
        eventDate={"${eventDate}"}
        message={"${message}"}
        ownerName={"${ownerName}"}
        fianceeName={"${fianceeName}"}
        theme={"${theme}"}
      />
      `}
      />
    </div>
  );
});
