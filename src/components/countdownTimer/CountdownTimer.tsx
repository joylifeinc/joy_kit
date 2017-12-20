import * as React from 'react';
import { css } from 'glamor';
const moment = require('moment');

export interface Props {
  eventDate?: string | number;
  color?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  margin?: string | number;
}

type DifferenceFormat = 'Day' | 'Hr' | 'Min' | 'Sec';

const countdownRules = ({ color, fontSize, fontWeight, margin }: Props) =>
  css({
    color,
    fontSize,
    fontWeight,
    margin
  });

class CountdownTimer extends React.Component<Props, any> {
  static defaultProps = {
    fontWeight: 300,
    fontSize: 15,
    margin: 0
  };

  private timeLapseInterval;
  private todayMoment = moment();
  private eventMoment;

  constructor(props) {
    super(props);

    this.eventMoment = moment(this.props.eventDate);
    this.state = {
      displayText: this.getTimeLapseText()
    };
  }

  componentWillMount() {
    this.startCountdown();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.eventDate !== nextProps.eventDate) {
      this.eventMoment = moment(nextProps.eventDate);
      if (this.isEventMomentValid()) {
        this.updateDisplayText();
      } else {
        this.stopCountdown();
      }
    }
  }

  componentWillUnmount() {
    this.stopCountdown();
  }

  private startCountdown = () => {
    if (this.isEventMomentValid()) {
      this.timeLapseInterval = window.setInterval(() => {
        this.todayMoment.add(1, 'seconds');
        this.updateDisplayText();
      }, 1000);
    }
  };

  private stopCountdown = () => {
    window.clearInterval(this.timeLapseInterval);
  };

  private isEventMomentValid = () => {
    return this.eventMoment && this.eventMoment.isValid();
  };

  private isEventToday = () => {
    return this.eventMoment && this.eventMoment.isSame(this.todayMoment, 'day');
  };

  private updateDisplayText = () => {
    this.setState({
      displayText: this.getTimeLapseText()
    });
  };

  private getDifference = (differenceFormat: DifferenceFormat, difference) => {
    if (difference === 0 && differenceFormat !== 'Sec') {
      return null;
    }
    let formatPluralization =
      difference > 1 ? `${differenceFormat}s` : differenceFormat;

    return `${difference} ${formatPluralization}`;
  };

  private getDayDifference = timeLapse => {
    return this.getDifference(
      'Day',
      Math.floor(timeLapse / (1000 * 60 * 60 * 24))
    );
  };

  private getHourDifference = timeLapse => {
    return this.getDifference(
      'Hr',
      Math.floor((timeLapse / (1000 * 60 * 60)) % 24)
    );
  };
  private getMinuteDifference = timeLapse => {
    return this.getDifference('Min', Math.floor((timeLapse / 1000 / 60) % 60));
  };
  private getSecondDifference = timeLapse => {
    return this.getDifference('Sec', Math.floor((timeLapse / 1000) % 60));
  };

  private getTimeLapseText = () => {
    if (this.isEventToday() || !this.isEventMomentValid()) {
      return 'Today';
    }

    const differenceInMilliseconds = this.todayMoment.diff(this.eventMoment);
    const differenceAbsoluteValue = Math.abs(differenceInMilliseconds);
    const timeLapse = [
      this.getDayDifference,
      this.getHourDifference,
      this.getMinuteDifference,
      this.getSecondDifference
    ]
      .map(func => func(differenceAbsoluteValue))
      .join(' ');

    return `${timeLapse} ${differenceInMilliseconds > 0 ? 'ago' : ''}`;
  };

  render() {
    if (!this.props.eventDate || !this.eventMoment.isValid()) {
      return null;
    }
    return <h1 {...countdownRules(this.props)}>{this.state.displayText}</h1>;
  }
}

export { CountdownTimer };
