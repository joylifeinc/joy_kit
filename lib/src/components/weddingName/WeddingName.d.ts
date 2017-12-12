/// <reference types="react" />
import * as React from 'react';
import { StyleAttribute } from 'glamor';
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
declare const WeddingName: React.SFC<Props>;
export { WeddingName };
