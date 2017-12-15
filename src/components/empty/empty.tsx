import * as React from 'react';
import { css } from 'glamor';
import { error } from 'util';

/*
  Here for copy/paste
*/

export interface Props {
}
export class AddToCalendarWidget extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const outerContainer = css({});

    return (
      <div {...outerContainer}>
      </div>
    );
  }
}
