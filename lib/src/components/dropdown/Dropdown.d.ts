/// <reference types="react" />
import * as React from 'react';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';
export interface Props {
    /** Items to be displayed in the dropdown */
    items: any[];
    /** Option that is currently selected */
    selected: any;
    /** Triggers a function when an option is selected */
    handleOnSelect: (e: Event) => void;
    /** Boolean to determine whether the dropdown is open */
    open?: boolean;
    /** Property of the item object to display in the dropdown */
    displayBy?: string;
}
export declare class DropDown extends React.Component<Props, {
    open: boolean;
}> {
    constructor(props: Props);
    private openDropdown;
    render(): JSX.Element;
}
