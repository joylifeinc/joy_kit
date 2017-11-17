import * as React from 'react';
import { css, StyleAttribute } from 'glamor';

interface Props {
  /** The modal actions - will likely be collection of buttons */
  children?: React.ReactNode;

  /** Additional class names */
  className?: string;

  /** CSS overrides */
  style?: StyleAttribute | {};
}

const actionRules = css({
  display: 'flex',
  flexDirection: 'row',
  borderTop: '1px solid #eee',
  padding: '1rem 0',
  ' > button:not(:last-of-type)': {
    marginRight: '10'
  }
});

/**
 * A modal can contain a row of actions
 */
const ModalActions: React.SFC<Props> = ({
  children,
  className,
  style
}: Props) => {
  return (
    <div className={`modal__actions ${className}`} {...css(actionRules, style)}>
      {children}
    </div>
  );
};

ModalActions.defaultProps = {
  className: ''
};

export { ModalActions };
