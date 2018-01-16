import * as React from 'react';
import { css } from 'glamor';

type InputType = 'standard' | 'square';


/*
  A square input field
*/

interface Props {
  /** Function to call when input is updated */
  handleChange: (e) => void;

  /** CSS that gets applied last **/
  cssOverride?: any;

  /** The styling on the input **/
  type?: InputType;

  /** Determines if the input is a required field. Defaults to false */
  required?: boolean;

  /** Sets the label of the input */
  label?: string;

  /** Sets the placeholder of the input */
  placeholder?: string;

  /** Error message displayed under the input. (For validation purposes) */
  error?: string;

  /** Sets the value of the input */
  value: string;

  /** Determines if the input sets the value to the placeholder on 'Enter' key press. Defaults to false */
  updateValueToPlaceholder?: boolean;
}

const errorText = css({
  color: 'red',
  margin: '4px 0 0 5px',
  fontSize: '14px'
});

const labelRules = (value: string, error: string) =>
  css({
    color: !error ? '#333' : 'red',
    fontSize: '18px',
    fontWeight: 'normal',
    pointerEvents: 'none',
    left: '5px',
    top: '10px',
    marginRight: '4px',
    transition: '0.2s ease all'
  });

// styles for making the input field round
const roundRules = css({
  '& > input': {
    borderRadius: '14px',
    '::placeholder': {},
    ':focus': {
      '::placeholder': {},
      outline: 'none',
      ' ~ label': {}
    }
  }
});

const commonInputRules = (value: string, error: string) => ({
  position: 'relative',
  margin: '14px 0 45px 0',
  textAlign: 'center',
  '& > label': labelRules(value, error),
  '& > input': {
    padding: '18px 10px',
    fontSize: '24px',
    borderRadius: '3px',
    border: 'solid 1px #4a4a4a',
    '::placeholder': {
      color: '#BBBBBB',
      fontSize: '18px'
    },
    ':focus': {
      '::placeholder': {
        visibility: 'inherit'
      },
      outline: 'none',
      ' ~ label': {
        fontSize: '14px',
        color: !error ? '#333' : 'red'
      }
    }
  }
});

const inputGroupRules = (value: string, error: string, cssOverride: any) =>
  css(commonInputRules(value, error), cssOverride);

export const InputBox = ({
  handleChange,
  cssOverride,
  value,
  label,
  error,
  placeholder,
  required = false,
  updateValueToPlaceholder = true
}: Props) => {
  return (
    <div {...inputGroupRules(value, error, cssOverride) }>
      {label ? <label>{label}</label> : null}
      <input
        type="text"
        placeholder={placeholder ? placeholder : null}
        value={value}
        onChange={handleChange}
        required={required}
      />
      <span {...errorText}>{error}</span>
    </div>
  );
};
