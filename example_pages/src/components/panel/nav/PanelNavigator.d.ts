/// <reference types="react" />
import * as React from 'react';
import { Props as NavItemProps } from './PanelNavItem';
export interface Props {
    children?: React.ReactNode;
    /** The context of the navigator */
    header: string;
    description: string;
    /** Shorthand for CommandBarNavItem. Typically an array of route shorthands */
    navItems: React.ReactElement<any> | NavItemArrayProps[];
    /** Additional bottom actions */
    actions?: any;
}
export interface NavItemArrayProps extends NavItemProps {
    key: any;
}
export declare const containerRules: {
    [attributeName: string]: string;
};
export declare const PanelNavigator: React.SFC<Props>;
