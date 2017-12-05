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
    width: '320px',
    height: '464px',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
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

const WebsitePreviewRightPane: React.SFC<Props> = ({
  backgroundColor,
  color,
  eventDate,
  location
}) => {
  let formattedDate;
  return (
    <div className="right-pane joy-wedding-page-preview">
      <style
        dangerouslySetInnerHTML={{
          __html: `

    .joy-wedding-page .joy-wedding-intro h1 {
        font-size: 68px !important;
        letter-spacing: -1px !important;
    }
    .joy-wedding-page h2 {
        font-size: 28px !important;
    }
    .joy-wedding-page .joy-primary-pane-mobile h2 {
        font-size: 39.199999999999996px !important;
    }
    .joy-wedding-page .joy-wedding-menu .menu-owner{
        font-size: 26px !important;
    }
    .joy-wedding-page h1, .joy-wedding-page h2, .joy-wedding-page .joy-wedding-menu .menu-owner{
        font-family: Pacifico;
        font-weight: 400;
        text-transform:  !important;
        line-height: 1.2;
    }

    /* todo: nail down what needs what
    .joy-wedding-page {
        font-family: inherit !important;
    }
    */
    /*commented out joy base and accent text to be sure that it is always the
      primaryLightText (#FFF)*/
    /*.joy-wedding-page .joy-base-text { color: rgba(255,255,255,1) !important; }*/
    .joy-wedding-page .joy-base-color { color: rgba(59,66,77,1) !important; }
    .joy-wedding-page .joy-base-color-bg { background-color: rgba(59,66,77,1) !important; }
    /*.joy-wedding-page .joy-accent-text { color: rgba(255,255,255,1) !important; }*/
    .joy-wedding-page .joy-accent-color { color: rgba(242,243,237,1) !important; }
    .joy-wedding-page .joy-accent-color-bg { background-color: rgba(242,243,237,1) !important; }
    
    
    `
        }}
      />

      <div className="joy-wedding-info" {...rightPane(color, backgroundColor)}>
        <div
          id="welcome"
          className="joy-content-card joy-content-intro"
          {...welcomeContainerRules}
        >
          <div className="info-preview" {...infoPreviewRules}>
            <h2 {...locationRules}>{location}</h2>
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

WebsitePreviewRightPane.defaultProps = {
  backgroundColor: '#f3efeb'
};

export { WebsitePreviewRightPane };
