import * as React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs';

import { SyntaxHighlight } from './syntax';
import { InputLine } from '../src';

const stories = storiesOf('InputLine', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
  const label = text('Label', 'This is where the label would go');

  return (
    <div>
      <InputLine
        value={''}
        label={label}
        handleChange={e => console.log(e.target.value)}
      />
      <SyntaxHighlight
        codeblock={`<InputLine
        value={''}
        label={'${label}'}
        handleChange={e => console.log(e.target.value)}
      />`}
        syntax={'jsx'}
      />
    </div>
  );
});
