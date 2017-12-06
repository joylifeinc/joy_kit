import * as React from 'react';
import { css } from 'glamor';
import { margin } from 'glamor/utils';

import { WeddingName, CountdownTimer, Fragments } from '../../../../';
import { DualPanePreviewTopBar } from './components/DualPanePreviewTopBar';
import { DualPanePreviewLeft } from './components/DualPanePreviewLeft';
import { DualPanePreviewRight } from './components/DualPanePreviewRight';

export interface Props {
  theme?: string;
  baseBackgroundColor?: string;
  baseTextColor?: string;
  baseTextFill?: string;
  coverPhoto?: string;
  ownerName: string;
  fianceeName?: string;
  location: string;
  eventDate: string;
  message: string;
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
}

const previewContainerRules = css({
  borderRadius: '5px',
  boxShadow: '0 15px 60px 0 rgba(0,0,0,.1), 0 32px 75px 0 rgba(0,0,0,.1)',
  fontFamily: 'proxima-nova,Helvetica Neue,sans-serif',
  fontSize: '15px',
  fontWeight: '300',
  height: '500px',
  left: '50%',
  pointerEvents: 'none',
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  userSelect: 'none',
  width: '800px'
});

const contentRules = css({
  position: 'relative',
  display: 'flex'
});

class DualPanePreview extends React.Component<Props> {
  static defaultProps = {
    fianceeName: 'Juliet',
    theme: null,
    activeFont: null
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
        {theme && (
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

  render() {
    const {
      activeFont,
      baseBackgroundColor,
      baseTextColor,
      coverPhoto,
      ownerName,
      fianceeName,
      location,
      eventDate,
      message,
      theme
    } = this.props;
    console.log(ownerName);
    let {
      leftPaneHeaderRules,
      rightPaneHeaderRules,
      fontStylesheetLink
    } = this.getFontOverrides(activeFont);
    return (
      <Fragments>
        {fontStylesheetLink}
        {this.getStyleOverrides()}
        <div className="joy-website-preview" {...previewContainerRules}>
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
      </Fragments>
    );
  }
}

export { DualPanePreview };
