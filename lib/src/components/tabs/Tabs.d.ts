/// <reference types="react" />
import * as React from 'react';
export declare class Tabs extends React.Component {
    constructor(props: any);
    state: {
        active: number;
    };
    private renderTabs();
    private renderPanes();
    changeActive(index: any): void;
    render(): JSX.Element;
}
