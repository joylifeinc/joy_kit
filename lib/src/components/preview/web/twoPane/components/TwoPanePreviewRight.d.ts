/// <reference types="react" />
import * as React from 'react';
export interface Props {
    fontOverrides?: any;
    eventDate: string;
    location: string;
    textColor?: Color;
    baseColor?: Color;
    activeFont?: object;
}
export interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
}
declare const TwoPanePreviewRight: React.SFC<Props>;
export { TwoPanePreviewRight };
