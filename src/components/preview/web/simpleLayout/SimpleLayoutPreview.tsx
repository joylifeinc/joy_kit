import * as React from 'react';
import { css } from 'glamor';
import { PreviewWrapper } from '../PreviewWrapper';

export interface Props {
  previewOptions?: {
    height?: number;
    width?: number;
  };
}

const previewRules = css({
  width: 640,
  height: 876
});

export const SimpleLayoutPreview: React.SFC<Props> = ({ previewOptions }) => {
  return (
    <PreviewWrapper for="simpleLayout" previewOptions={previewOptions}>
      <div {...previewRules}>I'm going to be the content</div>
    </PreviewWrapper>
  );
};

SimpleLayoutPreview.defaultProps = {
  previewOptions: {
    width: 640,
    height: 876
  }
};
