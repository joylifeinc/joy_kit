/// <reference types="react" />
import * as React from 'react';
import { Props as NavProps } from './CommandBarNavItem';
export interface Props {
    /** Shorthand for an additional action */
    contentRight?: any;
    /** Can be an element to render or can be shorthand for an array of CommandBarNavItems   */
    nav: React.ReactElement<any> | NavItemsArray[];
    /** Shorthand for primary content */
    title: any;
}
export interface NavItemsArray extends NavProps {
    key: string;
}
declare const CommandBar: {
    Container: React.StatelessComponent<Props>;
    NavItem: ({children, content, handleOnClick}: NavProps) => JSX.Element;
};
export { CommandBar };
