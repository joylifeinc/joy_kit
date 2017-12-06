import * as React from 'react';
import { css } from 'glamor';

const previewContainerRules = css({
  boxSizing: 'box-sizing',
  height: '100%',
  width: '100%',
  position: 'relative'
});

const previewRules = css({
  width: 1020,
  height: '100%'
});

export class SimpleLayoutPreview extends React.Component {
  render() {
    return (
      <div
        id="simpleLayoutPreviewContainer"
        data-website-preview="simple-layout"
        {...previewContainerRules}
      >
        <div {...previewRules}>I'm going to be the content</div>
      </div>
    );
  }
}
