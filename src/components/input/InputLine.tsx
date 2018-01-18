import * as React from 'react';
import { css } from 'glamor';

import { COLORS } from '../../styles/variables';
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

  hideError?: boolean;

  autocompleteName?: string;

  /** Sets the value of the input */
  value: string;

  /** Determines if the input sets the value to the placeholder on 'Enter' key press. Defaults to false */
  updateValueToPlaceholder?: boolean;
}

const barOptions = (side: string, backgroundColor: string) =>
  css(
    {
      content: '""',
      height: 2,
      width: 0,
      bottom: 0,
      position: 'absolute',
      backgroundColor,
      transition: '0.2s ease all'
    },
    side === 'left' ? { left: '50%' } : { right: '50%' }
  );

const barRules = (hasErrors: boolean) => {
  const barColor = hasErrors ? COLORS.RED_PRIMARY : COLORS.BLACK_SECONDARY;
  return css({
    position: 'relative',
    display: 'block',
    '::before': barOptions('left', barColor),
    '::after': barOptions('right', barColor)
  });
};

const errorBarRules = css({
  position: 'relative',
  display: 'block',
  content: '""',
  height: 2,
  bottom: 1,
  background: COLORS.RED_PRIMARY
});

const errorText = css({
  color: COLORS.RED_PRIMARY,
  display: 'inline-block',
  margin: '4px 0 0 1px',
  fontSize: 12
});

const labelValueTransform =
  'translateZ(0) translateX(-1px) translateY(-22px) scale(.75)';

const labelRules = (value: string, error: string) =>
  css(
    {
      color: COLORS.GRAY_TERTIARY,
      fontSize: '15px',
      fontWeight: 400,
      position: 'absolute',
      pointerEvents: 'none',
      opacity: '0.7',
      left: '2px',
      top: '25px',
      transition: 'transform cubic-bezier(.25, .8, .25, 1) .25s',
      transform: 'translateZ(0) translateY(0) scale(1)',
      transformOrigin: 'left top',
      whiteSpace: 'nowrap'
    },
    value
      ? {
          transform: labelValueTransform,
          fontWeight: 600
        }
      : null,
    error && { color: COLORS.RED_PRIMARY }
  );

const inputGroupRules = (value: string, error: string) =>
  css({
    position: 'relative',
    paddingTop: 16,
    height: 66,
    '& > label': labelRules(value, error),
    '& > input': {
      color: 'rgba(0, 0, 0, .87)',
      fontSize: '15px',
      height: 32,
      lineHeight: '24px',
      padding: '2px 0 1px',
      display: 'block',
      width: '100%',
      border: 'none',
      borderBottom: '1px solid #757575',
      borderColor: 'rgba(0,0,0,.12)',
      borderWidth: '0 0 1px',
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
          transform: labelValueTransform
        }
      }
    }
  });

export const InputLine: React.SFC<Props> = ({
  handleChange,
  handleBlur,
  value,
  label,
  error,
  hideError,
  autocompleteName,
  placeholder,
  required = false,
  updateValueToPlaceholder = true
}) => {
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
        name={autocompleteName}
        onChange={handleChange}
        onBlur={handleBlur}
        required={required}
      />

      {!error ? (
        <span className="bar" {...barRules(Boolean(error))} />
      ) : (
        <span className="error-bar" {...errorBarRules} />
      )}

      {!hideError && <span {...errorText}>{error}</span>}
      {label ? <label>{label}</label> : null}
    </div>
  );
};

InputLine.defaultProps = {
  hideError: false
};
