import * as React from 'react';
import { css } from 'glamor';

import { CountdownTimer } from '../../../../';
const moment = require('moment');

export interface Props {
  fontOverrides?: any;
  eventDate: string;
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
  height: '464px'
});

const welcomeContainerRules = (color = 'rgba(0, 0, 0, 1)') =>
  css({
    color,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center'
  });

const infoPreviewRules = css({
  transform: 'scale(.7)'
});

const locationRules = css({
  margin: '20px 0',
  fontSize: '25px',
  fontWeight: 300,
  lineHeight: '36px'
});

const dateRules = css({
  fontSize: '17px',
  lineHeight: '17px',
  fontWeight: 400,
  margin: '0 0 20px'
});

const ctaButtonContainer = css({
  margin: '20px',
  padding: '15px',
  textAlign: 'center'
});

const guestNameRules = css({
  fontSize: '10px',
  lineHeight: '42px',
  letterSpacing: '1.25px',
  fontWeight: '600',
  textTransform: 'uppercase'
});

const ctaButtonRules = css({
  fontWeight: '400',
  lineHeight: '28px',
  border: '1.4px solid',
  borderRadius: '5px',
  minWidth: '150px',
  fontSize: '11px',
  padding: '0 20px',
  textAlign: 'center'
});

const rgbaObjectToString = (color?: Color) => {
  return (
    color &&
    `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255}, ${color.a})`
  );
};

const TwoPanePreviewRight: React.SFC<Props> = ({
  activeFont,
  baseColor,
  textColor,
  eventDate,
  fontOverrides,
  location
}) => {
  let eventDateMoment = moment(eventDate);
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
            <CountdownTimer eventDate={eventDate} />
            <div {...ctaButtonContainer}>
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

TwoPanePreviewRight.defaultProps = {
  fontOverrides: {}
};

export { TwoPanePreviewRight };
