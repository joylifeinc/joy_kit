/// <reference types="react" />
import '../../../node_modules/prismjs/themes/prism.css';
import '../../../node_modules/prism-themes/themes/prism-ghcolors.css';
import 'prismjs/components/prism-jsx';
import * as React from 'react';
export declare type SyntaxTypes = 'typescript' | 'javascript' | 'jsx';
export interface Props {
    codeblock: string;
    syntax: SyntaxTypes;
}
export declare class SyntaxHighlight extends React.Component<Props, {}> {
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
