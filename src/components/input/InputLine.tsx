import * as React from 'react';
import { css } from 'glamor';

export interface Props {
  /** Function to call when input is updated */
  handleChange: (e) => void;

  /**Function called when input is blurred */
  handleBlur?: (e) => void;
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

const barOptions = (side: string) =>
  css(
    {
      content: '""',
      height: '2px',
      width: '0',
      bottom: '1px',
      position: 'absolute',
      background: '#4A90E2',
      transition: '0.2s ease all'
    },
    side === 'left' ? { left: '50%' } : { right: '50%' }
  );

const barRules = css({
  position: 'relative',
  display: 'block',
  '::before': barOptions('left'),
  '::after': barOptions('right')
});

const errorBarRules = css({
  position: 'relative',
  display: 'block',
  content: '""',
  height: '2px',
  bottom: '1px',
  background: 'red'
});

const errorText = css({
  color: 'red',
  margin: '4px 0 0 5px',
  fontSize: '14px'
});

const labelRules = (value: string, error: string) =>
  css(
    {
      color: !error ? '#333' : 'red',
      fontSize: '18px',
      fontWeight: 'normal',
      position: 'absolute',
      pointerEvents: 'none',
      opacity: '0.5',
      left: '5px',
      top: '10px',
      transition: '0.2s ease all'
    },
    value
      ? {
          top: '-10px',
          fontSize: '14px'
        }
      : null
  );

const inputGroupRules = (value: string, error: string) =>
  css({
    position: 'relative',
    margin: '14px 0 45px 0',
    '& > label': labelRules(value, error),
    '& > input': {
      fontSize: '15px',
      padding: '10px 6px 6px 6px',
      display: 'block',
      width: '100%',
      border: 'none',
      borderBottom: '1px solid #757575',
      '::placeholder': {
        visibility: 'hidden'
      },
      ':focus': {
        '::placeholder': {
          visibility: 'inherit'
        },
        ' ~ .bar:before': {
          width: '50%'
        },
        ' ~ .bar:after': {
          width: '50%'
        },
        outline: 'none',
        ' ~ label': {
          top: '-10px',
          fontSize: '14px',
          color: !error ? '#333' : 'red'
        }
      }
    }
  });

export const InputLine = ({
  handleChange,
  handleBlur,
  value,
  label,
  error,
  placeholder,
  required = false,
  updateValueToPlaceholder = true
}: Props) => {
  // Sort of a hack to make the placeholder the value when Enter key is pressed
  const placeholderToValue = e => {
    e.charCode === 13 && updateValueToPlaceholder && placeholder
      ? handleChange({ type: 'change', target: { value: placeholder } })
      : null;
  };

  return (
    <div {...inputGroupRules(value, error)}>
      <input
        type="text"
        placeholder={placeholder ? placeholder : null}
        value={value}
        onKeyPress={placeholderToValue}
        onChange={handleChange}
        onBlur={handleBlur}
        required={required}
      />

      {!error ? (
        <span className="bar" {...barRules} />
      ) : (
        <span className="error-bar" {...errorBarRules} />
      )}

      <span {...errorText}>{error}</span>
      {label ? <label>{label}</label> : null}
    </div>
  );
};
