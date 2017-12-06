import * as React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withKnobs, text, color, number } from '@storybook/addon-knobs';

import { SyntaxHighlight } from './utils/syntax';
import { SpinnerLoader, Fragments } from '../src';

const stories = storiesOf('Loaders', module);
stories.addDecorator(withKnobs);

stories.add('Spinner', () => {
  const height = text('Height', '50px');
  const width = text('Width', '50px');
  const borderColor = color('Color', 'black');
  const thickness = text('Thickness', '2px');

  return (
    <div>
      <SpinnerLoader
        height={height}
        width={width}
        color={borderColor}
        thickness={thickness}
      />
      <SyntaxHighlight
        syntax={'jsx'}
        codeblock={`<SpinnerLoader 
          height={"${height}"} 
          width={"${width}"} 
          color={"${borderColor}"} 
          thickness={"${thickness}"} 
        />`}
      />
    </div>
  );
});
