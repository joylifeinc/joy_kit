/// <reference types="react" />
import * as React from 'react';
import { StyleAttribute } from 'glamor';
export interface Props {
    /** Whether or not the Modal should close when the escape key is pressed */
    closeOnEscape: boolean;
    /** Whether or not the Modal should close when the background is clicked */
    closeOnBackgroundClick: boolean;
    ignoreCloseEvents?: boolean;
    /** How to handle the accepted close events */
    handleCloseEvent: (props: object, e: any) => any;
    hide?: boolean;
    /** Whether or not the modal is the most recently active modal */
    isActive: boolean;
    /** Whether or not the modal is rendered on the screen */
    isOpen: boolean;
    /** isOpen/close animation overrides */
    animationOverrideRules?: Styles;
    /** Additional/override styles */
    styleRules?: Styles;
}
export declare type Styles = StyleAttribute | {};
/**
 * The overlay will act as dimmer of the screen and it will contain a modal
 */
export declare class ModalLightBox extends React.Component<Props, {}> {
    static defaultProps: {
        hide: boolean;
        ignoreCloseEvents: boolean;
    };
    componentWillMount(): void;
    componentWillUnmount(): void;
    private handleEscapeKeyClick;
    private handleBackgroundClick;
    private closeModal;
    render(): JSX.Element;
}
