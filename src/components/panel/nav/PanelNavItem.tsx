import * as React from 'react';
import { css, keyframes } from 'glamor';

import { COLORS } from '../../../styles/variables';
import iconForwardArrow from '../../../assets/iconForwardArrowBlk.svg';

export interface Props {
  icon?: string;
  content: React.ReactNode;
  title?: string;
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

const iconRules = (icon: string) =>
  css(
    {
      height: 58,
      lineHeight: '58px',
      width: 58,
      marginRight: 10,
      textAlign: 'center'
    },
    icon && {
      backgroundImage: `url('${icon}')`,
      backgroundSize: 'auto',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
  );

const textRules = css({
  color: COLORS.BLACK_SECONDARY,
  flexGrow: 1,
  fontSize: 13,
  letterSpacing: 0.2
});

const svgRules = css({
  marginRight: 20
});

export const PanelNavItem: React.SFC<Props> = ({
  content,
  handleOnClick,
  title,
  icon
}) => {
  return (
    <div
      className="panel-navigator__nav-item"
      role="button"
      tabIndex={0}
      title={title}
      {...navItemRules}
      onClick={handleOnClick}
    >
      <div {...iconRules(icon)} />
      <div {...textRules}>{content}</div>
      <img src={iconForwardArrow} {...svgRules} />
    </div>
  );
};

PanelNavItem.defaultProps = {
  handleOnClick: null
};
