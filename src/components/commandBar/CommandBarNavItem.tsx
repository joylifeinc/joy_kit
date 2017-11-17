import * as React from 'react';
import { css } from 'glamor';

import { COLORS } from '../../styles/variables';

export interface Props {
  /** Primary content */
  children?: React.ReactNode;

  /** Shorthand for primary content */
  content?: string;
  handleOnClick: () => any;
}
const navItemRules = css({
  color: COLORS.BLUE_PRIMARY,
  cursor: 'pointer'
});

export const CommandBarNavItem = ({
  children,
  content,
  handleOnClick
}: Props) => {
  return (
    <span {...navItemRules} onClick={handleOnClick}>
      {children ? children : content}
    </span>
  );
};
