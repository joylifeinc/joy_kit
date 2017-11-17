import * as React from 'react';
import { css, StyleAttribute } from 'glamor';

export interface Props {
  /** Main content of the modal */
  children: React.ReactNode;

  /** Additional class names */
  className?: string;

  /** CSS overrides */
  style?: StyleAttribute | {};
}

const contentRules = css({
  padding: '1.5rem 0',
  minHeight: '80'
});

/**
 *  Modal content
 */
const ModalContent = ({ children, className = '', style }: Props) => {
  if (children) {
    return (
      <div
        className={`modal__content ${className}`}
        {...css(contentRules, style)}
      >
        {children}
      </div>
    );
  }
  return null;
};

export { ModalContent };
