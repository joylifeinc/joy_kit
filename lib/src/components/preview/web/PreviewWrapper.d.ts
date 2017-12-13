/// <reference types="react" />
import * as React from 'react';
export interface Props {
    for: For;
    previewOptions?: {
        height?: number;
        width?: number;
    };
}
export declare type For = 'twoPane' | 'simpleLayout';
export declare class PreviewWrapper extends React.Component<Props> {
    private windowResizeSub;
    private previewContainer;
    state: {
        scale: number;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    private setWindowResizeSubscription;
    private updatePreviewScale;
    render(): JSX.Element;
}
