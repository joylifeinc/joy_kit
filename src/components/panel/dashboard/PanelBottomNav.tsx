import * as React from 'react';
import { css } from 'glamor';
import { VelocityComponent } from 'velocity-react';

import { CommandBar } from '../../commandBar/CommandBar';
import 'velocity-animate/velocity.ui';

// ======================
// Props
// ======================

export interface Props {
  children?: React.ReactNode;

  /** This will trigger the transition animation */
  showPanel: boolean;

  /** Describes content to navigate */
  title: any;

  /** Shorthand for CommandBar.NavItem. Typically an array (or fragment) of NavItems  */
  nav: any;

  /** An optional CTA */
  contentRight?: any;
}

// ======================
// Styles
// ======================

/* CSS */

const bottomNavRules = (showPanel: boolean) =>
  css({
    alignItems: 'center',
    background: 'rgb(255,255,255)',
    bottom: '0',
    boxSizing: 'border-box',
    display: 'flex',
    height: '62',
    justifyContent: 'center',
    maxHeight: '62',
    position: 'absolute',
    width: '100%'
  });

export const PanelBottomNav = ({
  contentRight,
  children,
  nav,
  showPanel,
  title
}: Props) => {
  return (
    <VelocityComponent
      animation={showPanel ? 'transition.slideDownOut' : 'transition.slideUpIn'}
      duration={400}
      easing="ease"
    >
      <div
        {...bottomNavRules(showPanel)}
        className="panel-dashboard__bottom-nav"
      >
        <CommandBar.Container
          title={title}
          nav={nav}
          contentRight={contentRight}
        />
      </div>
    </VelocityComponent>
  );
};
