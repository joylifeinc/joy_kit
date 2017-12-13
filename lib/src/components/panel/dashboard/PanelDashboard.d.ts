/// <reference types="react" />
import 'velocity-animate';
import 'velocity-animate/velocity.ui';
import { Props as PanelTopNavProps } from './PanelTopNav';
import { PanelMain } from './main/PanelMain';
import { Props as PanelMainConsoleProps } from './main/PanelMainConsole';
import { Props as PanelMainContentProps } from './main/PanelMainContent';
import { Props as PanelBottomNavProps } from './PanelBottomNav';
export declare const PanelDashboard: {
    TopNav: (props: PanelTopNavProps) => JSX.Element;
    Main: {
        Container: typeof PanelMain;
        Content: (props: PanelMainContentProps) => JSX.Element;
        Console: (props: PanelMainConsoleProps) => JSX.Element;
    };
    BottomNav: (props: PanelBottomNavProps) => JSX.Element;
};
