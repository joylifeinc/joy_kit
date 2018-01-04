import * as React from 'react';
import { css, StyleAttribute } from 'glamor';

import { Fragments, weddingNameString } from '../../';

export interface Props {
  id?: string;
  className?: string;
  owner: string;
  fiancee?: string;
  useOwnerNameFirst?: boolean;
  wrap?: boolean;
  trailingAmpersand?: boolean;
  inline?: boolean;
  styles?: StyleAttribute | object;
}

const baseRules = css({
  fontWeight: 100,
  margin: 0
});

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
    : primary.length > secondary.length ? true : false;
};

const WeddingName: React.SFC<Props> = ({
  className,
  id,
  owner = '',
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

  const styleRules = css(baseRules, styles);

  let content;
  if (inline) {
    content = weddingNameString(primary, secondary);
  } else {
    trailingAmpersand = shouldHaveTrailingAmpersand(
      primary,
      secondary,
      trailingAmpersand
    );

    content = (
      <Fragments>
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
      </Fragments>
    );
  }

  return (
    <h1 id={id} className={className} {...styleRules}>
      {content}
    </h1>
  );
};

WeddingName.defaultProps = {
  trailingAmpersand: false,
  wrap: false,
  inline: false,
  useOwnerNameFirst: true
};

export { WeddingName };
