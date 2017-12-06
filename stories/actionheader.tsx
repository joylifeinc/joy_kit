import * as React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs';

import { SyntaxHighlight } from './utils/syntax';
import { withState } from './utils/stateManager';
import { ActionHeader } from '../src';

const stories = storiesOf('ActionHeader', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
  const title = text('Title', 'Title');
  const titleOption = text('Title Option', 'Title Option');
  const subtitle = text('Subtitle', 'Subtitle');

  return (
    <div>
      <ActionHeader
        title={title}
        titleOption={titleOption}
        subtitle={subtitle}
      />
      <SyntaxHighlight
        codeblock={`<ActionHeader
        title={"${title}"}
        titleOption={"${titleOption}"}
        subtitle={"${subtitle}"}
      />`}
        syntax={'jsx'}
      />
    </div>
  );
});
