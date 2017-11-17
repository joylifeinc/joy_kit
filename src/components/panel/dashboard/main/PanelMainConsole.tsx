import * as React from 'react';
import { css } from 'glamor';
import { VelocityComponent } from 'velocity-react';

// ======================
// Props
// ======================

export interface Props {
  children?: React.ReactNode;
  showPanel: boolean;
}

// ======================
// Styles
// ======================

const consoleRules = () =>
  css({
    backfaceVisibility: 'visible',
    background: 'white',
    height: '100%',
    mixBlendMode: 'normal',
    width: '600'
  });

export const PanelMainConsole = ({ children, showPanel }: Props) => {
  return (
    <VelocityComponent
      animation={{ translateZ: 0, translateX: showPanel ? 0 : '100%' }}
      duration={400}
      easing="ease"
    >
      <div {...consoleRules()} className="panel-dashboard__console">
        {children}
      </div>
    </VelocityComponent>
  );
};
