import * as React from 'react';
import { css } from 'glamor';

const tabNavRules = css({
  display: 'flex',
  width: '100%',
  padding: '0 60px',
  '&>div': {
    borderBottom: 'solid 1px #e2e2e2',
    flex: 1,
    fontFamily: 'proxima-nova',
    fontSize: '13px',
    letterSpacing: '1.8px',
    fontWeight: 'bold',
    padding: 15,
    textTransform: 'uppercase',
    textAlign: 'center',
    '&:hover': {
      background: '#f2f2f2'
    }
  }
});

const tabsContainerRules = css({
  margin: '60px',
  padding: '0 60px'
});

const tabRules = active =>
  css({
    color: active ? '#121212' : '#e2e2e2'
  });

type tab = {
  key: string;
};

export class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.changeActive = this.changeActive.bind(this);
  }
  state = {
    active: 0
  };
  private renderTabs() {
    const { children } = this.props;
    const { active } = this.state;
    return React.Children.map(children, (child: any, index) => (
      <div
        onClick={() => this.changeActive(index)}
        {...tabRules(active === index)}
      >
        {child.key}
      </div>
    ));
  }
  private renderPanes() {
    const { children } = this.props;
    const { active } = this.state;
    return React.Children.map(children, (child: any, index) => {
      return active === index ? <div>{child}</div> : null;
    });
  }
  changeActive(index) {
    this.setState({ active: index });
  }
  render() {
    return (
      <div>
        <div {...tabNavRules}>{this.renderTabs()}</div>
        <div {...tabsContainerRules}>{this.renderPanes()}</div>
      </div>
    );
  }
}
