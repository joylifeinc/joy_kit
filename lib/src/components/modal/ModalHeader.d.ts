/// <reference types="react" />
import * as React from 'react';
import { StyleAttribute } from 'glamor';
export interface Props {
    /** The header content */
    children?: React.ReactNode;
    /** Additional classes */
    className?: string;
    /** CSS overrides */
    style?: StyleAttribute | {};
}
/**
 *  A modal can have a header
 */
declare const ModalHeader: React.SFC<Props>;
export { ModalHeader };
