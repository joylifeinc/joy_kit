import * as React from 'react';
import { css } from 'glamor';

import { CountdownTimer } from '../../../../';
const moment = require('moment');

export interface Props {
  fontOverrides?: any;
  date: string;
  hideCountdown?: boolean;
  location: string;
  textColor?: Color;
  baseColor?: Color;
  activeFont?: object;
}

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

const rightPaneRules = (backgroundColor = '#fff') =>
  css({
    backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 2,
    width: '40%'
  });

const weddingInfoContainerRules = css({
  borderRadius: '0 0 5px',
  fontSize: '15px',
  height: '100%'
});

const welcomeContainerRules = (color = 'rgb(58, 60, 62)') =>
  css({
    color,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center'
  });

const infoPreviewRules = css({});

const locationRules = css({
  margin: '20px 0',
  fontSize: 50,
  fontWeight: 300,
  lineHeight: '50px'
});

const dateRules = css({
  fontSize: '17px',
  letterSpacing: '1px',
  lineHeight: '17px',
  fontWeight: 300,
  margin: '0 0 20px'
});

const ctaButtonContainer = css({
  margin: '20px',
  padding: '15px',
  textAlign: 'center'
});

const guestNameRules = css({
  fontSize: 9,
  lineHeight: '42px',
  letterSpacing: '2px',
  fontWeight: 600,
  textTransform: 'uppercase'
});

const ctaButtonRules = css({
  fontWeight: 300,
  lineHeight: '42px',
  backgroundColor: 'transparent',
  border: '2px solid #3A3C3E',
  borderRadius: '5px',
  minWidth: '240px',
  fontSize: 15,
  padding: '0 20px',
  textAlign: 'center'
});

const rgbaObjectToString = (color?: Color) => {
  return (
    color &&
    `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255}, ${color.a})`
  );
};

const AlohaRightPane: React.SFC<Props> = ({
  activeFont,
  baseColor,
  textColor,
  date,
  fontOverrides,
  hideCountdown,
  location
}) => {
  let eventDateMoment = moment(date);
  const fontColor = rgbaObjectToString(textColor);
  const backgroundColor = rgbaObjectToString(baseColor);

  return (
    <div
      className="right-pane joy-wedding-page-preview"
      {...rightPaneRules(backgroundColor)}
    >
      <div className="joy-wedding-info" {...weddingInfoContainerRules}>
        <div
          id="welcome"
          className="joy-content-card joy-content-intro"
          {...welcomeContainerRules(fontColor)}
        >
          <div className="info-preview" {...infoPreviewRules}>
            <h2 {...locationRules} {...fontOverrides}>
              {location}
            </h2>
            <h4 {...dateRules}>
              {eventDateMoment.isValid() &&
                eventDateMoment.format('dddd, MMMM D, YYYY')}
            </h4>
            {hideCountdown ? null : <CountdownTimer eventDate={date} />}
            <div id="cta-update" {...ctaButtonContainer}>
              <div className="rsvp-button" {...guestNameRules}>
                Hi guest name!
              </div>
              <div className="rsvp-button" {...ctaButtonRules}>
                Don't Forget to RSVP
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AlohaRightPane.defaultProps = {
  fontOverrides: {}
};

export { AlohaRightPane };
