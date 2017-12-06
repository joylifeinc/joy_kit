import * as React from 'react';
import { css } from 'glamor';
import { margin } from 'glamor/utils';
import { Observable, Subscription } from 'rxjs';

import { WeddingName, CountdownTimer, Fragments } from '../../../../';
import { DualPanePreviewTopBar } from './components/DualPanePreviewTopBar';
import { DualPanePreviewLeft } from './components/DualPanePreviewLeft';
import { DualPanePreviewRight } from './components/DualPanePreviewRight';

export interface Props {
  activeFont?: {
    key: string;
    fontFamily?: string;
    fontWeight?: string;
    h1?: string;
    h2?: string;
    h3?: string;
    letterSpacing?: string;
    lineHeight?: string;
    textTransform: string;
    _comment?: string;
  };
  baseBackgroundColor?: string;
  baseTextColor?: string;
  // baseTextFill?: string;
  coverPhoto?: string;
  eventDate?: string;
  fianceeName?: string;
  location?: string;
  message?: string;
  ownerName?: string;
  theme?: string;
  previewOptions?: {
    height?: number;
    width?: number;
  };
}

const previewContainerRules = css({
  height: '100%',
  width: '100%',
  position: 'relative'
});

const previewRules = (height, width, scale: number) =>
  css({
    borderRadius: '5px',
    boxShadow: '0 15px 60px 0 rgba(0,0,0,.1), 0 32px 75px 0 rgba(0,0,0,.1)',
    fontFamily: 'proxima-nova,Helvetica Neue,sans-serif',
    fontSize: '15px',
    fontWeight: '300',
    height,
    left: '50%',
    pointerEvents: 'none',
    position: 'absolute',
    top: '50%',
    transform: `translateZ(0) translate(-50%,-50%) scale(${scale})`,
    userSelect: 'none',
    width
  });

const contentRules = css({
  display: 'flex',
  position: 'relative'
});

class DualPanePreview extends React.Component<Props> {
  private windowResizeSub;

  static defaultProps = {
    activeFont: null,
    theme: null,
    previewOptions: {
      height: 500,
      width: 800
    }
  };

  state = {
    scale: 1
  };

  componentDidMount() {
    this.setResizeScale();
  }

  componentWillUnmount() {
    this.windowResizeSub && this.windowResizeSub.unsubscribe();
  }

  private setResizeScale = () => {
    const { width } = this.props.previewOptions;
    const previewContainer = document.getElementById(
      'dualPanePreviewContainer'
    );
    const SIDE_MARGIN = 20;
    const windowResize$ = Observable.fromEvent(window, 'resize');
    this.windowResizeSub = windowResize$.debounceTime(250).subscribe({
      next: evt => {
        const containerToPreviewRatio =
          (previewContainer.offsetWidth - SIDE_MARGIN * 2) / width;
        if (containerToPreviewRatio < 1) {
          this.setState({
            scale: containerToPreviewRatio
          });
        } else if (containerToPreviewRatio !== 1) {
          this.setState({ scale: 1 });
        }
      }
    });
  };

  private getFontOverrides = activeFont => {
    if (activeFont) {
      const {
        fontFamily,
        fontWeight,
        h1,
        h2,
        h3,
        letterSpacing,
        lineHeight,
        textTransform
      } = activeFont;

      const baseRules = { fontFamily, fontWeight, lineHeight, textTransform };
      return {
        leftPaneHeaderRules: css(baseRules, {
          fontSize: `${h1}px`,
          letterSpacing: `${letterSpacing}px`
        }),
        rightPaneHeaderRules: css(baseRules, {
          fontSize: `${h2}px`
        }),
        fontStylesheetLink: (
          <link
            rel="stylesheet"
            type="text/css"
            href={`https://fonts.googleapis.com/css?family=${activeFont.fontFamily
              .split(' ')
              .join('+')}:${activeFont.fontWeight}`}
          />
        )
      };
    }
    return null;
  };

  private getStyleOverrides = () => {
    const { theme, activeFont } = this.props;
    return (
      <div data-style-overrides="">
        {theme &&
          theme !== 'blank' && (
            <Fragments>
              <link
                rel="stylesheet"
                type="text/css"
                href={`http://withjoy.com/assets/public/joyStyles3/${
                  theme
                }/base.css`}
              />
              <link
                rel="stylesheet"
                type="text/css"
                href={`http://withjoy.com/assets/public/joyStyles3/${
                  theme
                }/color.css`}
              />
            </Fragments>
          )}
      </div>
    );
  };

  private getVisibleFields = () => {
    const { ownerName, fianceeName, eventDate, location, message } = this.props;
    return {
      ownerName: ownerName || 'Romeo',
      fianceeName: fianceeName || 'Juliet',
      eventDate: eventDate || new Date().toString(),
      location: location || 'San Francisco, CA',
      message:
        message ||
        'We are so excited to celebrate with you. Help us capture our wedding with Joy.'
    };
  };

  render() {
    const {
      activeFont,
      baseBackgroundColor,
      baseTextColor,
      coverPhoto,
      previewOptions,
      theme
    } = this.props;

    const {
      ownerName,
      fianceeName,
      eventDate,
      location,
      message
    } = this.getVisibleFields();

    console.log(eventDate);
    let {
      leftPaneHeaderRules,
      rightPaneHeaderRules,
      fontStylesheetLink
    } = this.getFontOverrides(activeFont);
    return (
      <div
        id="dualPanePreviewContainer"
        data-website-preview="dual-pane"
        {...previewContainerRules}
      >
        {fontStylesheetLink}
        {this.getStyleOverrides()}
        <div
          id="dualPanePreview"
          className="joy-website-preview"
          {...previewRules(
            previewOptions.height,
            previewOptions.width,
            this.state.scale
          )}
        >
          <DualPanePreviewTopBar
            ownerName={ownerName}
            fianceeName={fianceeName}
          />
          <div {...contentRules}>
            <DualPanePreviewLeft
              coverPhoto={coverPhoto}
              fontOverrides={leftPaneHeaderRules}
              fianceeName={fianceeName}
              ownerName={ownerName}
              message={message}
            />
            <DualPanePreviewRight
              activeFont={activeFont}
              backgroundColor={baseBackgroundColor}
              color={baseTextColor}
              eventDate={eventDate}
              fontOverrides={rightPaneHeaderRules}
              location={location}
            />
          </div>
        </div>
      </div>
    );
  }
}

export { DualPanePreview };
