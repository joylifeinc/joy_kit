import * as React from 'react';
import { css } from 'glamor';

import menuIcon from '../../../../../assets/iconMenu.svg';

import { WeddingName } from '../../../../';

export interface Props {
  accentTextColor?: string;
  baseColor?: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
  coverPhoto?: string;
  fianceeName: string;
  fontOverrides?: any;
  ownerName: string;
  message: string;
}

const containerRules = color =>
  css({
    backgroundColor: '#000',
    display: 'flex',
    position: 'relative',
    width: '60%'
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
  height: '20px',
  left: '25px',
  position: 'absolute',
  top: '30px',
  width: '20px'
});

const introRules = css({
  color: '#fff',
  letterSpacing: '1',
  zIndex: 1
});

const imageRules = css({
  maxHeight: '100%',
  zIndex: '-10'
});

const contentRules = coverPhoto =>
  css(
    {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column-reverse',
      fontSize: '44px',
      // height: 'calc(100% - 36px)',
      padding: '20px 40px',
      width: '100%'
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
      fontSize: '76px',
      transform: 'scale(.7)',
      transformOrigin: 'bottom left'
    },
    fontOverrides
  );

export const TwoPanePreviewLeft: React.SFC<Props> = ({
  accentTextColor,
  coverPhoto,
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

TwoPanePreviewLeft.defaultProps = {
  fontOverrides: {}
};
