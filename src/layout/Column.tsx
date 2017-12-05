import * as React from 'react';
import { css, media } from 'glamor';

const COLUMN_GAP = 0.75;
const MARGIN = 5;

// Responsiveness

// The container horizontal gap, which acts as the offset for breakpoints
const GAP = 32;
// 960, 1152, and 1344 have been chosen because they are divisible by both 12 and 16
const TABLET = 769;
const MOBILE = TABLET - 1;
// 960px container + 3rem
const DESKTOP = 960 + 2 * GAP;
// 1152px container + 3rem
const WIDESCREEN = 1152 + 2 * GAP;
// 1344px container + 3rem
const FULL_HD = 1344 + 2 * GAP;

export const calcColumn = (width?: number, offset?: number) => {
  return {
    marginLeft: offset ? `${offset / 12 * 100}%` : null,
    width: width ? `${width / 12 * 100}%` : null,
    flex: width || offset ? 'none' : null
  };
};

const gridBase = () =>
  css({
    display: 'flex'
  });

const rowBase = () =>
  css({
    display: 'flex',
    flexWrap: 'wrap'
  });

export interface RowProps {
  children: any;
  columns?: number;
}

export const Row = ({ columns, children }: RowProps) => (
  <div {...rowBase()}>{children}</div>
);

const columnBase = (
  offsetDesktop,
  desktop,
  offsetTablet,
  tablet,
  offsetMobile,
  mobile
) =>
  css(
    {
      display: 'block',
      flexBasis: 0,
      flexGrow: 1,
      flexShrink: 1,
      width: '100%'
    },
    media(`(min-width: ${DESKTOP}px)`, calcColumn(desktop, offsetDesktop)),
    media(
      `(min-width: ${TABLET}px) and (max-width: ${DESKTOP}px)`,
      calcColumn(tablet, offsetTablet)
    ),
    media(`(max-width: ${MOBILE}px)`, calcColumn(mobile, offsetMobile))
  );

export interface ColumnProps {
  children: any;
  offsetDesktop?: number;
  desktop?: number;
  offsetTablet?: number;
  tablet?: number;
  offsetMobile?: number;
  mobile?: number;
}

export const Column = ({
  children,
  offsetDesktop,
  desktop,
  offsetTablet,
  tablet,
  offsetMobile,
  mobile
}: ColumnProps) => (
  <div
    {...columnBase(
      offsetDesktop,
      desktop,
      offsetTablet,
      tablet,
      offsetMobile,
      mobile
    )}
  >
    {children}
  </div>
);
