import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

declare global {
  interface NodeModule {
    hot: any;
  }
}
import { JoyKitExamples } from './joykitExamples';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(JoyKitExamples);

if (module.hot) {
  module.hot.accept(() => {
    render(JoyKitExamples);
  });
}
