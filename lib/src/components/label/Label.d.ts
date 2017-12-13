/// <reference types="react" />
export declare type Position = 'top left' | 'top center' | 'top right' | 'bottom left' | 'bottom center' | 'bottom right';
export declare type Type = 'badge' | 'note';
export interface Props {
    handleClick?: (e: any) => void;
    content: any;
    distanceFromBorder?: number;
    padding?: any;
    position: Position;
    type: Type;
    uppercase?: boolean;
}
export declare const Label: ({handleClick, content, distanceFromBorder, padding, position, type, uppercase}: Props) => JSX.Element;
