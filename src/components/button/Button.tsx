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

  title?: string;

  /** Determines button styles and colors: 'standard', 'primary', 'success', 'security', 'link', 'outline'. Defaults to standard */
  type?: ButtonType;

  /** Updates text to uppercase string. Defaults to true */
  uppercase?: boolean;

  /** Sets the button to a disabled state. Defaults to false */
  disabled?: boolean;

  /** Adds an icon to the beginning of the button content */
  icon?: string | JSX.Element;

  /** Overrides the background color for custom one off buttons */
  backgroundColorOverride?: string;

  /** Overrides the color for custom one off buttons */
  colorOverride?: string;

  /** Overrides the styles for custom one off buttons */
  styleOverride?: ButtonCustomOptions;

  /** Calls the function when the button is clicked */
  handleOnClick: (e: any) => void;
}

export interface ButtonCustomOptions {
  color?: string;
  backgroundColor?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  letterSpacing?: string;
  padding?: string;
  width?: string;
  ':hover'?: {
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
    ':hover': {
      color: '#6DADFF',
      borderColor: '#6DADFF'
    }
  }
};

const disabledRules = (disabled: boolean, type: ButtonType) => {
  return disabled
    ? {
        color: 'black',
        backgroundColor: type !== 'link' ? '#D0D0D0' : 'none',
        ':hover': {
          color: 'black',
          border: 'none',
          backgroundColor: type !== 'link' ? '#D0D0D0' : 'none',
          filter: 'none',
          transform: 'translateY(0px)',
          transition: 'none',
          boxShadow: 'none'
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
  icon,
  backgroundColorOverride,
  colorOverride,
  noChildren
) =>
  css(
    buttonRules[type],
    { textTransform: uppercase ? 'uppercase' : null },
    {
      cursor: 'pointer',
      fontSize: '10px',
      fontWeight: '600',
      letterSpacing: '1.5px',
      lineHeight: '45px',
      maxWidth: 250,
      minWidth: '130px',
      padding: '0 25px',
      outline: 'none',
      textAlign: 'center',
      transition: 'background-color .2s ease',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    {
      backgroundColor: backgroundColorOverride ? backgroundColorOverride : null,
      ':hover': backgroundColorOverride
        ? {
            backgroundColor: backgroundColorOverride,
            filter: 'brightness(120%)',
            transform: 'translateY(-2px)',
            transition: 'all 0.2s ease',
            boxShadow: '0px 2px 5px #888888'
          }
        : null,
      color: colorOverride ? colorOverride : null
    },
    disabledRules(disabled, type)
  );

const Button = ({
  children,
  handleOnClick,
  type,
  uppercase = true,
  disabled = false,
  icon,
  backgroundColorOverride,
  colorOverride,
  styleOverride,
  title
}: Props) => (
  <button
    disabled={disabled}
    {...buttonStyleRules(
      type ? type : 'standard',
      uppercase,
      disabled,
      icon,
      backgroundColorOverride,
      colorOverride,
      !children
    )}
    {...noChildrenRules(!children)}
    {...css(styleOverride)}
    onClick={handleOnClick}
    title={title}
  >
    {icon ? (
      typeof icon === 'string' ? (
        <img
          {...iconRules(icon, !children)}
          {...iconOnlyRules(!children)}
          src={icon}
        />
      ) : (
        icon
      )
    ) : null}
    <span>{children}</span>
  </button>
);

export { Button };
