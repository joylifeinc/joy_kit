/// <reference types="react" />
import * as React from 'react';
export interface Props {
    thickness?: string;
    height?: string | number;
    width?: string | number;
    color?: string;
}
export declare class SpinnerLoader extends React.Component<Props> {
    static defaultProps: {
        height: number;
        width: number;
        color: string;
        thickness: string;
    };
    render(): JSX.Element;
}
