import * as React from 'react';
import { css, keyframes, StyleAttribute } from 'glamor';

import { PanelOverlay, PanelNavItem } from '../../';
import { Props as NavItemProps } from './PanelNavItem';
import { COLORS } from '../../../styles/variables';

//======================
// Props
//======================

export interface Props {
  children?: React.ReactNode;

  /** The context of the navigator */
  header: string;

  height?: string;

  /** A brief overview of the navigational content*/
  description?: string;

  disablePadding?: boolean;

  /** Shorthand for CommandBarNavItem. Typically an array of route shorthands */
  navItems?: React.ReactElement<any> | Array<NavItemArrayProps>;

  /** Additional bottom actions */
  actions?: any;
}

export interface NavItemArrayProps extends NavItemProps {
  key: any;
}

//======================
// Styles
//======================

export const containerRules = (height: string, disablePadding: boolean) =>
  css({
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    height: height ? height : 'calc(100vh - 80px)',
    padding: !disablePadding && '40px',
    width: '100%',
    ' h2': {
      fontWeight: 'bold'
    }
  });

const headerRules = css({
  fontWeight: 100,
  margin: 0
});

const descriptionRules = css({
  fontSize: 15,
  lineHeight: '24px',
  letterSpacing: 0.2
});

const navItemRules = css({
  flexGrow: 1,
  margin: '40px 0',
  overflow: 'scroll',
  '> div:last-child': {
    borderBottom: `1px solid ${COLORS.GRAY_SECONDARY}`
  }
});

const actionRules = css({
  display: 'flex',
  justifyContent: 'center',
  flexShrink: 0,
  '& > *:not(:last-child)': {
    marginRight: 20
  }
});

const renderNavItems = navItems => {
  if (navItems instanceof Array) {
    return navItems.map(navItem => {
      if (!navItem) return null;
      const { content, icon, key, handleOnClick } = navItem;
      return (
        <PanelNavItem
          key={key}
          content={content}
          icon={icon}
          handleOnClick={handleOnClick}
        />
      );
    });
  }
  return navItems;
};

export const PanelNavigator: React.SFC<Props> = ({
  actions,
  children,
  description,
  disablePadding,
  header,
  height = null,
  navItems
}) => {
  return (
    <section
      className="panel-navigator"
      {...containerRules(height, disablePadding)}
    >
      <h2 className="panel-navigator__header">{header}</h2>
      {description && (
        <div className="panel-navigator__description" {...descriptionRules}>
          {description}
        </div>
      )}
      {children ? (
        <div {...css({ flexGrow: 1, overflow: 'scroll', margin: '40px 0' })}>
          {children}
        </div>
      ) : (
        <div {...navItemRules}>{renderNavItems(navItems)}</div>
      )}
      {actions && <div {...actionRules}>{actions}</div>}
    </section>
  );
};

PanelNavigator.defaultProps = {
  disablePadding: false
};
