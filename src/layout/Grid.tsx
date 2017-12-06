import * as React from 'react';
import { css } from 'glamor';

const gridRules = gap =>
  css({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: gap ? `${gap}px` : null,
    gridAutoRows: 'minmax(330px, auto)'
  });

export interface GridProps {
  children: any;
  gap?: number;
}

export const Grid = ({ children, gap }: GridProps) => (
  <div {...gridRules(gap)}>{children}</div>
);

const gridItemRules = (column, row) =>
  css({
    gridColumn: column,
    gridRow: row
  });

export interface GridItemProps {
  children: any;
  column: string;
  row: string;
  css?: any;
}

export const GridItem = ({ children, column, row, css }: GridItemProps) => (
  <div {...gridItemRules(column, row)} {...(css ? css : null)}>
    {children}
  </div>
);
