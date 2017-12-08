import * as React from 'react';
import { css } from 'glamor';
import { Observable } from 'rxjs';
import { VelocityComponent } from 'velocity-react';

const SIDE_MARGIN = 20;

export interface Props {
  for: For;
  previewOptions?: {
    height?: number;
    width?: number;
  };
}

export type For = 'dualPane' | 'simpleLayout';

const previewWrapperRules = css({
  height: '100%',
  width: '100%',
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
      `${this.props.for}PreviewContainer`
    );
    this.setWindowResizeSubscription();
    this.updatePreviewScale();
  }

  componentWillUnmount() {
    this.windowResizeSub && this.windowResizeSub.unsubscribe();
  }

  private setWindowResizeSubscription = () => {
    const windowResize$ = Observable.fromEvent(window, 'resize');
    this.windowResizeSub = windowResize$.debounceTime(250).subscribe({
      next: evt => {
        this.updatePreviewScale();
      }
    });
  };

  private updatePreviewScale = () => {
    const { width } = this.props.previewOptions;
    const containerToPreviewRatio =
      (this.previewContainer.offsetWidth - SIDE_MARGIN * 2) / width;
    if (containerToPreviewRatio < 1) {
      this.setState({ scale: containerToPreviewRatio });
    } else if (containerToPreviewRatio !== 1) {
      this.setState({ scale: 1 });
    }
  };

  render() {
    const { previewOptions } = this.props;
    return (
      <div
        id={`${this.props.for}PreviewContainer`}
        data-website-preview={this.props.for}
        {...previewWrapperRules}
      >
        <VelocityComponent
          animation={{
            translateZ: 0.001,
            scale: this.state.scale
          }}
          easing="ease"
        >
          {this.props.children}
        </VelocityComponent>
      </div>
    );
  }
}
