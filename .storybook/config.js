import{ configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: "JoyKit",
  downPanelInRight: true,
  selectedAddonPanel: '@storybook/addon-knobs/panel'
})

configure(() => require('../stories'), module);
