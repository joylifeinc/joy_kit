import * as React from 'react';
import { css } from 'glamor';

import { TEXT } from '../../styles/variables';
import { CommandBarNavItem, Props as NavProps } from './CommandBarNavItem';

export interface Props {
  /** Shorthand for an additional action */
  contentRight?: any;

  /** Can be an element to render or can be shorthand for an array of CommandBarNavItems   */
  nav: React.ReactElement<any> | NavItemsArray[];

  /** Shorthand for primary content */
  title: any;
}

export interface NavItemsArray extends NavProps {
  key: string;
}

const commandBarRules = css({
  alignItems: 'center',
  background: '#FFF',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%'
});

const titleRules = css({
  color: TEXT.color,
  left: 40,
  fontSize: 15,
  position: 'absolute'
});

const navRules = css({
  '> *:not(:last-child)': {
    marginRight: 100
  }
});

const actionRules = css({
  position: 'absolute',
  right: 40
});

const renderNavItems = navItems => {
  if (navItems instanceof Array) {
    return navItems.map(({ content, key, handleOnClick }) => (
      <CommandBarNavItem
        key={key}
        content={content}
        handleOnClick={handleOnClick}
      />
    ));
  }
  return navItems;
};

const Container: React.SFC<Props> = ({ contentRight, nav, title }) => {
  return (
    <div className="command-bar" {...commandBarRules}>
      <div className="command-bar__title" {...titleRules}>
        {title}
      </div>
      <div className="command-bar__nav" {...navRules}>
        {renderNavItems(nav)}
      </div>
      {contentRight && (
        <div className="command-bar__action" {...actionRules}>
          {contentRight}
        </div>
      )}
    </div>
  );
};

const CommandBar = {
  Container,
  NavItem: CommandBarNavItem
};

export { CommandBar };
