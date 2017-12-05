import * as React from 'react';
import { css } from 'glamor';
import { margin } from 'glamor/utils';

import { WeddingName, CountdownTimer } from '../';
import { WebsitePreviewTopBar } from './components/WebsitePreviewTopBar';
import { WebsitePreviewLeftPane } from './components/WebsitePreviewLeftPane';
import { WebsitePreviewRightPane } from './components/WebsitePreviewRightPane';

export interface Props {
  baseTextColor?: string;
  baseTextFill?: string;
  ownerName: string;
  fianceeName?: string;
  location: string;
  eventDate: string;
  message: string;
}

const previewContainerRules = css({
  position: 'absolute',
  left: '50%',
  top: '50%',
  fontSize: '15px',
  transform: 'translate(-50%,-50%)',
  width: '800px',
  height: '500px',
  backgroundColor: '#E2E2E4',
  boxShadow: '0 15px 60px 0 rgba(0,0,0,.1), 0 32px 75px 0 rgba(0,0,0,.1)',
  fontFamily: 'proxima-nova,Helvetica Neue,sans-serif',
  fontWeight: '300',
  borderRadius: '5px'
});

class WebsitePreview extends React.Component<Props> {
  static defaultProps = {
    ownerName: 'Romeo',
    fianceeName: 'Juliet'
  };

  render() {
    const {
      baseTextColor,
      ownerName,
      fianceeName,
      location,
      eventDate,
      message
    } = this.props;

    let days: any = {
      Mon: 'Monday',
      Tue: 'Tuesday',
      Wed: 'Wednesday',
      Thu: 'Thursday',
      Fri: 'Friday',
      Sat: 'Saturday',
      Sun: 'Sunday'
    };
    // let formattedDate;

    return (
      <div {...previewContainerRules}>
        <WebsitePreviewTopBar ownerName={ownerName} fianceeName={fianceeName} />
        <WebsitePreviewLeftPane
          ownerName={ownerName}
          fianceeName={fianceeName}
        />
        <WebsitePreviewRightPane
          color={baseTextColor}
          eventDate={eventDate}
          location={location}
        />
      </div>
    );
  }
}

export { WebsitePreview };
