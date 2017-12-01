import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  showLeftPanel: true,
  selectedAddonPanel: 'knobs'
})

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
