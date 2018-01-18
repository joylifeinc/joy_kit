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
import {
  Button,
  TwoPanePreview,
  SimpleLayoutPreview,
  weddingNameString,
  Colors
} from '../../src';
const JOY_THEMES = require('./joyStyles.json');
const JOY_FONTS = require('./joyFonts.json');

const stories = storiesOf('Website Preview', module);
stories.addDecorator(withKnobs);

stories.add('Two Pane', () => {
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
  const baseColorSelector = color('Background Color', 'rgba(253, 181, 161, 1)');
  const baseTextColor = select(
    'Base Text Color',
    {
      light: 'light',
      dark: 'dark'
    },
    'dark'
  );
  const theme = select('Theme', themeOptions, 'blank');
  const font = select('Font', fontOptions, 'Roboto');
  const useThemeColors = boolean('Use Theme Colors', true);

  const textColor =
    baseTextColor === 'light'
      ? { r: 1, g: 1, b: 1, a: 1 }
      : { r: 58 / 255, g: 60 / 255, b: 62 / 255, a: 1 };

  const [r, g, b, a = 100] = Colors.findRgb(baseColorSelector);
  const baseColor = { r: r / 255, g: g / 255, b: b / 255, a: a / 100 };
  return (
    <div>
      <div {...css({ height: 700, position: 'relative' })}>
        <TwoPanePreview
          baseColor={baseColor}
          baseText={textColor}
          activeFont={fontMap[font]}
          coverPhotos={{ welcome: { page: 'welcome', url: coverPhoto } }}
          eventInfo={{
            location,
            date: eventDate,
            message,
            ownerName,
            fianceeName
          }}
          theme={theme}
          title={weddingNameString(ownerName, fianceeName)}
          useThemeColors={useThemeColors}
        />
      </div>
      <SyntaxHighlight
        syntax={'jsx'}
        codeblock={` <TwoPanePreview
        activeFont={${JSON.stringify(fontMap[font])}}
        baseColor={${JSON.stringify(baseColor)}}
        baseTextColor={${JSON.stringify(textColor)}}
        coverPhotos={{
          welcome: {
            page: 'welcome',
            url: '${coverPhoto}'
          }
        }}
        eventInfo={{
          location: '${location}',
          eventDate: '${eventDate}',
          message: '${message}',
          ownerName: '${ownerName}',
          fianceeName: '${fianceeName}'
        }}
        theme="${theme}"
        useThemeColors={${useThemeColors}}
      />
      `}
      />
    </div>
  );
});

stories.add('Simple Layout', () => {
  const pages = [
    { name: 'welcome', url: 'welcome' },
    { name: 'wedding party', url: 'vip' },
    { name: 'story', url: 'story' },
    { name: 'schedule', url: 'schedule' }
  ];
  return (
    <div>
      <SimpleLayoutPreview eventInfo={{}} pages={pages} />
    </div>
  );
});
