import * as React from 'react';
import { css } from 'glamor';

import { TEXT, COLORS } from '../../styles/variables';

export type ButtonType =
  | 'standard'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'security'
  | 'link'
  | 'outline';

export interface Props {
  /** Button Text */
  children?: string;

  /** Determines button styles and colors: 'standard', 'primary', 'success', 'security', 'link', 'outline'. Defaults to standard */
  type?: ButtonType;

  /** Updates text to uppercase string. Defaults to true */
  uppercase?: boolean;

  /** Sets the button to a disabled state. Defaults to false */
  disabled?: boolean;

  /** Adds an icon to the beginning of the button content */
  icon?: string;

  /** Whether or not to disable the default margins */
  disableMargins?: boolean;

  /** Overrides the styles for custom one off buttons */
  styleOverride?: ButtonCustomOptions;

  /** Calls the function when the button is clicked */
  handleOnClick: (e: any) => void;
}

export interface ButtonCustomOptions {
  color: string;
  backgroundColor: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  ':hover': {
    backgroundColor?: string;
    color?: string;
    transform?: string;
  };
}

const buttonRules: { [index in ButtonType]: any } = {
  standard: {
    color: '#FFF',
    backgroundColor: '#121212',
    border: 'none',
    borderRadius: '40px',
    ':hover': {
      backgroundColor: '#383838',
      transform: 'translateY(-2px)',
      transition: 'all 0.2s ease',
      boxShadow: '0px 2px 5px #888888'
    }
  },
  primary: {
    color: '#FFF',
    backgroundColor: COLORS.BLUE_PRIMARY,
    border: 'none',
    borderRadius: '40px',
    ':hover': {
      filter: 'brightness(120%)',
      transform: 'translateY(-2px)',
      transition: 'all 0.2s ease',
      boxShadow: '0px 2px 5px #888888'
    }
  },
  secondary: {
    color: TEXT.color,
    backgroundColor: COLORS.GRAY_PRIMARY,
    border: 'none',
    borderRadius: '40px',
    ':hover': {
      background: '#f1efef',
      transform: 'translateY(-2px)',
      transition: 'all 0.2s ease',
      boxShadow: '0px 2px 5px #888888'
    }
  },
  success: {
    color: '#FFF',
    backgroundColor: 'green',
    border: 'none',
    borderRadius: '40px',
    ':hover': {
      filter: 'brightness(120%)',
      transform: 'translateY(-2px)',
      transition: 'all 0.2s ease',
      boxShadow: '0px 2px 5px #888888'
    }
  },
  security: {
    color: '#FFF',
    backgroundColor: '#121212',
    border: 'none',
    borderRadius: '40px',
    ':hover': {
      backgroundColor: '#fa615b',
      transform: 'translateY(-2px)',
      transition: 'all 0.2s ease',
      boxShadow: '0px 2px 5px #888888'
    }
  },
  link: {
    color: '#121212',
    fontSize: '12px',
    padding: '0 5px',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    border: 'none',
    borderRadius: '40px',
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: '#6DADFF'
    }
  },
  outline: {
    color: COLORS.BLUE_PRIMARY,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    border: '1px solid #cccccc',
    borderRadius: '3px',
    width: '100%',
    ':hover': {
      color: '#6DADFF',
      borderColor: '#6DADFF'
    }
  }
};

const disabledRules = (disabled: boolean) => {
  return disabled
    ? {
        backgroundColor: '#D0D0D0',
        ':hover': {
          backgroundColor: '#D0D0D0'
        },
        cursor: 'not-allowed'
      }
    : null;
};

const iconRules = (icon: string, noChildren: boolean) => {
  return icon
    ? {
        paddingLeft: noChildren ? '0' : '15px',
        marginRight: noChildren ? '0' : '10px'
      }
    : null;
};

const noChildrenRules = (noChildren: boolean) => {
  return noChildren
    ? css({
        padding: '15px',
        minWidth: '0'
      })
    : null;
};

const iconOnlyRules = (noChildren: boolean) => {
  return noChildren
    ? css({
        marginRight: '0'
      })
    : css({
        marginRight: '15px'
      });
};

const buttonStyleRules = (
  type: ButtonType,
  uppercase,
  disabled,
  disableMargins,
  icon,
  noChildren
) =>
  css(
    buttonRules[type],
    { textTransform: uppercase ? 'uppercase' : null },
    disabledRules(disabled),
    iconRules(icon, noChildren),
    {
      cursor: 'pointer',
      fontSize: '10px',
      fontWeight: '600',
      letterSpacing: '1.5px',
      lineHeight: '40px',
      margin: !disableMargins && '5px 20px',
      minWidth: '130px',
      padding: '0 25px',
      outline: 'none',
      textAlign: 'center',
      transition: 'background-color .2s ease',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }
  );

export const Button = ({
  children,
  handleOnClick,
  type,
  uppercase = true,
  disabled = false,
  disableMargins = false,
  icon,
  styleOverride
}: Props) => (
  <button
    disabled={disabled}
    {...buttonStyleRules(
      type ? type : 'standard',
      uppercase,
      disabled,
      disableMargins,
      icon,
      !children
    )}
    {...noChildrenRules(!children)}
    {...styleOverride}
    onClick={handleOnClick}
  >
    {icon ? (
      <img {...iconRules} {...iconOnlyRules(!children)} src={icon} />
    ) : null}
    {children}
  </button>
);
