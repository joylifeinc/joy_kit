import * as React from 'react';
import { css } from 'glamor';

import { COLORS } from '../../../styles/variables';
const iconForwardArrow = require('../../../assets/iconForwardArrowBlk.svg');

export interface Props {
  content: React.ReactNode;
  handleOnClick?: () => any;
}

const navItemRules = css({
  display: 'flex',
  alignItems: 'center',
  borderTop: `1px solid ${COLORS.GRAY_SECONDARY}`,
  height: 58,
  cursor: 'pointer',
  padding: '0 20',
  ':hover': {
    background: '#f9f8f8'
  }
});

const iconRules = css({
  border: '1px solid palevioletred',
  height: 58,
  lineHeight: '58px',
  width: 58,
  marginRight: 10,
  textAlign: 'center'
});

const textRules = css({
  color: COLORS.BLACK_SECONDARY,
  flexGrow: 1,
  fontSize: 13,
  letterSpacing: 0.2
});

export const PanelNavItem: React.SFC<Props> = ({ handleOnClick, content }) => {
  return (
    <div
      className="panel-navigator__nav-item"
      {...navItemRules}
      onClick={handleOnClick}
    >
      <div {...iconRules}>Icon</div>
      <div {...textRules}>{content}</div>
      <img src={iconForwardArrow} />
    </div>
  );
};

PanelNavItem.defaultProps = {
  handleOnClick: null
};
