/// <reference types="react" />
import * as React from 'react';
import 'velocity-animate/velocity.ui';
export interface Props {
    children?: React.ReactNode;
    /** This will trigger the transition animation */
    showPanel: boolean;
    /** Describes content to navigate */
    title: any;
    /** Shorthand for CommandBar.NavItem. Typically an array (or fragment) of NavItems  */
    nav: any;
    /** An optional CTA */
    contentRight?: any;
}
export declare const PanelBottomNav: ({contentRight, children, nav, showPanel, title}: Props) => JSX.Element;
