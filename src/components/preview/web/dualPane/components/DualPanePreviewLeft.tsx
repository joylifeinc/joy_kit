import * as React from 'react';
import { css } from 'glamor';

const loveImage = require('../../../../../assets/images/cw-default-photo.jpg');
const menuIcon = require('../../../../../assets/iconMenu.svg');

import { WeddingName } from '../../../../';

export interface Props {
  accentTextColor?: string;
  coverPhoto?: string;
  fianceeName: string;
  fontOverrides?: any;
  ownerName: string;
  message: string;
}

const containerRules = color =>
  css({
    position: 'relative',
    flexGrow: 1
  });

const overlayRules = css({
  background:
    'linear-gradient(to bottom,transparent 0,transparent 40%,rgba(0,0,0,.4) 100%)',
  bottom: 0,
  position: 'absolute',
  right: 0,
  top: 0,
  left: 0
});

const menuRules = css({
  fontSize: '12px',
  position: 'absolute',
  top: '30px',
  left: '25px',
  height: '20px',
  width: '20px'
});

const introRules = css({
  color: '#fff',
  letterSpacing: '1',
  zIndex: 1
});

const imageRules = css({
  zIndex: '-10',
  maxHeight: '100%'
});

const contentRules = coverPhoto =>
  css(
    {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column-reverse',
      padding: '10% 20% 6% 10%',
      fontSize: '44px',
      height: '100%'
    },
    coverPhoto && {
      background: `url(${coverPhoto}) center top /cover`
    }
  );

const greetingRules = css({
  fontSize: '15px',
  marginTop: '5.5%'
});

/**
 * Old theme styles
 */

const weddingNameRules = fontOverrides =>
  css(
    {
      margin: 0,
      fontSize: '5.625rem',
      transform: 'scale(.7)',
      transformOrigin: 'bottom left'
    },
    fontOverrides
  );

export const DualPanePreviewLeft: React.SFC<Props> = ({
  coverPhoto,
  accentTextColor,
  fianceeName,
  fontOverrides,
  ownerName,
  message
}) => {
  return (
    <div
      className="desktop-preview-screen joy-wedding-page"
      {...containerRules(accentTextColor)}
    >
      <div className="left-pane" {...contentRules(coverPhoto)}>
        {coverPhoto && <div {...overlayRules} />}
        <img {...menuRules} className="menu" src={menuIcon} />
        <div className="joy-wedding-intro" {...introRules}>
          <WeddingName
            wrap
            owner={ownerName}
            fiancee={fianceeName}
            styles={weddingNameRules(fontOverrides)}
          />

          <div {...greetingRules}>{message}</div>
        </div>
      </div>
    </div>
  );
};
