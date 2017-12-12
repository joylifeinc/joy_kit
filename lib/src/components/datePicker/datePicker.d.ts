/// <reference types="react" />
import * as React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
export interface Props {
    date: any;
    updateDate: (e) => any;
}
export default class DateSelector extends React.Component<Props, {}> {
    constructor(props: any);
    render(): JSX.Element;
}
