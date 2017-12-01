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
import { InputLine } from '../src';

const stories = storiesOf('InputLine', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
  const label = text('Label', 'This is where the label would go');
  const placeholder = text('Placeholder', 'I am a placeholder!');
  const required = boolean('Required', false);
  const placeholderToValue = boolean('Placeholder to Value on Keypress', false);

  const InputWithState = withState(InputLine, 'value', 'handleChange');

  return (
    <div>
      <InputWithState
        label={label}
        placeholder={placeholder}
        required={required}
      />
      <SyntaxHighlight
        codeblock={`<InputLine
        value={this.state.value}
        label={"${label}"}
        placeholder={"${placeholder}"}
        required={${required}}
        handleChange={this.handleChange}
      />`}
        syntax={'jsx'}
      />
    </div>
  );
});
