/// <reference types="react" />
import * as React from 'react';
import { StyleAttribute } from 'glamor';
export interface Props {
    /** Main content of the modal */
    children: React.ReactNode;
    /** Additional class names */
    className?: string;
    /** CSS overrides */
    style?: StyleAttribute | {};
}
/**
 *  Modal content
 */
declare const ModalContent: React.SFC<Props>;
export { ModalContent };
