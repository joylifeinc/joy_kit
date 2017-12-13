/// <reference types="react" />
import * as React from 'react';
export interface Props {
    location: string;
    inputProps?: any;
    updateLocation: (e) => any;
    handleBlur: (e) => any;
    error?: string;
    label?: string;
}
export declare class LocationLookup extends React.Component<Props, {}> {
    constructor(props: any);
    render(): JSX.Element;
}
