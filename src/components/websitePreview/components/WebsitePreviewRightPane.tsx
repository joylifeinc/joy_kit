import * as React from 'react';
import { css } from 'glamor';

import { CountdownTimer } from '../../';
import * as moment from 'moment';

export interface Props {
  eventDate: string;
  location: string;
  backgroundColor?: string;
  color?: string;
}

const rightPane = (color: string, backgroundColor: string) =>
  css({
    position: 'absolute',
    width: '320px',
    height: '464px',
    left: '480px',
    top: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0 0 5px',
    fontSize: '15px',
    backgroundColor,
    flexDirection: 'column'
  });

const locationRules = css({
  margin: '15px 0',
  fontSize: '25px',
  fontWeight: 300,
  lineHeight: '36px'
});

const dateRules = css({
  fontSize: '17px',
  lineHeight: '17px'
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

const WebsitePreviewRightPane: React.SFC<Props> = ({
  backgroundColor,
  color,
  eventDate,
  location
}) => {
  let formattedDate;
  return (
    <div {...rightPane(color, backgroundColor)}>
      <h2 {...locationRules}>{location}</h2>
      <div {...dateRules}>{moment(eventDate).format('dddd, MMMM D, YYYY')}</div>
      <CountdownTimer eventDate={eventDate} />
      <div {...ctaButtonContainer}>
        <div {...guestNameRules}>Hi guest name!</div>
        <div {...ctaButtonRules}>Don't Forget to RSVP</div>
      </div>
    </div>
  );
};

WebsitePreviewRightPane.defaultProps = {
  backgroundColor: '#f3efeb'
};

export { WebsitePreviewRightPane };
