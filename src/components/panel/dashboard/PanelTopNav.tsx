import * as React from 'react';
import { css, StyleAttribute } from 'glamor';
import { VelocityComponent } from 'velocity-react';

import { TopNav } from '../../topNav/TopNav';

export interface Props {
  children?: React.ReactNode;

  /** Title to be displayed */
  contentLeftTitle?: string;

  /** Shorthand for an additional action */
  contentRight?: any;

  /** This will trigger the transition animation */
  showPanel: boolean;
}

// ======================
// Styles
// ======================

/* CSS */

const textOptions = {
  ' > div': {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1.8,
    fontWeight: 500,
    cursor: 'pointer'
  }
};

const topNavRules = css(
  {
    display: 'flex',
    fontSize: '12px',
    justifyContent: 'space-between',
    left: '0',
    position: 'absolute',
    right: '0',
    zIndex: 1
  },
  textOptions
);

export const PanelTopNav = ({
  children,
  contentLeftTitle,
  contentRight,
  showPanel
}: Props) => {
  return (
    <VelocityComponent
      animation={showPanel ? 'fadeOut' : 'fadeIn'}
      duration={400}
      easing="ease"
    >
      <div className="panel-dashboard__top-nav" {...topNavRules}>
        <TopNav
          hideBottomBorder={true}
          title={contentLeftTitle}
          contentRight={contentRight}
        />
      </div>
    </VelocityComponent>
  );
};
