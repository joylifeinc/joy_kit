/// <reference types="react" />
import * as React from 'react';
export interface Props {
    close: (e) => void;
    signUp: (e) => void;
}
export declare class SignUpPrompt extends React.Component<Props, {}> {
    constructor(props: any);
    render(): JSX.Element;
}
