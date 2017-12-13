/// <reference types="react" />
export declare const calcColumn: (width?: number, offset?: number) => {
    marginLeft: string;
    width: string;
    flex: string;
};
export interface RowProps {
    children: any;
    columns?: number;
}
export declare const Row: ({columns, children}: RowProps) => JSX.Element;
export interface ColumnProps {
    children: any;
    offsetDesktop?: number;
    desktop?: number;
    offsetTablet?: number;
    tablet?: number;
    offsetMobile?: number;
    mobile?: number;
}
export declare const Column: ({children, offsetDesktop, desktop, offsetTablet, tablet, offsetMobile, mobile}: ColumnProps) => JSX.Element;
