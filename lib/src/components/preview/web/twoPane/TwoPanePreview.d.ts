/// <reference types="react" />
import * as React from 'react';
export interface Props {
    activeFont?: {
        key: string;
        fontFamily?: string;
        fontWeight?: string;
        h1?: string;
        h2?: string;
        h3?: string;
        letterSpacing?: string;
        lineHeight?: string;
        textTransform: string;
        _comment?: string;
    };
    baseColor?: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    baseTextColor?: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    useThemeColors?: boolean;
    coverPhoto?: string;
    eventDate?: string;
    fianceeName?: string;
    location?: string;
    message?: string;
    ownerName?: string;
    theme?: string;
    title?: string;
    previewOptions?: {
        height?: number;
        width?: number;
    };
}
declare class TwoPanePreview extends React.Component<Props> {
    static defaultProps: {
        activeFont: any;
        theme: any;
        previewOptions: {
            height: number;
            width: number;
        };
        useThemeColors: boolean;
    };
    private getFontOverrides;
    private getStyleOverrides;
    private getVisibleFields;
    render(): JSX.Element;
}
export { TwoPanePreview };
