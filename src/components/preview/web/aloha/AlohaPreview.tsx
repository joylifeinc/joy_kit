import * as React from 'react';
import { css } from 'glamor';
import { margin } from 'glamor/utils';
import { Observable, Subscription } from 'rxjs';

import {
  WeddingName,
  CountdownTimer,
  Fragments,
  weddingNameString
} from '../../../../';
import { WebPreviewTopBar } from '../components/WebPreviewTopBar';
import { AlohaLeftPane } from './components/AlohaLeftPane';
import { AlohaRightPane } from './components/AlohaRightPane';

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
    overflow: 'hidden',
    fontWeight: '300',
    height,
    userSelect: 'none',
    width,
    minWidth: width
  });

const containerRules = css({
  transform: `scale(${900 / 1400})`,
  transformOrigin: 'top left',
  width: '1440px'
});

const contentRules = css({
  display: 'flex',
  position: 'relative',
  flexGrow: '1',
  // maxHeight: 'calc(100% - 36px)'
  width: '1440px',
  height: 900
});

class AlohaPreview extends React.Component<
  PreviewProps & {
    ariaLabel?: string;
    handleClick?: () => any;
  }
> {
  static defaultProps = {
    activeFont: null,
    theme: null,
    previewOptions: {
      height: 593,
      width: 900
    },
    coverPhotos: {
      welcome: {
        page: 'welcome',
        url: 'https://d2uft7zh7kxc3y.cloudfront.net/blue_lights.jpg'
      }
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
          letterSpacing: `${letterSpacing}px`,
          lineHeight
        }),
        rightPaneHeaderRules: css(baseRules, {
          fontSize: `${h2}px`,
          lineHeight
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
    const { theme, activeFont, useThemeColors, cssOverrides } = this.props;
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
        {cssOverrides && <style>{cssOverrides}</style>}
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
      coverPhotoSectionPreview,
      theme,
      cssOverrides,
      hideCountdown
    } = this.props;

    const {
      ownerName,
      fianceeName,
      date,
      location,
      message
    } = getDefaultEventFields(eventInfo);

    const coverPhoto = getCoverPhotoForPage(
      coverPhotoSectionPreview ? coverPhotoSectionPreview : 'welcome',
      coverPhotos
    );

    let {
      leftPaneHeaderRules,
      rightPaneHeaderRules,
      fontStylesheetLink
    } = this.getFontOverrides(activeFont);
    const topBarTitle = weddingNameString(ownerName, fianceeName);
    return (
      <Fragments>
        {fontStylesheetLink}
        {this.getStyleOverrides()}
        <PreviewWrapper previewOptions={previewOptions}>
          <div
            aria-label={this.props.ariaLabel}
            onClick={this.props.handleClick}
            className="joy-website-preview"
            {...previewRules(previewOptions.height, previewOptions.width)}
          >
            <div {...containerRules}>
              <WebPreviewTopBar title={topBarTitle} />
              <div
                id="joy-wedding-page"
                className="joy-wedding-page joy-wedding-home"
                {...contentRules}
              >
                <AlohaLeftPane
                  coverPhoto={coverPhoto.url}
                  fontOverrides={leftPaneHeaderRules}
                  fianceeName={fianceeName}
                  ownerName={ownerName}
                  message={message}
                />
                <AlohaRightPane
                  activeFont={activeFont}
                  baseColor={baseColor}
                  textColor={baseText}
                  date={date}
                  fontOverrides={rightPaneHeaderRules}
                  hideCountdown={hideCountdown}
                  location={location}
                />
              </div>
            </div>
          </div>
        </PreviewWrapper>
      </Fragments>
    );
  }
}

export { AlohaPreview };
