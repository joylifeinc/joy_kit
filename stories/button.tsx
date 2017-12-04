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
import { Button } from '../src';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
  const title = text('Title', 'Button');

  const value = select(
    'Button Types',
    {
      standard: 'Standard',
      primary: 'Primary',
      secondary: 'Secondary',
      success: 'Success',
      security: 'Security',
      link: 'Link',
      outline: 'Outline'
    },
    'standard'
  );

  const uppercase = boolean('Uppercase', true);
  const disabled = boolean('Disabled', false);

  return (
    <div>
      <Button
        type={value}
        uppercase={uppercase}
        disabled={disabled}
        handleOnClick={() => console.log('button')}
      >
        {title}
      </Button>
      <SyntaxHighlight
        codeblock={`<Button type="${value}"
        uppercase={${uppercase}} 
        disabled={${disabled}}
        handleOnClick={() => console.log('button')}>
  ${title}
</Button>
      `}
        syntax={'jsx'}
      />
    </div>
  );
});

stories.add('overrides', () => {
  const title = text('Title', 'Button');

  const uppercase = boolean('Uppercase', true);
  const disabled = boolean('Disabled', false);
  const backgroundColorOverride = text('Background Color Overrides', '');
  const colorOverride = text('Text Color Overrides', '');

  return (
    <div>
      <Button
        uppercase={uppercase}
        disabled={disabled}
        backgroundColorOverride={backgroundColorOverride}
        colorOverride={colorOverride}
        handleOnClick={() => console.log('button')}
      >
        {title}
      </Button>
      <SyntaxHighlight
        codeblock={`<Button uppercase={${uppercase}} 
        disabled={${disabled}}
        backgroundColorOverride={${backgroundColorOverride}}
        colorOverride={"${colorOverride}"}
        handleOnClick={() => console.log('button')}>
  ${title}
</Button>
      `}
        syntax={'jsx'}
      />
    </div>
  );
});
