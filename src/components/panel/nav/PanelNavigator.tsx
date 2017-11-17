import * as React from 'react';
import { css } from 'glamor';

// TODO: CURRENTLY UNUSED
// import { PanelNavItem } from '../../../components';
import { Props as NavItemProps } from './PanelNavItem';
import { COLORS } from '../../../styles/variables';

// ======================
// Props
// ======================

export interface Props {
  children?: React.ReactNode;

  /** The context of the navigator */
  header: string;

  /*A brief overview of the navigational content*/
  description: string;

  /** Shorthand for CommandBarNavItem. Typically an array of route shorthands */
  navItems: React.ReactElement<any> | NavItemArrayProps[];

  /** Additional bottom actions */
  actions?: any;
}

export interface NavItemArrayProps extends NavItemProps {
  key: any;
}

// ======================
// Styles
// ======================

export const containerRules: { [attributeName: string]: string } = css({
  background: 'white',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '40px',
  width: '100%',
  '> *:not(:last-child)': {
    marginBottom: 40
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
  '> div:last-child': {
    borderBottom: `1px solid ${COLORS.GRAY_SECONDARY}`
  }
});

const actionRules = css({
  display: 'flex',
  justifyContent: 'center',
  '& > *:not(:last-child)': {
    marginRight: 20
  }
});

// @TODO: NOT USED CURRENTLY
// const renderNavItems = navItems => {
//   if (navItems instanceof Array) {
//     return navItems.map(({ content, key, handleOnClick }) => (
//       <PanelNavItem key={key} content={content} handleOnClick={handleOnClick} />
//     ));
//   }
//   return navItems;
// };

export const PanelNavigator: React.SFC<Props> = ({
  actions,
  children,
  description,
  header,
  navItems
}) => {
  return (
    <section className="panel-navigator" {...containerRules}>
      <h2 {...headerRules}>{header}</h2>
      <div {...descriptionRules}>{description}</div>
      <div {...navItemRules}>{navItems}</div>
      {actions && <div {...actionRules}>{actions}</div>}
    </section>
  );
};
