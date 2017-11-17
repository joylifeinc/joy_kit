import * as React from 'react';
import { css } from 'glamor';

import {
  ModalPortal,
  BaseProps as ModalPortalProps
} from '../../modal/ModalPortal';

export interface RenderProps {
  closePortal: () => any;
}
export interface Props extends ModalPortalProps {
  /** Where the panel should come in from */
  direction?: Directions;
  description?: any;
  content?: any;
}
// ======================
// Union Types
// ======================

export type Directions = 'left' | 'right';
export type Phase = 'out' | 'in';

// ======================
// Styles
// ======================

const animations = direction => isOpen => {
  const initialTransform = `${direction === 'left' ? '-' : ''}100%`;
  if (isOpen) {
    return {
      translateX: [0, initialTransform]
    };
  }

  return {
    translateX: initialTransform
  };
};

// CSS

/* Panel */

// @TODO: NOT USED CURRENTLY
// const panelWrapperRules = css({
//   overflow: 'auto',
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0
// });

const panelRules = (direction: Directions) =>
  css({
    maxWidth: '100%',
    minHeight: '100%',
    padding: '40px',
    position: 'fixed',
    width: '600',
    [direction]: '0',
    top: '0',
    transform: `translateX(${direction === 'left' ? '-' : ''}100%)`,
    background: 'white'
  });

/**
 * A Panel Overlay is a content box that slides in from a side of the screen
 */

const PanelOverlay: React.SFC<Props> = props => {
  console.log(props)
  return (
    <ModalPortal
      type="panel-overlay"
      {...props}
      animations={animations(props.direction)}
      delay={props.isOpen && 80}
      styleRules={panelRules(props.direction)}
    />
  );
};

PanelOverlay.defaultProps = {
  closeOnBackgroundClick: true,
  closeOnEscape: true,
  hideLightbox: false,
  hideLightboxOnInactive: true,
  direction: 'right'
};

export { PanelOverlay };
