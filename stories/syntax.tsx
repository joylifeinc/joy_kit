import '../node_modules/prismjs/themes/prism.css';
import '../node_modules/prism-themes/themes/prism-ghcolors.css';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import * as React from 'react';

export type SyntaxTypes = 'typescript' | 'javascript' | 'jsx';

export interface Props {
  codeblock: string;
  syntax: SyntaxTypes;
}

export class SyntaxHighlight extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }
  
  render() {
    return (
      <pre>
        <code className={`language-${this.props.syntax}`}>
          {this.props.codeblock}
        </code>
      </pre>
    );
  }
}
