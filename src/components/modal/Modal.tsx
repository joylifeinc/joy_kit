import * as React from 'react';
import { css, keyframes, StyleAttribute } from 'glamor';

import { ModalHeader } from './ModalHeader';
import { ModalContent } from './ModalContent';
import { ModalActions } from './ModalActions';
import { ModalPortal, BaseProps } from './ModalPortal';

//======================
// Interfaces
//======================

interface Props extends BaseProps {
  /** A modal can vary in size. */
  size?: Size;
}

interface State {
  isClosing: boolean;
}

//======================
// Union Types
//======================

type Size = 'mini' | 'small' | 'normal' | 'large' | 'fullscreen';

//======================
// Styling
//======================

const animations = isOpen => {
  if (isOpen) {
    return {
      scale: [1, 1.05],
      opacity: 1
    };
  }
  return {
    scale: [0.95, 1],
    opacity: 0
  };
};

/* CSS */

const sizeOptions: { [index in Size]: any } = {
  mini: { width: 360 },
  small: { width: 480 },
  normal: { width: 600 },
  large: { width: 700 },
  fullscreen: { width: '100%', height: '100%' }
};

const modalRules = (size: Size) => {
  return css(
    sizeOptions[size],
    {
      background: 'rgba(255,255,255, 1)',
      borderRadius: '2',
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      margin: '5em auto',
      opacity: 0,
      padding: '0 1.5rem',
      top: '1em'
    },
    size !== 'fullscreen' && {
      [`@media only screen and (max-width: 767px)`]: {
        width: '95%'
      }
    }
  );
};

/**
 * A modal displays content that temporarily blocks interactions with the main view
 */
export class Modal extends React.Component<Props> {
  static defaultProps = {
    size: 'small' as Size,
    closeOnEscape: true,
    closeOnBackgroundClick: true,
    hideLightbox: false,
    hideLightboxOnInactive: true
  };

  static Header = ModalHeader;
  static Content = ModalContent;
  static Actions = ModalActions;

  render() {
    return (
      <ModalPortal
        type="modal"
        {...this.props}
        animations={animations}
        styleRules={modalRules(this.props.size)}
      />
    );
  }
}
