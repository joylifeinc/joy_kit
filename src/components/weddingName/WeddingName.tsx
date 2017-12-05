import * as React from 'react';
import { css, StyleAttribute } from 'glamor';

import { Fragments, weddingNameString } from '../../';

export interface Props {
  owner: string;
  fiancee?: string;
  useOwnerNameFirst?: boolean;
  wrap?: boolean;
  trailingAmpersand?: boolean;
  inline?: boolean;
  styles?: StyleAttribute | object;
}

const getNameOrder = (
  owner: string,
  fiancee: string,
  useOwnerNameFirst: boolean
) => {
  const ownerFirstName = owner.split(' ')[0];
  const fianceeFirstName = fiancee.split(' ')[0];
  const isOwnerNameLonger = ownerFirstName.length > fianceeFirstName.length;
  if (useOwnerNameFirst || !isOwnerNameLonger) {
    return {
      primary: ownerFirstName,
      secondary: fianceeFirstName
    };
  }
  return {
    primary: fianceeFirstName,
    secondary: ownerFirstName
  };
};

const shouldHaveTrailingAmpersand = (
  primary: string,
  secondary: string,
  trailingAmpersand: boolean
) => {
  return trailingAmpersand
    ? true
    : primary.length - secondary.length > 2 ? true : false;
};

const WeddingName: React.SFC<Props> = ({
  owner,
  fiancee = '',
  inline,
  styles,
  trailingAmpersand,
  useOwnerNameFirst,
  wrap
}) => {
  const { primary, secondary } = getNameOrder(
    owner,
    fiancee,
    useOwnerNameFirst
  );

  const styleRules = css(styles);

  if (inline) {
    return <div {...styleRules}>{weddingNameString(primary, secondary)}</div>;
  }

  trailingAmpersand = shouldHaveTrailingAmpersand(
    primary,
    secondary,
    trailingAmpersand
  );

  return (
    <div {...styleRules}>
      {primary}
      {secondary &&
        (wrap ? (
          <Fragments>
            {!trailingAmpersand && ' &'}
            <br />
            {`${trailingAmpersand ? '& ' : ''} ${secondary}`}
          </Fragments>
        ) : (
          ` & ${secondary}`
        ))}
    </div>
  );
};

WeddingName.defaultProps = {
  trailingAmpersand: false,
  wrap: false,
  inline: false,
  useOwnerNameFirst: true
};

export { WeddingName };
