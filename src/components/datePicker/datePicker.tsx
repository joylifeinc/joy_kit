import * as React from 'react';
import DatePicker from 'react-datepicker';
import * as moment from 'moment';
import { css } from 'glamor';

//NOTE: will need a polyfill for IE 10

import 'react-datepicker/dist/react-datepicker.css';

export interface Props {
  //will need to prepopulate date
  date: any;
  updateDate: (e) => any;
}

const menuRules = css({
  height: '50px',
  width: '100%'
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
