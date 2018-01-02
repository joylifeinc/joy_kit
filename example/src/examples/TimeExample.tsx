/* tslint:disable */
import * as React from 'react';
import { SyntaxHighlight } from '../components/SyntaxHighlight';
import { Clockface } from '../../../src';

import { css } from 'glamor';



export class TimeExamples extends React.Component<{}, { open: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    setTimeout(() => {
      this.setState({ open: true });
    }, 2000);
  }

  render() {
    return (
      <div>
        <Clockface />
      </div>
    );
  }
}
