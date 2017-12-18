import * as React from 'react';
import { css } from 'glamor';
import { error } from 'util';
import AddToCalendar from 'react-add-to-calendar';

import iconApple from '../../assets/icon-apple.svg';
import iconGmail from '../../assets/icon-gmail.svg';
import iconOutlook from '../../assets/icon-outlook.svg';
import iconMicrosoft from '../../assets/icon-microsoft.svg';
import iconYahoo from '../../assets/icon-yahoo.svg';

// Calendar plugin that we're wrapping includes a button and an automatic visibility toggle. We've hobbled it so it doesn't toggle.

AddToCalendar.prototype.toggleCalendarDropdown = function (e) {
  return;
};

export interface Props {
  // title of the event
  name?: string; // 'Sample Event';

  // description of the event
  // 'This is the sample event provided as an example only';
  details?: string;

  // location of the event
  // 'Portland, OR';
  location?: string;

  // Name of who this event belongs to
  // 'Bob & Alice'
  coupleNameString?: string;

  // Dress code for this event
  dressCode?: string;

  // when does the event start ?
  // unix timestamp
  dtstart?: number;

  // when does the event end ?
  // unix timestamp
  dtend?: number;

  height?: string;
  backgroundColor?: string;
}

const icons: any = {
  '& .fa-apple': iconApple,
  '& .fa-google': iconGmail,
  '& .outlook-link .fa-windows': iconMicrosoft,
  '& .outlookcom-link .fa-windows': iconOutlook,
  '& .fa-yahoo': iconYahoo
};

const makeIconCSS = (key, icon) => {
  const contentSelector = { content: `url(${icon})` }; // { [key]: { 'content': `url(${icon})` } };
  const retval = {
    [key]: {
      // 'content': `url(${icon})`,
      ':after': {
        backgroundImage: `url(${icon})`,
        backgroundRepeat: 'no-repeat'
      }
    }
  };
  return retval;
};

const iconsCSS = Object.keys(icons).reduce((acc, element) => {
  const css = makeIconCSS(element, icons[element]);
  return { ...acc, ...css };
}, {});

const calendarButtonRules = css({
  height: '100%',
  '& .react-add-to-calendar': {
    height: '100%'
  },
  '& .react-add-to-calendar__button': {
    display: 'none'
  },
  '& .react-add-to-calendar__dropdown': {
    height: '100%',
    '& ul': {
      height: '100%',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      '& li': {
        boxShadow: '0 1px 0 0 #eaeaea',
        margin: '0 40px 0 40px',
        verticalAlign: 'middle',
        fontSize: '13px',
        textAlign: 'left',
        color: '#100f0d',
        height: '20%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      },
      '& a': {
        color: '#100f0d',
        textDecoration: 'none',
        '&:hover': {
          color: '#b9b9b9'
        }
      },
      '& .fa': {
        verticalAlign: 'middle',
        marginRight: '15px',
        width: '20px',
        height: 'auto',
        ':after': {
          display: 'inline-block',
          width: '20px',
          height: '25px',
          content: ' ',
          backgroundSize: '20px',
          backgroundPosition: '0',
          position: 'relative',
          top: '7px'
        }
      }
    },
    ...iconsCSS
  }
});

export class AddToCalendarWidget extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  calendarFormat() {
    let endTime = this.props.dtend;
    if (endTime === undefined) {
      endTime = this.props.dtstart + 14400000; // 4 hours in ms
    }
    return {
      title: this.props.name,
      description:
        this.props.details +
        (this.props.dressCode ? ' Dress Code: ' + this.props.dressCode : ''),
      location: this.props.location
        ? this.props.location
        : this.props.coupleNameString + "'s Wedding",
      startTime: this.props.dtstart,
      endTime: endTime
    };
  }

  render() {
    const outerContainer = css({
      height: this.props.height || '100%',
      backgroundColor: this.props.backgroundColor
    });

    return (
      <div {...outerContainer}>
        <div {...calendarButtonRules}>
          <AddToCalendar event={this.calendarFormat()} optionsOpen={true} />
        </div>
      </div>
    );
  }
}
