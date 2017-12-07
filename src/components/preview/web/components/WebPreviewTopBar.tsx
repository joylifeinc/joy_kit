import * as React from 'react';
import { css } from 'glamor';

import { WeddingName } from '../../../../';

export interface Props {
  backgroundColor?: string;
  ownerName?: string;
  fianceeName?: string;
  hideWeddingName?: boolean;
}

const containerRules = backgroundColor =>
  css({
    backgroundColor,
    width: '100%',
    textAlign: 'center',
    lineHeight: '36px',
    minHeight: 36
  });

const buttonContainerRules = css({
  position: 'absolute',
  left: '10px',
  top: '0',
  height: '36px',
  display: 'flex',
  alignItems: 'center'
});

const buttonRules = css({
  height: '10px',
  width: '10px',
  borderRadius: '10px',
  margin: '0 3px'
});

const closeButtonRules = css({
  backgroundColor: '#ff5e53'
});

const minimizeButtonRules = css({
  backgroundColor: '#ffc107'
});

const expandButtonRules = css({
  backgroundColor: '#00cd36'
});

/**
 * Old theme styles
 */

const websiteTitleRules = css(containerRules, {
  fontSize: '10px',
  textTransform: 'uppercase',
  fontWeight: '600',
  letterSpacing: '.2px',
  margin: 0
});

export const WebPreviewTopBar: React.SFC<Props> = ({
  backgroundColor,
  ownerName,
  fianceeName,
  hideWeddingName
}) => {
  return (
    <div {...containerRules(backgroundColor)}>
      {!hideWeddingName && (
        <WeddingName
          inline
          owner={ownerName}
          fiancee={fianceeName}
          styles={websiteTitleRules}
        />
      )}
      <div {...buttonContainerRules}>
        <div {...buttonRules} {...closeButtonRules} />
        <div {...buttonRules} {...minimizeButtonRules} />
        <div {...buttonRules} {...expandButtonRules} />
      </div>
    </div>
  );
};

WebPreviewTopBar.defaultProps = {
  backgroundColor: '#E2E2E4',
  hideWeddingName: false
};
