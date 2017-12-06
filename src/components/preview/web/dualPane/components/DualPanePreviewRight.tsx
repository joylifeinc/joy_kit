import * as React from 'react';
import { css } from 'glamor';

import { CountdownTimer } from '../../../../';
import * as moment from 'moment';

export interface Props {
  fontOverrides?: any;
  eventDate: string;
  location: string;
  backgroundColor?: string;
  color?: string;
  activeFont?: object;
}

const rightPaneRules = (color: string, backgroundColor: string) =>
  css({
    width: '320px',
    height: '464px',
    borderRadius: '0 0 5px',
    fontSize: '15px',
    backgroundColor,
    flexBasis: 320,
    minWidth: 320
  });

const welcomeContainerRules = css({
  textAlign: 'center',
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  flexDirection: 'column',

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

const DualPanePreviewRight: React.SFC<Props> = ({
  activeFont,
  backgroundColor,
  color,
  eventDate,
  fontOverrides,
  location
}) => {
  let formattedDate;
  return (
    <div className="right-pane joy-wedding-page-preview">
      <div
        className="joy-wedding-info"
        {...rightPaneRules(color, backgroundColor)}
      >
        <div
          id="welcome"
          className="joy-content-card joy-content-intro"
          {...welcomeContainerRules}
        >
          <div className="info-preview" {...infoPreviewRules}>
            <h2 {...locationRules} {...fontOverrides}>
              {location}
            </h2>
            <h4 {...dateRules}>
              {moment(eventDate).format('dddd, MMMM D, YYYY')}
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

DualPanePreviewRight.defaultProps = {
  backgroundColor: '#f3efeb'
};

export { DualPanePreviewRight };
