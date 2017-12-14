import * as React from 'react';
import { css } from 'glamor';
import { Link } from 'react-router-dom';

import iconBackArrow from '../../assets/iconBackArrowBlk.svg';
import { TEXT } from '../../styles/variables';

export interface Props {
  hideBottomBorder?: boolean;
  title?: string;
  subtitle?: string;
  link?: string;
  backButton?: boolean;
  click?: () => void;
  contentCenter?: any;
  contentRight?: any;
}

const navBarStyles = (hideBottomBorder: boolean) =>
  css({
    width: '100%',
    height: '100px',
    borderBottom: !hideBottomBorder && '1px solid rgb(232, 232, 232)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
  });

const titleStyles = css({
  fontSize: 21,
  fontWeight: 300
});

const subTitleStyles = css({
  fontSize: 10,
  fontWeight: 'bold',
  letterSpacing: 2,
  textTransform: 'uppercase'
});

const backButton = css({
  height: 20,
  marginRight: 20,
  width: 'auto'
});

const baseContentOptions = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  fontSize: 10,
  fontWeight: 'bold',
  textDecoration: 'none',
  color: TEXT.color
};

const leftContent = css(baseContentOptions, {
  flexGrow: '1',
  paddingRight: '40px',
  marginLeft: 40
});

const centerContent = css({
  flexGrow: '3'
});

const rightContent = css(baseContentOptions, {
  flexGrow: '1',
  justifyContent: 'flex-end',
  marginRight: 40
});
export const TopNav = ({
  title,
  subtitle,
  contentCenter,
  contentRight,
  click,
  link,
  backButton = false,
  hideBottomBorder
}: Props) => (
  <div {...navBarStyles(hideBottomBorder)}>
    {!click ? (
      <Link to={`${link}`} {...leftContent}>
        {backButton ? <img {...backButton} src={iconBackArrow} /> : null}
        <div {...titleStyles}>{title}</div>
        <div {...subTitleStyles}>{subtitle}</div>
      </Link>
    ) : (
      <a onClick={click} {...leftContent}>
        <img {...backButton} src={iconBackArrow} />
        <div {...titleStyles}>{title}</div>
        <div {...subTitleStyles}>{subtitle}</div>
      </a>
    )}
    <div {...centerContent}>{contentCenter}</div>
    <div {...rightContent}>{contentRight}</div>
  </div>
);
