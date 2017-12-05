import * as React from 'react';
import { css } from 'glamor';

export const calcColumn = (width?: number) => {
  return {
    // marginLeft: offset ? `${offset / 12 * 100}%` : null,
    width: width ? `${width / 12 * 100}%` : null,
    flex: width ? 'none' : null
  };
};

const tileRules = column =>
  css(
    {
      alignItems: 'stretch',
      display: 'flex',
      flexBasis: 0,
      flexGrow: 1,
      flexShrink: 1,
      minHeight: 'min-content'
    },
    calcColumn(column)
  );

const ancestorRules = css({
  display: 'flex',
  marginLeft: '-0.75rem',
  marginRight: '-0.75rem',
  marginTop: '-0.75rem',
  '&:last-child': {
    marginBottom: '-0.75rem'
  },
  '&:not(:last-child)': {
    marginBottom: '0.75rem'
  }
});

const parentRules = css({
  display: 'flex',
  padding: '0.75rem'
});

const childRules = css({
  margin: '0 !important',
  display: 'block'
});

const verticalRules = css({
  display: 'flex',
  flexDirection: 'column',
  '& > .tile.is-child:not(:last-child)': {
    marginBottom: '1.5rem !important'
  }
});

export interface TileProps {
  children?: any;
  id?: string;
  column?: number;
  ancestor?: boolean;
  parent?: boolean;
  child?: boolean;
  vertical?: boolean;
}

export const Tile = ({
  children,
  id,
  column,
  ancestor,
  parent,
  child,
  vertical
}: TileProps) => (
  <div
    id={id}
    {...(column ? tileRules(column) : tileRules(12))}
    {...(ancestor ? ancestorRules : null)}
    {...(parent ? parentRules : null)}
    {...(child ? childRules : null)}
    {...(vertical ? verticalRules : null)}
  >
    {children}
  </div>
);
