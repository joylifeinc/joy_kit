import * as React from 'react';
import { css } from 'glamor';

const loveImage = require('../../../assets/images/cw-default-photo.jpg');
const menuIcon = require('../../../assets/iconMenu.svg');

import { WeddingName } from '../../';

export interface Props {
  accentTextColor?: string;
  ownerName: string;
  fianceeName: string;
  message: string;
}

const containerRules = color =>
  css({
    position: 'relative',
    flexGrow: 1,
    background:
      'linear-gradient(to bottom,transparent 0,transparent 40%,rgba(0,0,0,.4) 100%)'
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
  letterSpacing: '1',
  color: '#fff'
});

const imageRules = css({
  zIndex: '-10',
  maxHeight: '100%'
});

const contentRules = css({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column-reverse',
  padding: '10% 20% 6% 10%',
  fontSize: '44px',
  height: '100%'
});

const greetingRules = css({
  fontSize: '15px',
  marginTop: '5.5%'
});

/**
 * Old theme styles
 */

const weddingNameRules = css({
  fontSize: '5.625rem',
  transform: 'scale(.7)',
  transformOrigin: 'bottom left'
});

export const WebsitePreviewLeftPane: React.SFC<Props> = ({
  accentTextColor,
  ownerName,
  fianceeName,
  message
}) => {
  return (
    <div
      className="desktop-preview-screen joy-wedding-page"
      {...containerRules(accentTextColor)}
    >
      {/* <img {...imageRules} src={loveImage} /> */}
      <div className="left-pane" {...contentRules}>
        <img {...menuRules} className="menu" src={menuIcon} />
        <div className="joy-wedding-intro" {...introRules}>
          <WeddingName
            id=""
            wrap
            owner={ownerName}
            fiancee={fianceeName}
            styles={weddingNameRules}
          />

          <div {...greetingRules}>{message}</div>
        </div>
      </div>
    </div>
  );
};
