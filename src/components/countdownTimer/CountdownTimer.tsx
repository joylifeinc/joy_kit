import * as React from 'react';
import { css } from 'glamor';
import * as moment from 'moment';

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
    fontWeight: 400,
    fontSize: 15,
    margin: 0
  };

  private timeLapseInterval;
  private todayMoment = moment();
  private eventMoment;

  constructor(props) {
    super(props);

    const eventMoment = moment(this.props.eventDate);
    this.eventMoment = eventMoment;
    this.state = {
      displayText: this.getTimeLapseText()
    };
  }

  componentWillMount() {
    this.timeLapseInterval = window.setInterval(() => {
      this.eventMoment.subtract(1, 'seconds');
      this.setState({ displayText: this.getTimeLapseText() });
    }, 1000);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.eventDate !== nextProps.eventDate) {
      this.eventMoment = moment(nextProps.eventDate);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timeLapseInterval);
  }

  private isEventToday = () => {
    return this.eventMoment && this.eventMoment.isSame(this.todayMoment, 'day');
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
    if (this.isEventToday()) {
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
    return <h4 {...countdownRules(this.props)}>{this.state.displayText}</h4>;
  }
}

export { CountdownTimer };
