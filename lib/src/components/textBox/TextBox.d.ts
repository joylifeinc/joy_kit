/// <reference types="react" />
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
export declare const TextBox: ({title, titleOption, subtitle, value, handleOnChange, disabled, rows}: Props) => JSX.Element;
