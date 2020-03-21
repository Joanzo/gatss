import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { boolean, optionsKnob, text } from '@storybook/addon-knobs';
import { documentationConfig } from '~storybook/constants';

import Button from '~core/Button/Button';
import { getIconsNames } from '~core/Icon/Icon';

const story = storiesOf('Core|Buttons', module)
  .addDecorator(withInfo)
  .addParameters(documentationConfig);

const iconValues = {
  '(none)': '',
  ...getIconsNames(),
};

const prefixIconSelect = () => {
  return optionsKnob('Prefix Icon', iconValues, '', {
    display: 'select',
  }) as AppLib.IconString;
};

const suffixIconSelect = () => {
  return optionsKnob('Suffix Icon', iconValues, '', {
    display: 'select',
  }) as AppLib.IconString;
};

const buttonText = () => {
  return text('Text', 'Button Text');
};

const disabledAttr = () => {
  return boolean('Disabled', false);
};

const isActiveBool = () => {
  return boolean('Active', false);
};

story.add('Single Button', () => (
  <Button
    onClick={action('Button onClick')}
    prefixIcon={prefixIconSelect()}
    suffixIcon={suffixIconSelect()}
    disabled={disabledAttr()}
    isActive={isActiveBool()}
  >
    {buttonText()}
  </Button>
));
