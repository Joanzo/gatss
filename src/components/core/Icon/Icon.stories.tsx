import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { optionsKnob, withKnobs } from '@storybook/addon-knobs';

import { documentationConfig } from '~storybook/constants';
import Icon, { getIconsNames } from './Icon';

const iconValues = {
  ...getIconsNames(),
};

const iconSelect = () => {
  return optionsKnob('Icon', iconValues, 'arrow-thin-down', {
    display: 'select',
  }) as AppLib.IconString;
};

const story = storiesOf('Core|Icon', module);

story.add('Icon', () => <Icon icon={iconSelect()} size="1rem" />, {
  decorators: [withA11y, withInfo, withKnobs],
  parameters: documentationConfig,
});

story.add('Showcase', () => {
  const iconsNames = Object.keys(getIconsNames());

  return (
    <>
      <h1>Icons Showcase</h1>
      {iconsNames.map(item => (
        <Icon icon={item as AppLib.IconString} />
      ))}
    </>
  );
});
