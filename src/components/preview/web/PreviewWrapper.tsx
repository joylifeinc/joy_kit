import * as React from 'react';
import { css } from 'glamor';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { VelocityComponent } from 'velocity-react';

const SIDE_MARGIN = 30;

export interface Props {
  previewOptions?: {
    height?: number;
    width?: number;
    maxContainerHeight?: number;
    maxContainerWidth?: string | number;
  };
  sideMargin?: number;
}

const previewRules = (
  shouldRender: boolean,
  maxHeight: number,
  maxWidth: Props['previewOptions']['maxContainerWidth']
) => {
  return css({
    opacity: shouldRender ? 1 : 0,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight,
    maxWidth,
    height: '100%',
    width: '100%'
  });
};

class PreviewWrapper extends React.Component<Props> {
  private windowResizeSub;
  private previewContainerRef: HTMLDivElement;

  state = { scale: 1, hasInitiallyScaled: false, shouldRender: false };

  componentDidMount() {
    this.setWindowResizeSubscription();
    this.updatePreviewScale();
  }

  componentWillUnmount() {
    this.windowResizeSub && this.windowResizeSub.unsubscribe();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.hasInitiallyScaled && !this.state.shouldRender) {
      setTimeout(() => {
        this.setState({ shouldRender: true });
      }, 400);
    }
  }

  private setWindowResizeSubscription = () => {
    const windowResize$ = Observable.fromEvent(window, 'resize');
    this.windowResizeSub = windowResize$.subscribe({
      next: evt => {
        this.updatePreviewScale();
      }
    });
  };

  private updatePreviewScale = () => {
    const sideMargin = this.props.sideMargin || SIDE_MARGIN;
    const { height, width } = this.props.previewOptions;
    const widthPreviewRatio =
      (this.previewContainerRef.offsetWidth - sideMargin * 2) / width;
    const heightPreviewRatio =
      (this.previewContainerRef.offsetHeight - sideMargin * 2) / height;
    const containerToPreviewRatio =
      heightPreviewRatio < widthPreviewRatio
        ? heightPreviewRatio
        : widthPreviewRatio;

    let scale;
    if (containerToPreviewRatio < 0) {
      scale = 0.8;
    } else if (containerToPreviewRatio <= 1) {
      scale = containerToPreviewRatio;
    } else if (containerToPreviewRatio > 1) {
      scale = 1;
    }
    if (this.state.scale !== scale) {
      this.setState({
        scale,
        hasInitiallyScaled: true
      });
    } else if (!this.state.hasInitiallyScaled) {
      this.setState({ hasInitiallyScaled: true });
    }
  };

  render() {
    const { previewOptions } = this.props;
    const { hasInitiallyScaled, shouldRender, scale } = this.state;
    return (
      <div
        ref={(el: HTMLDivElement) => {
          this.previewContainerRef = el;
        }}
        {...previewRules(
          hasInitiallyScaled && shouldRender,
          previewOptions.maxContainerHeight,
          previewOptions.maxContainerWidth
        )}
      >
        <VelocityComponent
          animation={{ translateZ: 0.001, scale: this.state.scale }}
          easing={shouldRender ? 'ease' : null}
        >
          {this.props.children}
        </VelocityComponent>
      </div>
    );
  }
}

export { PreviewWrapper };
