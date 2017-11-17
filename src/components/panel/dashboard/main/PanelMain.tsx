import * as React from 'react';
import { css } from 'glamor';

export interface Props {
  children?: React.ReactNode;
}

// ======================
// Styles
// ======================

const mainRules = css({
  height: '100%',
  overflow: 'hidden',
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end'
});

export class PanelMain extends React.Component<Props> {
  render() {
    const { children } = this.props;
    return (
      <div {...mainRules} className="panel-dashboard__main">
        {children}
      </div>
    );
  }
}
