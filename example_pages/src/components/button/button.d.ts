/// <reference types="react" />
export declare type ButtonType = 'standard' | 'primary' | 'secondary' | 'success' | 'security' | 'link' | 'outline';
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
    padding?: string;
    ':hover': {
        backgroundColor?: string;
        color?: string;
        transform?: string;
    };
}
export declare const Button: ({children, handleOnClick, type, uppercase, disabled, disableMargins, icon, styleOverride}: Props) => JSX.Element;
