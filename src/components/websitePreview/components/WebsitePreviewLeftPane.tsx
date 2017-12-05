import * as React from 'react';
import { css } from 'glamor';

const loveImage = require('../../../assets/images/cw-default-photo.jpg');
const menuIcon = require('../../../assets/iconMenu.svg');

import { WeddingName } from '../../';

const leftPane = css({
  position: 'absolute',
  top: '36px',
  left: '0',
  width: '480px',
  height: '464px',
  borderRadius: '5px',
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
  color: '#fff',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '10% 20% 10% 10%'
});

const imageRules = css({
  zIndex: '-10',
  maxHeight: '100%'
});

const nameRules = css({
  fontSize: '44px'
});

const greetingRules = css({
  fontSize: '15px',
  marginTop: '5.5%'
});

export const WebsitePreviewLeftPane = ({ ownerName, fianceeName }) => {
  return (
    <div {...leftPane}>
      <img {...imageRules} src={loveImage} />
      <div {...nameRules}>
        <img {...menuRules} src={menuIcon} />
        <div {...introRules}>
          <WeddingName wrap owner={ownerName} fiancee={fianceeName} />

          <div {...greetingRules}>
            We are so excited to celebrate with you. Help us capture our wedding
            with Joy.
          </div>
        </div>
      </div>
    </div>
  );
};
