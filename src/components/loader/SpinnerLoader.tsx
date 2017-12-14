import * as React from 'react';
import { css, keyframes } from 'glamor';

export interface Props {
  fullScreen?: boolean;
  thickness?: string;
  height?: string | number;
  width?: string | number;
  color?: string;
}

const fullScreenWrapperRules = css({
  alignItems: 'center',
  backgroundColor: '#fff',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  minHeight: '100vh',
  overflow: 'hidden',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 100,
  pointerEvents: 'none',
  userSelect: 'none'
});

const spinAnimation = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' }
});

const spinnerLoaderRules = ({ color, height, thickness, width }: Props) =>
  css({
    border: `${thickness} solid rgba(0, 0, 0, .1)`,
    borderTopColor: color,
    borderRadius: '50%',
    height,
    width,
    animation: `${spinAnimation} 1.5s ease infinite`
  });

export class SpinnerLoader extends React.Component<Props> {
  static defaultProps = {
    fullScreen: false,
    height: 50,
    width: 50,
    color: 'black',
    thickness: '2px'
  };
  render() {
    const spinner = <div {...spinnerLoaderRules(this.props)} />;

    if (this.props.fullScreen) {
      return <div {...fullScreenWrapperRules}>{spinner}</div>;
    }

    return spinner;
  }
}
