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
import { SpinnerLoader } from '../src';

const stories = storiesOf('Loaders', module);
stories.addDecorator(withKnobs);

stories.add('Spinner', () => {
  return <SpinnerLoader />;
});
