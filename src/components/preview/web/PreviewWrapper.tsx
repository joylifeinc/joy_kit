import * as React from 'react';
import { css } from 'glamor';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { VelocityComponent } from 'velocity-react';

const SIDE_MARGIN = 30;

export interface Props {
  for: For;
  previewOptions?: {
    height?: number;
    width?: number;
    maxContainerHeight?: number;
    maxContainerWidth?: number;
  };
  sideMargin?: number;
  previewContainerId?: string;
}

export type For = 'twoPane' | 'simpleLayout';

const previewWrapperRules = (maxHeight: number, maxWidth: number) =>
  css({
    height: '100%',
    width: '100%',
    maxHeight,
    maxWidth,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  });

export class PreviewWrapper extends React.Component<Props> {
  private windowResizeSub;
  private previewContainer;

  state = { scale: 1 };

  componentDidMount() {
    this.previewContainer = document.getElementById(
      this.props.previewContainerId
        ? this.props.previewContainerId
        : `${this.props.for}PreviewContainer`
    );
    this.setWindowResizeSubscription();
    this.updatePreviewScale();
  }

  componentWillUnmount() {
    this.windowResizeSub && this.windowResizeSub.unsubscribe();
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
      (this.previewContainer.offsetWidth - sideMargin * 2) / width;
    const heightPreviewRatio =
      (this.previewContainer.offsetHeight - sideMargin * 2) / height;
    const containerToPreviewRatio =
      heightPreviewRatio < widthPreviewRatio
        ? heightPreviewRatio
        : widthPreviewRatio;

    if (containerToPreviewRatio < 0) {
      this.setState({ scale: 0.8 });
    } else if (containerToPreviewRatio <= 1) {
      this.setState({ scale: containerToPreviewRatio });
    } else if (containerToPreviewRatio > 1) {
      this.setState({ scale: 1 });
    }
  };

  render() {
    const { previewOptions } = this.props;
    return (
      <div
        id={`${this.props.for}PreviewContainer`}
        data-website-preview={this.props.for}
        {...previewWrapperRules(
          previewOptions.maxContainerHeight,
          previewOptions.maxContainerWidth
        )}
      >
        <VelocityComponent
          animation={{ translateZ: 0.001, scale: this.state.scale }}
          easing="ease"
        >
          {this.props.children}
        </VelocityComponent>
      </div>
    );
  }
}
