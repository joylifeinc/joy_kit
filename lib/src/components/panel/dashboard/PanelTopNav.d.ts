/// <reference types="react" />
import * as React from 'react';
export interface Props {
    children?: React.ReactNode;
    /** Title to be displayed */
    contentLeftTitle?: string;
    /** Shorthand for an additional action */
    contentRight?: any;
    /** This will trigger the transition animation */
    showPanel: boolean;
}
export declare const PanelTopNav: ({children, contentLeftTitle, contentRight, showPanel}: Props) => JSX.Element;
