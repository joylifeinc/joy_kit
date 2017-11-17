/* tslint:disable */
import * as React from 'react';
import { SyntaxHighlight } from '../components/SyntaxHighlight';

import { css } from 'glamor';



export class PanelExamples extends React.Component<{}, { open: boolean }> {
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
        This is where I would put my panel if I had one!
      </div>
    );
  }
}
