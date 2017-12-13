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

  calendarFormat() {
    var endTime = this.props.dtend;
    if (endTime === undefined) {
      endTime = this.props.dtstart + 14400000; //4 hours in ms
    }
    return {
      title: this.props.name,
      description: this.props.details + (this.props.dressCode ? ' Dress Code: ' + this.props.dressCode : ''),
      location: (this.props.location ? this.props.location : this.props.coupleNameString + "'s Wedding"),
      startTime: this.props.dtstart,
      endTime: endTime
    }
  }

  render() {

    return (
      <div>
        <div {...calendarButtonRules}>
          <AddToCalendar event={this.calendarFormat()} optionsOpen={true} ></AddToCalendar>
        </div>
      </div>
    );

  }
}
