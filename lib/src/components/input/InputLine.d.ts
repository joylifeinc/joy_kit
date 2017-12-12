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
export declare const InputLine: ({handleChange, handleBlur, value, label, error, placeholder, required, updateValueToPlaceholder}: Props) => JSX.Element;
