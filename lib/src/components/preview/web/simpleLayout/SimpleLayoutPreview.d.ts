/// <reference types="react" />
import * as React from 'react';
import { Activefont } from '../util';
export interface Props {
    activeFont?: Activefont;
    coverPhoto?: string;
    eventDate?: string;
    fianceeName?: string;
    location?: string;
    message?: string;
    ownerName?: string;
    theme?: string;
    previewOptions?: {
        height?: number;
        width?: number;
    };
}
export declare const SimpleLayoutPreview: React.SFC<Props>;
