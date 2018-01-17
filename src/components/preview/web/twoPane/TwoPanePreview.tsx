import * as React from 'react';
import { css } from 'glamor';
import { margin } from 'glamor/utils';
import { Observable, Subscription } from 'rxjs';

import { WeddingName, CountdownTimer, Fragments } from '../../../../';
import { WebPreviewTopBar } from '../components/WebPreviewTopBar';
import { TwoPanePreviewLeft } from './components/TwoPanePreviewLeft';
import { TwoPanePreviewRight } from './components/TwoPanePreviewRight';

import { PreviewWrapper } from '../PreviewWrapper';
import {
  PreviewProps,
  getDefaultEventFields,
  getCoverPhotoForPage
} from '../util';

const previewRules = (height, width) =>
  css({
    borderRadius: '5px',
    boxShadow: '0 15px 60px 0 rgba(0,0,0,.1), 0 32px 75px 0 rgba(0,0,0,.1)',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'proxima-nova,Helvetica Neue,sans-serif',
    fontSize: '15px',
    fontWeight: '300',
    height,
    pointerEvents: 'none',
    userSelect: 'none',
    width,
    minWidth: width
  });

const contentRules = css({
  display: 'flex',
  position: 'relative',
  flexGrow: '1',
  maxHeight: 'calc(100% - 36px)'
});

class TwoPanePreview extends React.Component<PreviewProps> {
  static defaultProps = {
    activeFont: null,
    theme: null,
    previewOptions: {
      height: 500,
      width: 800
    },
    useThemeColors: true
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
    return {
      leftPaneHeaderRules: {},
      rightPaneHeaderRules: {},
      fontStylesheetLink: null
    };
  };

  private getStyleOverrides = () => {
    const { theme, activeFont, useThemeColors } = this.props;
    return (
      <div data-style-overrides="">
        {theme &&
          theme !== 'blank' && (
            <Fragments>
              <link
                rel="stylesheet"
                type="text/css"
                href={`https://withjoy.com/assets/public/joyStyles3/${
                  theme
                }/base.css`}
              />
              {useThemeColors && (
                <link
                  rel="stylesheet"
                  type="text/css"
                  href={`https://withjoy.com/assets/public/joyStyles3/${
                    theme
                  }/color.css`}
                />
              )}
            </Fragments>
          )}
      </div>
    );
  };

  render() {
    const {
      activeFont,
      baseColor,
      baseText,
      coverPhotos,
      eventInfo,
      previewOptions,
      previewContainerId,
      theme,
      title
    } = this.props;

    const {
      ownerName,
      fianceeName,
      eventDate,
      location,
      message
    } = getDefaultEventFields(eventInfo);

    const coverPhoto = getCoverPhotoForPage('welcome', coverPhotos);

    let {
      leftPaneHeaderRules,
      rightPaneHeaderRules,
      fontStylesheetLink
    } = this.getFontOverrides(activeFont);
    return (
      <Fragments>
        {fontStylesheetLink}
        {this.getStyleOverrides()}
        <PreviewWrapper
          for="twoPane"
          previewContainerId={previewContainerId}
          previewOptions={previewOptions}
        >
          <div
            className="joy-website-preview"
            {...previewRules(previewOptions.height, previewOptions.width)}
          >
            <WebPreviewTopBar title={title} />
            <div {...contentRules}>
              <TwoPanePreviewLeft
                coverPhoto={coverPhoto.url}
                fontOverrides={leftPaneHeaderRules}
                fianceeName={fianceeName}
                ownerName={ownerName}
                message={message}
              />
              <TwoPanePreviewRight
                activeFont={activeFont}
                baseColor={baseColor}
                textColor={baseText}
                eventDate={eventDate}
                fontOverrides={rightPaneHeaderRules}
                location={location}
              />
            </div>
          </div>
        </PreviewWrapper>
      </Fragments>
    );
  }
}

export { TwoPanePreview };
