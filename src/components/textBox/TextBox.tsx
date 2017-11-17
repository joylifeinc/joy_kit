import * as React from 'react';
import { css } from 'glamor';

import { ActionHeader } from '../actionHeader/ActionHeader';
import { TEXT } from '../../styles/variables';

export interface Props {
  /** Title of the text box */

  title: string;

  /** Title option shows to right of title in slightly lighter font color */
  titleOption?: string;

  /** Subtitle of text box, shows under the title */
  subtitle?: string;

  /** Value of the text box */
  value: string;

  /** Disables the textbox. Defaults to false */
  disabled?: boolean;

  /** Number of rows the text box sizes to. Defaults to 6 */
  rows?: number;

  /** Handles onChange events for textbox */
  handleOnChange: (note: any) => void;
}

const wrapperRules = css({
  maxWidth: '520px',
  paddingTop: '40px'
});

const textAreaRules = disabled =>
  css({
    outline: 'none',
    resize: 'none',
    padding: '16px',
    border: '1px solid #cccccc',
    borderRadius: '3px',
    width: '100%',
    color: !disabled ? 'inherit' : TEXT.color,
    backgroundColor: !disabled ? 'inherit' : '#F5F5F5'
  });

export const TextBox = ({
  title,
  titleOption,
  subtitle,
  value,
  handleOnChange,
  disabled,
  rows = 6
}: Props) => (
  <div {...wrapperRules}>
    <ActionHeader title={title} titleOption={titleOption} subtitle={subtitle} />
    <textarea
      disabled={disabled ? true : false}
      {...textAreaRules(disabled)}
      value={value}
      onChange={handleOnChange}
      rows={rows}
    />
  </div>
);
