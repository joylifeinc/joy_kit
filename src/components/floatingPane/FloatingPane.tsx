import * as React from 'react';
import { css } from 'glamor';
import { error } from 'util';

const outerContainer = css({
  position: 'relative',
});

const floating = css({
  position: 'absolute',
  zIndex: '2'
})


export interface Props {
  element: React.ReactElement<any>
}
export class FloatingPane extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div {...outerContainer}>
        <div {...floating}>
          {this.props.element}
        </div>
      </div>
    );
  }
}
