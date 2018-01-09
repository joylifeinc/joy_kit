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
import { Label } from '../src';

const stories = storiesOf('Label', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
  const content = text('Content', 'This is where the label would go');
  const position = select(
    'Position',
    {
      'top left': 'top left',
      'top center': 'top center',
      'top right': 'top right',
      'bottom left': 'bottom left',
      'bottom center': 'bottom center',
      'bottom right': 'bottom right'
    },
    'top left'
  );
  const type = select(
    'Type',
    {
      badge: 'Badge',
      note: 'Note'
    },
    'Badge'
  );

  return (
    <div>
      <div>
        <Label content={content} position={position} type={type} />
      </div>
      <SyntaxHighlight
        codeblock={`<Label
        content={"${content}"}
        position={"${position}"}
        typ={"${type}"}
      />`}
        syntax={'jsx'}
      />
    </div>
  );
});
