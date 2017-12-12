export interface Props {
    /** Title */
    title: string;
    /** Title option shows to right of title in slightly lighter font color */
    titleOption?: string;
    /** Subtitle, shows under the title */
    subtitle?: string;
}
export declare const ActionHeader: ({title, titleOption, subtitle}: Props) => JSX.Element;
