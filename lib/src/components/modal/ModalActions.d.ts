/// <reference types="react" />
import * as React from 'react';
import { StyleAttribute } from 'glamor';
export interface Props {
    /** The modal actions - will likely be collection of buttons */
    children?: React.ReactNode;
    /** Additional class names */
    className?: string;
    /** CSS overrides */
    style?: StyleAttribute | {};
}
/**
 * A modal can contain a row of actions
 */
declare const ModalActions: React.SFC<Props>;
export { ModalActions };
