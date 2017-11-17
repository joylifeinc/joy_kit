import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { css } from 'glamor';
import 'glamor/reset';

import { TopNav } from '../../src';

const containerRule = css({
  fontFamily: 'proxima-nova, sans-serif',
  width: '100%',
  justifyContent: 'center'
});

const mainContentRules = css({
  position: 'fixed',
  top: '100px',
  bottom: 0,
  overflow: 'auto'
});

// Example Pages
import { ButtonExamples } from './examples/Buttons';
import { PanelExamples } from './examples/PanelExample';

export class JoyKitExamples extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div {...containerRule}>
        <Router>
          <div>
            <TopNav
              title={'Joy Kit'}
              link={'/'}
              contentCenter={
                <span>
                  <Link to={'/buttons'}>Buttons</Link>
                  <Link to={'/panels'}>Panel</Link>
                </span>
              }
            />
            <div {...mainContentRules}>
              <Route exact={true} path="/buttons" component={ButtonExamples} />
              <Route path="/panels" component={PanelExamples} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
