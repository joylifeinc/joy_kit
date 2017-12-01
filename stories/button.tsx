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
  const buttonType = {
    label: 'Button Types',
    options: {
      standard: 'Standard',
      primary: 'Primary',
      secondary: 'Secondary',
      success: 'Success',
      security: 'Security',
      link: 'Link',
      outline: 'Outline'
    },
    defaultValue: 'standard'
  };
  const value = select(
    buttonType.label,
    buttonType.options,
    buttonType.defaultValue
  );

  const uppercase = boolean('Uppercase', true);
  const title = text('Title', 'Button');

  return (
    <div>
      derp
      <Button
        type={value}
        uppercase={uppercase}
        handleOnClick={() => console.log('button')}
      >
        {title}
      </Button>
      <SyntaxHighlight
        codeblock={`<Button type="${value}"
        uppercase={${uppercase}} 
        handleOnClick={() => console.log('button')}>
  ${title}
</Button>
      `}
        syntax={'jsx'}
      />
    </div>
  );
});
