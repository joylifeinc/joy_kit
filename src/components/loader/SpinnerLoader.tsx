import * as React from 'react';
import { css } from 'glamor';
import { VelocityComponent } from 'velocity-react';

export interface Props {
  thickness?: string;
  height?: string | number;
  width?: string | number;
  color?: string;
}

const spinnerLoaderRules = ({ color, height, thickness, width }: Props) =>
  css({
    border: `${thickness} solid rgba(0, 0, 0, .1)`,
    borderTopColor: color,
    borderRadius: '50%',
    height,
    width,
    transform: 'rotate(0deg)'
  });

export class SpinnerLoader extends React.Component<Props> {
  static defaultProps = {
    height: 50,
    width: 50,
    color: 'black',
    thickness: '2px'
  };
  render() {
    return (
      <VelocityComponent
        animation={{ rotateZ: '360deg' }}
        runOnMount
        loop={true}
        duration={1500}
      >
        <div {...spinnerLoaderRules(this.props)} />
      </VelocityComponent>
    );
  }
}
