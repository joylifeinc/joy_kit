/// <reference types="react" />
import * as React from 'react';
import { Props as ModalHeaderProps } from './ModalHeader';
import { Props as ModalContentProps } from './ModalContent';
import { Props as ModalActionsProps } from './ModalActions';
import { BaseProps } from './ModalPortal';
export interface Props extends BaseProps {
    /** A modal can vary in size. */
    size?: Size;
}
export interface State {
    isClosing: boolean;
}
export declare type Size = 'mini' | 'small' | 'normal' | 'large' | 'fullscreen';
/**
 * A modal displays content that temporarily blocks interactions with the main view
 */
export declare class Modal extends React.Component<Props> {
    static defaultProps: {
        size: Size;
        closeOnEscape: boolean;
        closeOnBackgroundClick: boolean;
        hideLightbox: boolean;
        hideLightboxOnInactive: boolean;
    };
    static Header: React.StatelessComponent<ModalHeaderProps>;
    static Content: React.StatelessComponent<ModalContentProps>;
    static Actions: React.StatelessComponent<ModalActionsProps>;
    render(): JSX.Element;
}
