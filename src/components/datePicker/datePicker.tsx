import * as React from 'react';
import DatePicker from 'react-datepicker';
const moment = require('moment');
import { css } from 'glamor';

//NOTE: will need a polyfill for IE 10

import 'react-datepicker/dist/react-datepicker.css';

export interface Props {
  //will need to prepopulate date
  date: any;
  updateDate: (e) => any;
}

const menuRules = css({
  '& .react-datepicker-wrapper': {
    width: '100%'
  },
  '& .react-datepicker__input-container': {
    width: '100%'
  },
  '& .react-datepicker__input-container input': {
    border: 'none',
    borderBottom: '1px solid rgb(117, 117, 117)',
    height: '26px',
    padding: '10px',
    width: '100%'
  }
});

export default class DateSelector extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div {...menuRules}>
        <DatePicker
          selected={moment(this.props.date)}
          onChange={this.props.updateDate}
        />
      </div>
    );
  }
}
