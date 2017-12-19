import * as React from 'react';
import { css } from 'glamor';
import { error } from 'util';
import { Button } from '../button/Button';
import { DropDown } from '../dropdown/Dropdown';
import { FloatingPane } from '../floatingPane/FloatingPane'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

import { VelocityTransitionGroup } from 'velocity-react';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';

export interface Props {
  button?: React.ReactElement<any>;
  menu?: React.ReactElement<any>;
}

const buttonWrapperRules = css({
  display: 'inline-block'
})

const floatingPaneWrapperRules = css({
  position: 'relative',
  zIndex: '5',
})

export class DropDownButton extends React.Component<Props, {}> {

  state = { active: false };

  private buttonRef;
  private menuRef;

  private clickSub;

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  activate() {
    if (!this.state.active) {
      this.setState({
        active: true,
      });
    }
  }

  deactivate() {
    if (this.state.active) {
      this.setState({
        active: false,
      });
    }
  }

  toggle() {
    this.setState({
      active: !this.state.active,
    })
  }

  componentDidMount() {
    this.clickSub = Observable.fromEvent(document.body, 'click').debounceTime(250).subscribe((e: any) => {
      if (e.path.includes(this.buttonRef)) {
        // button clicked
        this.toggle();
      } else if (e.path.includes(this.menuRef)) {
        // menu clicked
      } else {
        // somewhere else clicked
        this.deactivate();
      }
    })
  }

  componentWillUnmount() {
    if (this.clickSub) {
      this.clickSub.unsubscribe();
    }
  }

  bindButtonRef = (wrapper) => {
    this.buttonRef = wrapper;
  }

  bindMenuRef = (wrapper) => {
    this.menuRef = wrapper;
  }

  render() {

    return (
      <div>
        <div ref={this.bindButtonRef} {...buttonWrapperRules}>
          {this.props.button}
        </div>
        <VelocityTransitionGroup
          enter={{ animation: 'transition.slideUpIn' }}
          leave={{ animation: 'transition.slideDownOut' }}
        >
          {this.state.active && (<div ref={this.bindMenuRef} {...floatingPaneWrapperRules} > <FloatingPane element={this.props.menu} /></div>)}
        </VelocityTransitionGroup>
      </div >
    );
  }
}
