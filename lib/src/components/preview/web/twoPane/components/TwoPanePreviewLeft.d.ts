/// <reference types="react" />
import * as React from 'react';
export interface Props {
    accentTextColor?: string;
    baseColor?: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    coverPhoto?: string;
    fianceeName: string;
    fontOverrides?: any;
    ownerName: string;
    message: string;
}
export declare const TwoPanePreviewLeft: React.SFC<Props>;
