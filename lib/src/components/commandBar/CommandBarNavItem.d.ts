/// <reference types="react" />
import * as React from 'react';
export interface Props {
    /** Primary content */
    children?: React.ReactNode;
    /** Shorthand for primary content */
    content?: string;
    handleOnClick: () => any;
}
export declare const CommandBarNavItem: ({children, content, handleOnClick}: Props) => JSX.Element;
