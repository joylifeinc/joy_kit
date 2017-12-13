/// <reference types="react" />
import * as React from 'react';
export interface Props {
    eventDate?: string | number;
    color?: string;
    fontSize?: string | number;
    fontWeight?: string | number;
    margin?: string | number;
}
declare class CountdownTimer extends React.Component<Props, any> {
    static defaultProps: {
        fontWeight: number;
        fontSize: number;
        margin: number;
    };
    private timeLapseInterval;
    private todayMoment;
    private eventMoment;
    constructor(props: any);
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    private startCountdown;
    private stopCountdown;
    private isEventMomentValid;
    private isEventToday;
    private updateDisplayText;
    private getDifference;
    private getDayDifference;
    private getHourDifference;
    private getMinuteDifference;
    private getSecondDifference;
    private getTimeLapseText;
    render(): JSX.Element;
}
export { CountdownTimer };
