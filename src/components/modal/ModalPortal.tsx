import * as React from 'react';
import { css, keyframes, StyleAttribute } from 'glamor';
import { Portal } from 'react-portal';
import { Fragments } from '../../util';
import { VelocityComponent } from 'velocity-react';

import { ModalLightBox, Props as ModalLightBoxProps } from './ModalLightBox';
import { ModalHeader } from './ModalHeader';
import { ModalContent } from './ModalContent';
import { ModalActions } from './ModalActions';

//======================
// Interfaces
//======================

export interface RenderProps {
  closePortal: () => any;
}

export interface BaseProps {
  /** Primary content. */
  children?: React.ReactNode;

  /** Whether or not the Modal should close when the escape key is pressed. */
  closeOnEscape?: boolean;

  /** Whether or not the Modal should close when the background is clicked. */
  closeOnBackgroundClick?: boolean;

  /** Whether or not to hide the lightbox if the modal is not active */
  hideLightboxOnInactive?: boolean;

  /** Whether or not to hide the lightbox altogether */
  hideLightbox?: boolean;

  /**
   * Whether or not to ignore close events when they occur - as opposed to adding/removing
   * event listeners.
   */
  ignoreCloseEvents?: boolean;

  /** Whether or not the accompanying modal is the most recently active */
  isActive: boolean;

  /** Whether or not the accompanying modal is open */
  isOpen: boolean;

  /**
   * Called when a close event happens AND right after the closing animation.
   * IE user presses escape (if enabled), clicks on the background (if enabled), or
   * triggers a close event (as defined by the developer).
   * @param {SyntheticEvent} e
   */
  onClose: ([any]?) => any;

  /**
   * Called when the modal will be removed from the DOM.
   * @param {object} data - All Props
   */
  onUnmount?: (data) => any;

  node?: any;

  clickThroughWrapper?: boolean;

  /**
   * Allows for inline rendering and wrapping without having to create a new component.
   * The props parameter receives a `closePortal` prop that should be invoked at the end of
   * an interaction in order to complete the animation flow.
   */
  render?: (props: RenderProps) => any;

  /**
   * In the event where there could be many panels, we don't want to immediately remove it from the DOM.
   *  We reset the close state post closing animation so that it can be re-opened
   */
  resetAfterClosing?: boolean;

  runOnMount?: boolean;
}

export interface Props extends BaseProps {
  type: Type;
  styleRules: StyleAttribute;
  wrapperOverrideRules?: StyleAttribute | {};
  delay?: number;
  animations: (isOpen: boolean) => any;
}
export interface State {
  isClosing: boolean;
}

//======================
// Union Types
//======================

export type Type = 'modal' | 'panel-overlay';

//======================
// Styling
//======================

const wrapperRules = (
  isActive: boolean,
  hideLightbox: boolean,
  clickThroughWrapper: boolean,
  wrapperOverrides
) => {
  const disablePointerEvents =
    (!isActive && hideLightbox) || clickThroughWrapper;
  return css(
    {
      overflow: 'auto',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 15,
      pointerEvents: disablePointerEvents && 'none'
    },
    wrapperOverrides
  );
};

/**
 * A modal displays content that temporarily blocks interactions with the main view
 */
export class ModalPortal extends React.Component<Props, State> {
  private closingTimeoutId;

  static defaultProps = {
    closeOnEscape: true,
    closeOnBackgroundClick: true,
    clickThroughWrapper: false,
    hideLightboxOnInactive: true,
    hideLightbox: false,
    resetAfterClosing: false,
    runOnMount: true
  };

  state: State = { isClosing: false };

  componentDidMount() {
    if (this.props.isOpen) {
      // Set overflow hidden so that the background doesn't scroll
      document.body.style.overflow = 'hidden';
    }
  }

  componentWillReceiveProps(nextProps) {
    const bodyOverflow = document.body.style.overflow;
    if (nextProps.isOpen && bodyOverflow !== 'hidden') {
      document.body.style.overflow = 'hidden';
    } else if (!nextProps.isOpen) {
      document.body.style.overflow = 'auto';
    }
  }
  componentWillUnmount() {
    const { onUnmount } = this.props;
    document.body.style.overflow = 'auto';
    onUnmount && onUnmount(this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isClosing && !Boolean(this.closingTimeoutId)) {
      this.closingTimeoutId = window.setTimeout(() => {
        // Set overflow hidden so that the background doesn't scroll
        document.body.style.overflow = 'auto';
        this.props.onClose && this.props.onClose();

        window.clearTimeout(this.closingTimeoutId);
        this.closingTimeoutId = null;

        if (this.props.resetAfterClosing) {
          this.setState({ isClosing: false });
        }
      }, 300);
    }
  }

  protected closePortal = () => {
    this.setState({ isClosing: true });
  };

  private buildModalContent = () => {
    const { isClosing } = this.state;
    const {
      animations,
      delay,
      isActive,
      runOnMount,
      styleRules,
      type,
      render
    } = this.props;
    let animation = null;
    if (animations) {
      animation = animations(!isClosing && isActive);
    }
    return (
      <VelocityComponent
        animation={animation}
        duration={300}
        delay={delay && delay}
        runOnMount={runOnMount}
        easing="ease"
      >
        <div className={type} {...styleRules}>
          {render ? this.inlineRender() : this.props.children}
        </div>
      </VelocityComponent>
    );
  };

  private inlineRender() {
    const passedProps = { closePortal: this.closePortal };
    return this.props.render(passedProps);
  }

  render() {
    const { isClosing } = this.state;
    const {
      children,
      clickThroughWrapper,
      closeOnBackgroundClick,
      closeOnEscape,
      onClose,
      node,
      hideLightboxOnInactive,
      hideLightbox,
      ignoreCloseEvents,
      isActive,
      isOpen,
      type,
      wrapperOverrideRules
    } = this.props;

    const modalContent = this.buildModalContent();
    const portal = (
      <Portal node={node}>
        <Fragments>
          <ModalLightBox
            closeOnBackgroundClick={closeOnBackgroundClick}
            closeOnEscape={closeOnEscape}
            handleCloseEvent={this.closePortal}
            hide={hideLightbox}
            ignoreCloseEvents={ignoreCloseEvents}
            isActive={isActive || (!isActive && !hideLightboxOnInactive)}
            isOpen={isOpen && !isClosing}
          />
          {type === 'modal' && (
            <div
              className={`${type}-wrapper`}
              {...wrapperRules(
                isActive,
                hideLightbox,
                clickThroughWrapper,
                wrapperOverrideRules
              )}
            >
              {modalContent}
            </div>
          )}
          {type === 'panel-overlay' && modalContent}
        </Fragments>
      </Portal>
    );

    return isOpen ? portal : null;
  }
}
