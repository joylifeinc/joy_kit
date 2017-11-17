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

const contentRules = css({
  backfaceVisibility: 'visible',
  mixBlendMode: 'normal',
  position: 'absolute',
  maxHeight: 'calc(100% - 60px)'
});

const animations = {
  show: {
    left: '25%',
    translateX: '-25%',
    translateY: 99
  },
  hide: {
    left: '50%',
    translateX: '-50%',
    translateY: 70
  }
};

export const PanelMainContent = ({ children, showPanel }: Props) => {
  const animation = animations[showPanel ? 'show' : 'hide'];
  return (
    <VelocityComponent animation={animation} duration={400} easing="ease">
      <div {...contentRules} className="panel-dashboard__content">
        {children}
      </div>
    </VelocityComponent>
  );
};
