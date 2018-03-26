import * as React from 'react';
import { css, keyframes, StyleAttribute } from 'glamor';
import { VelocityComponent } from 'velocity-react';

const ESCAPE_KEY_CODE = 27;

export interface Props {
  /** Whether or not the Modal should close when the escape key is pressed */
  closeOnEscape: boolean;

  /** Whether or not the Modal should close when the background is clicked */
  closeOnBackgroundClick: boolean;

  ignoreCloseEvents?: boolean;

  /** How to handle the accepted close events */
  handleCloseEvent: (props: object, e: any) => any;

  hide?: boolean;

  /** Whether or not the modal is the most recently active modal */
  isActive: boolean;

  /** Whether or not the modal is rendered on the screen */
  isOpen: boolean;

  /** isOpen/close animation overrides */
  animationOverrideRules?: Styles;

  /** Additional/override styles */
  styleRules?: Styles;
}

//======================
// Union Types
//======================

export type Styles = StyleAttribute | {};

//======================
// Styling
//======================

/* CSS */

const overlayRules = (animationOverrideRules: Styles, styleRules: Styles) =>
  css(
    {
      backgroundColor: 'rgba(0, 0, 0, .8)',
      bottom: 0,
      left: 0,
      position: 'fixed',
      top: 0,
      right: 0,
      opacity: 0,
      zIndex: 10
    },
    styleRules
  );

/**
 * The overlay will act as dimmer of the screen and it will contain a modal
 */
export class ModalLightBox extends React.Component<Props, {}> {
  static defaultProps = {
    hide: false,
    ignoreCloseEvents: false
  };

  componentWillMount() {
    if (this.props.closeOnEscape) {
      document.addEventListener('keyup', this.handleEscapeKeyClick, false);
    }

    if (this.props.closeOnBackgroundClick) {
      document.addEventListener('click', this.handleBackgroundClick, false);
    }
  }

  componentWillUnmount() {
    if (this.props.closeOnEscape) {
      document.removeEventListener('keyup', this.handleEscapeKeyClick, false);
    }

    if (this.props.closeOnBackgroundClick) {
      document.removeEventListener('click', this.handleBackgroundClick, false);
    }
  }

  private handleEscapeKeyClick = e => {
    if (e.which === ESCAPE_KEY_CODE) {
      this.closeModal(e);
    }
  };

  private handleBackgroundClick = e => {
    if (
      e.target === e.currentTarget ||
      (e.target.classList[0] && e.target.classList[0].endsWith('wrapper'))
    ) {
      this.closeModal(e);
    }
  };

  private closeModal = e => {
    if (!this.props.ignoreCloseEvents && this.props.isActive) {
      this.props.handleCloseEvent(this.props, e);
    }
  };

  render() {
    if (this.props.hide) {
      return null;
    }

    const {
      animationOverrideRules,
      closeOnBackgroundClick,
      isOpen,
      styleRules
    } = this.props;

    return (
      <VelocityComponent
        animation={{ opacity: isOpen ? 1 : 0 }}
        duration={300}
        runOnMount
      >
        <div
          {...overlayRules(animationOverrideRules, styleRules)}
          className="modal-lightbox"
        />
      </VelocityComponent>
    );
  }
}
