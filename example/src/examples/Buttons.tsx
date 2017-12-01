/* tslint:disable */
import * as React from 'react';
import { SyntaxHighlight } from '../components/SyntaxHighlight';
import { Button, ButtonType } from '../../../src';

import { css } from 'glamor';

const buttonWrapperRules = css({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
});

const headerRules = css({
  margin: '10px 40px 10px 40px'
});

const syntaxContainerRules = css({
  maxWidth: '33%',
  margin: '10px 40px 10px 40px',
  display: 'flex',
  flexDirection: 'column'
});

const labelRules = css({
  marginLeft: '10px',
  marginBottom: '15px'
});

const buttonRules = css({
  margin: '15px 0 15px 0'
});

const componentContainerRules = css({
  marginTop: '15px'
});

const buttonTemplate = (type: string, name: string) =>
  `<Button 
    type="${type}"
    handleOnClick={this.onClickHandler}>
    ${name}</Button>`;

const buttonTypes: Array<{ type: ButtonType }> = [
  { type: 'standard' },
  { type: 'primary' },
  { type: 'secondary' },
  { type: 'success' },
  { type: 'security' },
  { type: 'link' },
  { type: 'outline' }
];
export class ButtonExamples extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  renderBasicButtons() {
    return buttonTypes.map(({ type }) => {
      const name = type.charAt(0).toUpperCase() + type.slice(1);
      return (
        <div key={type} {...syntaxContainerRules}>
          <div {...componentContainerRules}>
            <div {...labelRules}>{`${name} Button`}</div>
            <div {...buttonRules}>
              <Button type={type} handleOnClick={() => console.log(name)}>
                {name}
              </Button>
            </div>
            <SyntaxHighlight
              codeblock={buttonTemplate(type, name)}
              syntax={'jsx'}
            />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 {...headerRules}>Button Examples</h1>
        <div {...buttonWrapperRules}>{this.renderBasicButtons()}</div>
        {/* custom buttons */}
        <div {...syntaxContainerRules}>
          <div {...componentContainerRules}>
            <div {...labelRules}>{`${name} Button`}</div>
            <div {...buttonRules}>
              <Button
                type={'outline'}
                disableMargin="all"
                styleOverride={{ width: '100%' }}
                handleOnClick={null}
              >
                OUTLINE
              </Button>
            </div>
            <SyntaxHighlight
              codeblock={`<Button 
              type="outline"
              handleOnClick={this.onClickHandler}
              styleOverride={({width: '100%'})} >
              OUTLINE</Button>`}
              syntax={'jsx'}
            />
          </div>
        </div>
      </div>
    );
  }
}
