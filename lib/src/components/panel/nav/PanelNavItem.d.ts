/// <reference types="react" />
import * as React from 'react';
export interface Props {
    content: React.ReactNode;
    handleOnClick?: () => any;
}
export declare const PanelNavItem: React.SFC<Props>;
