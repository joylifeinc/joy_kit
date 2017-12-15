import * as React from 'react';
import { css } from 'glamor';
import { error } from 'util';
import { Button } from '../button/Button';
import { DropDown } from '../dropdown/Dropdown';
import { FloatingPane } from '../floatingPane/FloatingPane'

export interface Props {
  button?: React.ReactElement<any>;
  menu?: React.ReactElement<any>;
}

const hiddenRules = css({
  display: 'hidden',
})

const visibleRules = css({
  display: 'relative',
})

export class DropDownButton extends React.Component<Props, {}> {

  state = { active: false };

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  clickedButton() {
    this.setState({
      active: !this.state.active,
    })
  }

  render() {

    let clickHandler = { handleOnClick: this.clickedButton.bind(this) }

    return (
      <div>
        {React.cloneElement(this.props.button, clickHandler)}
        {this.state.active && (<FloatingPane element={this.props.menu} />)}
      </div>
    );
  }
}
