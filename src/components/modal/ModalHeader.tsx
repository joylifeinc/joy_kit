import * as React from 'react';
import { css, StyleAttribute } from 'glamor';

interface Props {
  /** The header content */
  children?: React.ReactNode;

  /** Additional classes */
  className?: string;

  /** CSS overrides */
  style?: StyleAttribute | {};
}

const headerRules = css({
  borderBottom: '1px solid #eee',
  padding: '1.25rem 0',
  fontWeight: 'bold'
});

/**
 *  A modal can have a header
 */
const ModalHeader: React.SFC<Props> = ({ children, className, style }) => (
  <div
    className={`modal__header ${className && className}`}
    {...css(headerRules, style)}
  >
    {children}
  </div>
);

ModalHeader.defaultProps = {
  className: ''
};

export { ModalHeader };
