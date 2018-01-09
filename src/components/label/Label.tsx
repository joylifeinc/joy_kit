/**
 * 10/17 - Kevin Tran
 */

import * as React from 'react';
import { css } from 'glamor';

// ======================
// Union Types
// ======================
export type Position =
  | 'top left'
  | 'top center'
  | 'top right'
  | 'bottom left'
  | 'bottom center'
  | 'bottom right';

export type Type = 'badge' | 'note';

// ======================
// Position Rules
// ======================

const horizontalPositionOptions = (horizontalPos: string, distance: number) => {
  switch (horizontalPos) {
    case 'left':
    case 'right':
      return { [horizontalPos]: distance };
    case 'center':
      return { left: '50%', transform: 'translateX(-50%)' };
    default:
      return null;
  }
};

const labelPositionRules = (position: Position, distanceFromBorder: number) => {
  const [vertical, horizontal] = position.split(' ');
  return css(
    {
      position: 'absolute',
      [vertical]: distanceFromBorder
    },
    horizontalPositionOptions(horizontal, distanceFromBorder)
  );
};

// ======================
// Label Rules
// ======================

// TODO:  Use Michael's stylesheet
const badgeRules = css({
  color: '#1976D2',
  border: '1px solid #1976D2',
  fontSize: '10',
  fontWeight: '600'
});

const noteRules = css({
  color: 'rgba(0,0,0,.85)',
  fontSize: '13',
  fontWeight: '400'
});

const typeRules = (type: Type) => (type === 'badge' ? badgeRules : noteRules);

const labelRules = (type, distanceFromBorder, padding, position, uppercase) =>
  css(
    labelPositionRules(position, distanceFromBorder),
    {
      // Defaults
      cursor: 'default',
      borderRadius: '2',
      letterSpacing: '.6',
      padding: '5 10',
      userSelect: 'none'
    },
    typeRules(type),
    {
      // Overrides
      padding: padding,
      textTransform: uppercase ? 'uppercase' : 'normal'
    }
  );

// ======================
// Label
// ======================

export interface Props {
  // Event Handlers
  handleClick?: (e: any) => void;

  // Properties
  content: any;
  distanceFromBorder?: number;
  padding?: any;
  position: Position;
  type: Type;
  uppercase?: boolean;
}

export const Label = ({
  handleClick,
  content,
  distanceFromBorder = 10,
  padding = '5 10',
  position,
  type,
  uppercase = false
}: Props) => {
  const rules = labelRules(
    type,
    distanceFromBorder,
    padding,
    position,
    uppercase
  );
  return (
    <div onClick={handleClick} {...rules} tabIndex={0}>
      {content}
    </div>
  );
};
