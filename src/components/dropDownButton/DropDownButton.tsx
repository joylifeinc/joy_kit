import * as React from 'react';
import { css } from 'glamor';
import { error } from 'util';
import { Button } from '../button/Button';
import { DropDown } from '../dropdown/Dropdown';
import { FloatingPane } from '../floatingPane/FloatingPane'
import { VelocityTransitionGroup } from 'velocity-react';
import { Observable } from 'rxjs';

export interface Props {
  button?: React.ReactElement<any>;
  menu?: React.ReactElement<any>;
}

const buttonWrapperRules = css({
  display: 'inline-block'
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
    this.clickSub = Observable.fromEvent(document.body, 'click').debounceTime(50).subscribe((e: any) => {
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
    this.clickSub.unsubscribe();
  }

  bindButtonRef(wrapper) {
    this.buttonRef = wrapper;
  }

  bindMenuRef(wrapper) {
    this.menuRef = wrapper;
  }

  render() {

    return (
      <div>
        <div ref={this.bindButtonRef.bind(this)} {...buttonWrapperRules}>
          {this.props.button}
        </div>
        {this.state.active && (<div ref={this.bindMenuRef.bind(this)} > <FloatingPane element={this.props.menu} /></div>)}
      </div >
    );
  }
}
