import * as React from 'react';
import { Fragments } from '../../src/util/childrenUtil';

export function withState(WrappedComponent, valueState, handlerState) {
  return class StateManagement extends React.Component<any, any> {
    private func;
    private handler;

    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
    }

    handleStateChange = (e: any) => {
      const value = e.type === 'change' ? e.target.value : e;
      this.setState({ value });
    };

    render() {
      const newProps = {
        [valueState]: this.state.value,
        [handlerState]: e => this.handleStateChange(e)
      };
      return <WrappedComponent {...newProps} {...this.props} />;
    }
  };
}
