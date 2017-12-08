import * as React from 'react';
import { css } from 'glamor';
import { error } from 'util';
import AddToCalendar from 'react-add-to-calendar';
AddToCalendar.prototype.toggleCalendarDropdown = function (e) { return; };

const iconApple = require('../../assets/icon-apple.svg');
const iconGmail = require('../../assets/icon-gmail.svg');
const iconOutlook = require('../../assets/icon-outlook.svg');
const iconMicrosoft = require('../../assets/icon-microsoft.svg');
const iconYahoo = require('../../assets/icon-yahoo.svg');

export interface Props {

  event?: any;

  coupleNameString?: string;

  // // title of the event
  // title?: string; // 'Sample Event';

  // // description of the event
  // description?: string; // 'This is the sample event provided as an example only';

  // // location of the event
  // location?: string; //'Portland, OR';

  // // when does the event start ?
  // startTime?: string; //'2016-09-16T20:15:00-04:00';

  // //when does the event end ?
  // endTime?: string; // '2016-09-16T21:45:00-04:00;
}

const icons: any = {
  '& .fa-apple': iconApple,
  '& .fa-google': iconGmail,
  '& .outlook-link .fa-windows': iconMicrosoft,
  '& .outlookcom-link .fa-windows': iconOutlook,
  '& .fa-yahoo': iconYahoo,
}

const makeIconCSS = (key, icon) => ({
  [key]: { 'content': `url(${icon})` },
});

const iconsCSS = Object.keys(icons).reduce((acc, element) => {
  let css = makeIconCSS(element, icons[element]);
  return { ...acc, ...css };
}, {});

const calendarButtonRules = css({
  '& .react-add-to-calendar__button': {
    display: 'none',
  },
  '& .react-add-to-calendar__dropdown': {
    '& ul': {
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
        alignItems: 'center',
      },
      '& a': {
        color: '#100f0d',
        textDecoration: 'none',
        '&:hover': {
          color: '#b9b9b9',
        }
      },
      '& .fa': {
        verticalAlign: 'middle',
        marginRight: '15px',
        width: '20px',
        height: 'auto',
      },
    },
    ...iconsCSS,
  }
});

export class AddToCalendarWidget extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  calendarFormat(event) {
    var endTime = event.dtend;
    if (endTime === undefined) {
      endTime = event.dtstart + 14400000; //4 hours in ms
    }
    return {
      title: event.name,
      description: event.details + (event.dressCode ? ' Dress Code: ' + event.dressCode : ''),
      location: (event.location ? event.location : this.props.coupleNameString + "'s Wedding"),
      startTime: event.dtstart,
      endTime: endTime
    }
  }

  render() {

    return (
      <div>
        <div {...calendarButtonRules}>
          <AddToCalendar event={event} optionsOpen={true} ></AddToCalendar>
        </div>
      </div>
    );

  }
}
