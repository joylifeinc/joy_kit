import * as React from 'react';
import { css } from 'glamor';
import { Observable } from 'rxjs/Observable';
import { VelocityComponent } from 'velocity-react';

export interface Props {}
export interface State {
  time: number;
}

const tick = Observable.create(observer => {
  setInterval(() => {
    observer.next(Date.now());
  }, 1000);
});

const hours = time => Math.floor(time / (1000 * 60 * 60)) % 12;
const minutes = time => Math.floor(time / (1000 * 60));
const seconds = time => Math.floor(time / 1000);

const degFunc = (periodDegrees, period) => time => {
  return time * (periodDegrees / period);
};
const hoursDeg = degFunc(360, 12);
const minutesDeg = degFunc(360, 60);
const secondsDeg = degFunc(360, 60);

const ClockRules = css({
  height: 400,
  width: 400,
  borderRadius: '50%',
  border: 'solid 1px #333',
  position: 'relative'
});
const height = 200;
const ClockHandRules = css({
  height: `${height}px`,
  border: '1px solid #333',
  position: 'absolute',
  left: '50%',
  bottom: '50%',
  transformOrigin: `center ${height - 10}px`
});

const DegreeRulesValues = deg => {
  return {
    transform: `translate(-50%, 0) rotate(${deg}deg)`
  };
};

interface ClockhandProps {
  degrees: number;
  children?: any;
}
const Clockhand = ({ degrees, children }: ClockhandProps) => {
  const animateObj = {
    rotateZ: degrees,
    translateX: '-50%'
  };
  return (
    <VelocityComponent animation={animateObj} duration={200}>
      <div {...ClockHandRules}>{...children}</div>
    </VelocityComponent>
  );
};

export class Clockface extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }
  updateTime(time) {
    this.setState({
      time
    });
  }
  componentDidMount() {
    console.log('mount');
    tick.subscribe({
      next: time => this.updateTime(time),
      error: err => console.error(err),
      complete: () => console.log('complete')
    });
  }

  render() {
    const { time } = this.state;
    const secondsDegrees = secondsDeg(seconds(time));
    const minutesDegrees = minutesDeg(minutes(time));
    const hoursDegrees = hoursDeg(hours(time));
    return (
      <div>
        <div>clock: {time}</div>
        <div>hours: {hours(time)}</div>
        <div>minutes: {minutes(time)}</div>
        <div>seconds: {seconds(time)}</div>
        <div {...ClockRules}>
          <Clockhand degrees={secondsDegrees}>hello</Clockhand>
          <Clockhand degrees={minutesDegrees} />
          <Clockhand degrees={hoursDegrees} />
        </div>
      </div>
    );
  }
}

export default Clockface;