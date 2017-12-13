/// <reference types="react" />
export declare const calcColumn: (width?: number) => {
    width: string;
    flex: string;
};
export interface TileProps {
    children?: any;
    id?: string;
    column?: number;
    ancestor?: boolean;
    parent?: boolean;
    child?: boolean;
    vertical?: boolean;
}
export declare const Tile: ({children, id, column, ancestor, parent, child, vertical}: TileProps) => JSX.Element;
