/// <reference types="react" />
import * as React from 'react';
import { StyleAttribute } from 'glamor';
export interface RenderProps {
    closePortal: () => any;
}
export interface BaseProps {
    /** Primary content. */
    children?: React.ReactNode;
    /** Whether or not the Modal should close when the escape key is pressed. */
    closeOnEscape?: boolean;
    /** Whether or not the Modal should close when the background is clicked. */
    closeOnBackgroundClick?: boolean;
    /** Whether or not to hide the lightbox if the modal is not active */
    hideLightboxOnInactive?: boolean;
    /** Whether or not to hide the lightbox altogether */
    hideLightbox?: boolean;
    /**
     * Whether or not to ignore close events when they occur - as opposed to adding/removing
     * event listeners.
     */
    ignoreCloseEvents?: boolean;
    /** Whether or not the accompanying modal is the most recently active */
    isActive: boolean;
    /** Whether or not the accompanying modal is open */
    isOpen: boolean;
    /**
     * Called when a close event happens AND right after the closing animation.
     * IE user presses escape (if enabled), clicks on the background (if enabled), or
     * triggers a close event (as defined by the developer).
     * @param {SyntheticEvent} e
     */
    onClose: ([any]?) => any;
    /**
     * Called when the modal will be removed from the DOM.
     * @param {object} data - All Props
     */
    onUnmount?: (data) => any;
    /**
     * Allows for inline rendering and wrapping without having to create a new component.
     * The props parameter receives a `closePortal` prop that should be invoked at the end of
     * an interaction in order to complete the animation flow.
     */
    render?: (props: RenderProps) => any;
    /**
     * In the event where there could be many panels, we don't want to immediately remove it from the DOM.
     *  We reset the close state post closing animation so that it can be re-opened
     */
    resetAfterClosing?: boolean;
    runOnMount?: boolean;
}
export interface Props extends BaseProps {
    type: Type;
    styleRules: StyleAttribute;
    delay?: number;
    animations: (isOpen: boolean) => any;
}
export interface State {
    isClosing: boolean;
}
export declare type Type = 'modal' | 'panel-overlay';
/**
 * A modal displays content that temporarily blocks interactions with the main view
 */
export declare class ModalPortal extends React.Component<Props, State> {
    private closingTimeoutId;
    static defaultProps: {
        closeOnEscape: boolean;
        closeOnBackgroundClick: boolean;
        hideLightboxOnInactive: boolean;
        hideLightbox: boolean;
        resetAfterClosing: boolean;
        runOnMount: boolean;
    };
    state: State;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    protected closePortal: () => void;
    private buildModalContent;
    private inlineRender();
    render(): JSX.Element;
}
