import * as React from 'react';
import { css } from 'glamor';

export interface Props {
  /** Title */
  title: string;

  /** Title option shows to right of title in slightly lighter font color */
  titleOption?: string;

  /** Subtitle, shows under the title */
  subtitle?: string;
}

const titleWrapperRules = css({
  '> div': {
    paddingBottom: '12px'
  }
});

const titleRules = css({
  fontWeight: '800'
});

const subTitleRules = css({
  paddingLeft: '4px',
  color: '#817f7f'
});

export const ActionHeader = ({ title, titleOption, subtitle }: Props) => (
  <div {...titleWrapperRules}>
    <div>
      <span {...titleRules}>{title}</span>
      <span {...subTitleRules}>{titleOption}</span>
    </div>
    <div>{subtitle}</div>
  </div>
);
