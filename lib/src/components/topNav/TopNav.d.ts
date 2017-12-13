/// <reference types="react" />
export interface Props {
    hideBottomBorder?: boolean;
    title?: string;
    subtitle?: string;
    link?: string;
    backButton?: boolean;
    click?: () => void;
    contentCenter?: any;
    contentRight?: any;
}
export declare const TopNav: ({title, subtitle, contentCenter, contentRight, click, link, backButton, hideBottomBorder}: Props) => JSX.Element;
