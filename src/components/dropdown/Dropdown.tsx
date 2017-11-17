import * as React from 'react';
import { css } from 'glamor';
import { VelocityTransitionGroup } from 'velocity-react';

export interface Props {
  /** Items to be displayed in the dropdown */
  items: any[];
  /** Option that is currently selected */
  selected: any;
  /** Triggers a function when an option is selected */
  handleOnSelect: (e: Event) => void;
  /** Boolean to determine whether the dropdown is open */
  open?: boolean;

  /** Property of the item object to display in the dropdown */
  displayBy?: string;
}

const dropdownWrapperRules = css({
  position: 'relative',
  width: '200px',
  margin: '0 auto',
  padding: '10px',
  background: '#fff',
  borderRadius: '7px',
  border: '1px solid rgba(0,0,0,0.15)',
  boxShadow: '0 1px 1px rgba(50,50,50,0.1)',
  cursor: 'pointer',
  outline: 'none',
  fontWeight: 'bold',
  color: '#8AA8BD',
  ':after': {
    content: '""',
    width: '0',
    height: '0',
    position: 'absolute',
    top: '50%',
    right: '15px',
    marginTop: '-3px',
    borderWidth: '6px 6px 0 6px',
    borderStyle: 'solid',
    borderColor: '#8aa8bd transparent'
  }
});

const dropdownRules = open =>
  css({
    position: 'absolute',
    top: '80%',
    left: '0',
    right: '0',
    padding: '0',
    background: 'white',
    borderRadius: 'inherit',
    border: '1px solid rgba(0,0,0,0.17)',
    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
    fontWeight: 'normal',
    // transition: 'all 0.5s ease-in',
    listStyle: 'none'
    // display: open ? 'inherit' : 'none'
  });

const listItemRules = css({
  ':first-of-type': {
    borderRadius: '7px 7px 0 0'
  },
  ':last-of-type': {
    borderRadius: '0 0 7px 7px',
    border: 'none'
  }
});

const listItemLinkRules = css({
  display: 'block',
  padding: '10px',
  textDecoration: 'none',
  color: '#8aa8bd',
  borderBottom: '1px solid #e6e8ea',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,1)',
  // transition: 'all 0.3s ease-out',
  cursor: 'pointer',
  ':hover': {
    background: '#f3f8f8'
  }
});

const activeItemRules = css({
  borderRadius: '5px 5px 0 0',
  background: '#4cbeff',
  boxShadow: 'none',
  borderBottom: 'none',
  color: 'white',
  ':after': {
    borderColor: '#82d1ff transparent'
  }
});

const dropdownItemRules = (items, selected, handleOnSelect, displayBy?) => {
  return items.map((item, idx) => {
    return (
      <li
        key={idx}
        {...listItemRules}
        {...(item === selected ? activeItemRules : null)}
      >
        <a onClick={handleOnSelect.bind(item)} {...listItemLinkRules}>
          {displayBy ? item[displayBy] : item}
        </a>
      </li>
    );
  });
};

export class DropDown extends React.Component<Props, { open: boolean }> {
  constructor(props: Props) {
    super(props);

    this.state = {
      open: this.props.open
    };
  }

  private openDropdown = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div {...dropdownWrapperRules} onClick={this.openDropdown}>
        <span>{this.props.selected}</span>
        <VelocityTransitionGroup
          enter={{ animation: 'slideDown' }}
          leave={{ animation: 'slideUp' }}
        >
          {this.state.open ? (
            <ul {...dropdownRules(this.state.open)}>
              {dropdownItemRules(
                this.props.items,
                this.props.selected,
                this.props.handleOnSelect,
                this.props.displayBy
              )}
            </ul>
          ) : null}
        </VelocityTransitionGroup>
      </div>
    );
  }
}
