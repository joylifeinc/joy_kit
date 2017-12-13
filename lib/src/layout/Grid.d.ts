/// <reference types="react" />
export interface GridProps {
    children: any;
    gap?: number;
}
export declare const Grid: ({children, gap}: GridProps) => JSX.Element;
export interface GridItemProps {
    children: any;
    column: string;
    row: string;
    css?: any;
}
export declare const GridItem: ({children, column, row, css}: GridItemProps) => JSX.Element;
