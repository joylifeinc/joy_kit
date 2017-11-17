import { PanelTopNav, Props as PanelTopNavProps } from './PanelTopNav';
import { PanelMain } from './main/PanelMain';
import {
  PanelMainConsole,
  Props as PanelMainConsoleProps
} from './main/PanelMainConsole';
import {
  PanelMainContent,
  Props as PanelMainContentProps
} from './main/PanelMainContent';
import { PanelBottomNav, Props as PanelBottomNavProps } from './PanelBottomNav';

const Main = {
  Container: PanelMain,
  Content: PanelMainContent as (props: PanelMainContentProps) => JSX.Element,
  Console: PanelMainConsole as (props: PanelMainConsoleProps) => JSX.Element
};

export const PanelDashboard = {
  TopNav: PanelTopNav as (props: PanelTopNavProps) => JSX.Element,
  Main,
  BottomNav: PanelBottomNav as (props: PanelBottomNavProps) => JSX.Element
};
