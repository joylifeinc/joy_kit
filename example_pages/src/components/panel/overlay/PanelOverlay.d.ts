/// <reference types="react" />
import * as React from 'react';
import { BaseProps as ModalPortalProps } from '../../modal/ModalPortal';
export interface RenderProps {
    closePortal: () => any;
}
export interface Props extends ModalPortalProps {
    /** Where the panel should come in from */
    direction?: Directions;
    description?: any;
    content?: any;
}
export declare type Directions = 'left' | 'right';
export declare type Phase = 'out' | 'in';
/**
 * A Panel Overlay is a content box that slides in from a side of the screen
 */
declare const PanelOverlay: React.SFC<Props>;
export { PanelOverlay };
